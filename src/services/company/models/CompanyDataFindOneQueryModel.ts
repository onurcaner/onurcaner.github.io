import { DataFindOneQueryModel } from '@/services/_models/DataFindOneQueryModel.ts';
import { InMemoryCompanyRepositoryFindOneQuery } from '@/services/company/repository-queries-and-mutations/InMemoryCompanyRepositoryFindOneQuery.ts';
import { CompanyServerDataTransformer } from '@/services/company/transformers/CompanyServerDataTransformer.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';
import { type CompanyDataFindOneQueryOptions } from '@/services/company/types/CompanyDataFindOneQueryOptions.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';
import { CompanyClientDataVerifier } from '@/services/company/verifiers/CompanyClientDataVerifier.ts';
import { CompanyServerDataVerifier } from '@/services/company/verifiers/CompanyServerDataVerifier.ts';

export class CompanyDataFindOneQueryModel extends DataFindOneQueryModel<
  CompanyDataFindOneQueryOptions,
  CompanyServerData,
  CompanyClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryCompanyRepositoryFindOneQuery(),
      serverDataVerifier: new CompanyServerDataVerifier(),
      serverDataTransformer: new CompanyServerDataTransformer(),
      clientDataVerifier: new CompanyClientDataVerifier(),
    });
  }
}
