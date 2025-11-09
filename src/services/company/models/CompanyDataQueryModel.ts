import { type QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryCompanyRepositoryFindOneQuery } from '@/services/company/repository-queries-and-mutations/InMemoryCompanyRepositoryFindOneQuery.ts';
import { CompanyServerDataTransformer } from '@/services/company/transformers/CompanyServerDataTransformer.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';
import { type CompanyDataQueryOptions } from '@/services/company/types/CompanyDataQueryOptions.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';
import { CompanyClientDataVerifier } from '@/services/company/verifiers/CompanyClientDataVerifier.ts';
import { CompanyServerDataVerifier } from '@/services/company/verifiers/CompanyServerDataVerifier.ts';

export class CompanyDataQueryModel extends DataQueryModel<
  CompanyDataQueryOptions,
  CompanyServerData,
  CompanyClientData,
  QueryMode.One
> {
  protected override _repositoryQuery =
    new InMemoryCompanyRepositoryFindOneQuery();
  protected override _serverDataVerifier = new CompanyServerDataVerifier();
  protected override _serverDataTransformer =
    new CompanyServerDataTransformer();
  protected override _clientDataVerifier = new CompanyClientDataVerifier();
}
