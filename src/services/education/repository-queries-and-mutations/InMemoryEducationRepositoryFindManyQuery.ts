import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryEducationRepository } from '@/services/education/constants/inMemoryEducationRepository.ts';
import { type EducationDataFindManyQueryOptions } from '@/services/education/types/EducationDataFindManyQueryOptions.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';

export class InMemoryEducationRepositoryFindManyQuery extends InMemoryRepositoryQuery<
  EducationDataFindManyQueryOptions,
  EducationServerData[]
> {
  protected override _errorMessage = 'Could not find any "Educations"';

  protected override _retrieveData(
    options: EducationDataFindManyQueryOptions,
  ): EducationServerData[] | null | undefined {
    const result = inMemoryEducationRepository
      .filter(
        (data) => data.content_language_code === options.contentLanguageCode,
      )
      .toSorted(
        (dataA, dataB) =>
          new Date(dataB.start_date).getTime() -
          new Date(dataA.start_date).getTime(),
      );
    return result.length > 0 ? result : null;
  }
}
