import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryDeveloperRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryDeveloperRepositoryFindOneQuery.ts';
import { DeveloperServerDataTransformer } from '../transformers/DeveloperServerDataTransformer.ts';
import { type DeveloperClientData } from '../types/DeveloperClientData.ts';
import { type DeveloperDataQueryOptions } from '../types/DeveloperDataQueryOptions.ts';
import { type DeveloperServerData } from '../types/DeveloperServerData.ts';
import { DeveloperClientDataVerifier } from '../verifiers/DeveloperClientDataVerifier.ts';
import { DeveloperServerDataVerifier } from '../verifiers/DeveloperServerDataVerifier.ts';

export class DeveloperDataQueryModel extends DataQueryModel<
  DeveloperDataQueryOptions,
  DeveloperServerData,
  DeveloperClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryDeveloperRepositoryFindOneQuery(),
      serverDataVerifier: new DeveloperServerDataVerifier(),
      serverDataTransformer: new DeveloperServerDataTransformer(),
      clientDataVerifier: new DeveloperClientDataVerifier(),
    });
  }
}
