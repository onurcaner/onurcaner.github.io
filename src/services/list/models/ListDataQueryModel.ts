import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryListRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryListRepositoryFindOneQuery.ts';
import { ListServerDataTransformer } from '../transformers/ListServerDataTransformer.ts';
import { type ListClientData } from '../types/ListClientData.ts';
import { type ListDataQueryOptions } from '../types/ListDataQueryOptions.ts';
import { type ListServerData } from '../types/ListServerData.ts';
import { ListClientDataVerifier } from '../verifiers/ListClientDataVerifier.ts';
import { ListServerDataVerifier } from '../verifiers/ListServerDataVerifier.ts';

export class ListDataQueryModel extends DataQueryModel<
  ListDataQueryOptions,
  ListServerData,
  ListClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryListRepositoryFindOneQuery(),
      serverDataVerifier: new ListServerDataVerifier(),
      serverDataTransformer: new ListServerDataTransformer(),
      clientDataVerifier: new ListClientDataVerifier(),
    });
  }
}
