import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryCompanyRepository } from '../constants/InMemoryCompanyRepository.ts';
import { type CompanyDataQueryOptions } from '../types/CompanyDataQueryOptions.ts';
import { type CompanyServerData } from '../types/CompanyServerData.ts';

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
    const { repository } = new InMemoryCompanyRepository();
    return repository.find((data) => data.id === options.id);
  }
}
