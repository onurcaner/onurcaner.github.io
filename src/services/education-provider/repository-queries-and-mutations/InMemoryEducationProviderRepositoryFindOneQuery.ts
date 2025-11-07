import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryEducationProviderRepository } from '@/services/education-provider/constants/inMemoryEducationProviderRepository.ts';
import { type EducationProviderDataQueryOptions } from '@/services/education-provider/types/EducationProviderDataQueryOptions.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export class InMemoryEducationProviderRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  EducationProviderDataQueryOptions,
  EducationProviderServerData
> {
  protected override _createErrorMessage(
    options: EducationProviderDataQueryOptions,
  ): string {
    return `Could not find "Education Provider Data" for id: ${options.id}`;
  }

  protected override _retrieveData(
    options: EducationProviderDataQueryOptions,
  ): EducationProviderServerData | null | undefined {
    const result = inMemoryEducationProviderRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
