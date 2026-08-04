import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryEducationProviderRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryEducationProviderRepositoryFindOneQuery.ts';
import { EducationProviderServerDataTransformer } from '../transformers/EducationProviderServerDataTransformer.ts';
import { type EducationProviderClientData } from '../types/EducationProviderClientData.ts';
import { type EducationProviderDataQueryOptions } from '../types/EducationProviderDataQueryOptions.ts';
import { type EducationProviderServerData } from '../types/EducationProviderServerData.ts';
import { EducationProviderClientDataVerifier } from '../verifiers/EducationProviderClientDataVerifier.ts';
import { EducationProviderServerDataVerifier } from '../verifiers/EducationProviderServerDataVerifier.ts';

export class EducationProviderDataQueryModel extends DataQueryModel<
  EducationProviderDataQueryOptions,
  EducationProviderServerData,
  EducationProviderClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryEducationProviderRepositoryFindOneQuery(),
      serverDataVerifier: new EducationProviderServerDataVerifier(),
      serverDataTransformer: new EducationProviderServerDataTransformer(),
      clientDataVerifier: new EducationProviderClientDataVerifier(),
    });
  }
}
