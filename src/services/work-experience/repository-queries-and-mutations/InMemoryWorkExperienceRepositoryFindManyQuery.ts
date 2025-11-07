import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryWorkExperienceRepository } from '@/services/work-experience/constants/inMemoryWorkExperienceRepository.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';
import { type WorkExperiencesDataQueryOptions } from '@/services/work-experience/types/WorkExperiencesDataQueryOptions.ts';

export class InMemoryWorkExperienceRepositoryFindManyQuery extends InMemoryRepositoryQuery<
  WorkExperiencesDataQueryOptions,
  WorkExperienceServerData[]
> {
  protected override _createErrorMessage(
    options: WorkExperiencesDataQueryOptions,
  ): string {
    return `Could not find "Work Experiences Data" for content language code: ${options.contentLanguageCode}`;
  }

  protected override _retrieveData(
    options: WorkExperiencesDataQueryOptions,
  ): WorkExperienceServerData[] | null | undefined {
    const result = inMemoryWorkExperienceRepository
      .filter(
        (data) => data.content_language_code === options.contentLanguageCode,
      )
      .filter((data) =>
        options.associatedWorkExperienceCategories
          .map((workExperienceCategoryOption) =>
            data.associated_work_experience_categories.includes(
              workExperienceCategoryOption,
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
