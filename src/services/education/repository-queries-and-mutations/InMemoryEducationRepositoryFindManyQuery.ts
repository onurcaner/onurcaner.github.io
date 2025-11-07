import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryEducationRepository } from '@/services/education/constants/inMemoryEducationRepository.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';
import { type EducationsDataQueryOptions } from '@/services/education/types/EducationsDataQueryOptions.ts';

export class InMemoryEducationRepositoryFindManyQuery extends InMemoryRepositoryQuery<
  EducationsDataQueryOptions,
  EducationServerData[]
> {
  protected override _createErrorMessage(
    options: EducationsDataQueryOptions,
  ): string {
    return `Could not find "Educations Data" for content language code: ${options.contentLanguageCode}`;
  }

  protected override _retrieveData(
    options: EducationsDataQueryOptions,
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
