import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryCompanyRepository } from '@/services/company/constants/inMemoryCompanyRepository.ts';
import { type CompanyDataFindOneQueryOptions } from '@/services/company/types/CompanyDataFindOneQueryOptions.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export class InMemoryCompanyRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  CompanyDataFindOneQueryOptions,
  CompanyServerData
> {
  protected override _errorMessage = 'Could not find "Company"';

  protected override _retrieveData(
    options: CompanyDataFindOneQueryOptions,
  ): CompanyServerData | null | undefined {
    const result = inMemoryCompanyRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
