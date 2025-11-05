import { InMemoryRepositoryQuery } from '@/services/_base/repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryEducationProviderRepository } from '@/services/education-provider/constants/inMemoryEducationProviderRepository.ts';
import { type EducationProviderDataFindOneQueryOptions } from '@/services/education-provider/types/EducationProviderDataFindOneQueryOptions.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export class InMemoryEducationProviderRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  EducationProviderDataFindOneQueryOptions,
  EducationProviderServerData
> {
  protected _errorMessage = 'Could not find "Education Provider"';

  protected _retrieveData(
    options: EducationProviderDataFindOneQueryOptions,
  ): EducationProviderServerData | null | undefined {
    const result = inMemoryEducationProviderRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
