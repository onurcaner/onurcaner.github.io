import { InMemoryRepositoryQuery } from '@/services/_base/repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryCompanyRepository } from '@/services/company/constants/inMemoryCompanyRepository.ts';
import { type CompanyDataFindOneQueryOptions } from '@/services/company/types/CompanyDataFindOneQueryOptions.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export class InMemoryCompanyRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  CompanyDataFindOneQueryOptions,
  CompanyServerData
> {
  protected _errorMessage = 'Could not find "Company"';

  protected _retrieveData(
    options: CompanyDataFindOneQueryOptions,
  ): CompanyServerData | null | undefined {
    const result = inMemoryCompanyRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
