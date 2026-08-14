import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryExperienceRepository } from '../constants/InMemoryExperienceRepository.ts';
import { type ExperienceServerData } from '../types/ExperienceServerData.ts';
import { type ExperiencesDataQueryOptions } from '../types/ExperiencesDataQueryOptions.ts';

export class InMemoryExperienceRepositoryFindManyQuery extends InMemoryRepositoryQuery<
  ExperiencesDataQueryOptions,
  ExperienceServerData[]
> {
  protected override _createErrorMessage(
    options: ExperiencesDataQueryOptions,
  ): string {
    return `Could not find "Experiences Data" for content language code: ${options.contentLanguageCode}`;
  }

  protected override _retrieveData(
    options: ExperiencesDataQueryOptions,
  ): ExperienceServerData[] | null | undefined {
    const { repository } = new InMemoryExperienceRepository();
    const result = repository
      .filter(
        (data) => data.content_language_code === options.contentLanguageCode,
      )
      .filter((data) =>
        options.associatedExperienceCategories
          .map((experienceCategoryOption) =>
            data.associated_experience_categories.includes(
              experienceCategoryOption,
            ),
          )
          .reduce((reduced, current) => reduced || current, false),
      )
      .toSorted(
        (dataA, dataB) =>
          new Date(dataA.end_date).getTime() -
          new Date(dataB.end_date).getTime(),
      );

    return result.length > 0 ? result : null;
  }
}
