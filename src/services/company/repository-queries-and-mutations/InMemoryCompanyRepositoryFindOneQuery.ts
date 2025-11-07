import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryCompanyRepository } from '@/services/company/constants/inMemoryCompanyRepository.ts';
import { type CompanyDataQueryOptions } from '@/services/company/types/CompanyDataQueryOptions.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export class InMemoryCompanyRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  CompanyDataQueryOptions,
  CompanyServerData
> {
  protected override _createErrorMessage(
    options: CompanyDataQueryOptions,
  ): string {
    return `Could not find "Company Data" for id: ${options.id}`;
  }

  protected override _retrieveData(
    options: CompanyDataQueryOptions,
  ): CompanyServerData | null | undefined {
    const result = inMemoryCompanyRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
