import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryWorkExperienceRepository } from '@/services/work-experience/constants/inMemoryWorkExperienceRepository.ts';
import { type WorkExperienceDataFindManyQueryOptions } from '@/services/work-experience/types/WorkExperienceDataFindManyQueryOptions.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';

export class InMemoryWorkExperienceRepositoryFindManyQuery extends InMemoryRepositoryQuery<
  WorkExperienceDataFindManyQueryOptions,
  WorkExperienceServerData[]
> {
  protected override _errorMessage = 'Could not find any "Skills"';

  protected override _retrieveData(
    options: WorkExperienceDataFindManyQueryOptions,
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
