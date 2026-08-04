import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryCompanyRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryCompanyRepositoryFindOneQuery.ts';
import { CompanyServerDataTransformer } from '../transformers/CompanyServerDataTransformer.ts';
import { type CompanyClientData } from '../types/CompanyClientData.ts';
import { type CompanyDataQueryOptions } from '../types/CompanyDataQueryOptions.ts';
import { type CompanyServerData } from '../types/CompanyServerData.ts';
import { CompanyClientDataVerifier } from '../verifiers/CompanyClientDataVerifier.ts';
import { CompanyServerDataVerifier } from '../verifiers/CompanyServerDataVerifier.ts';

export class CompanyDataQueryModel extends DataQueryModel<
  CompanyDataQueryOptions,
  CompanyServerData,
  CompanyClientData,
  QueryMode.One
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
