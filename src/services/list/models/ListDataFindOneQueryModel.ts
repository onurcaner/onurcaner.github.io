import { DataFindOneQueryModel } from '@/services/_base/models/DataFindOneQueryModel.ts';
import { InMemoryListRepositoryFindOneQuery } from '@/services/list/repository-queries-and-mutations/InMemoryListRepositoryFindOneQuery.ts';
import { ListServerToClientDataTransformer } from '@/services/list/transformers/ListServerToClientDataTransformer.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';
import { type ListDataFindOneQueryOptions } from '@/services/list/types/ListDataFindOneQueryOptions.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';
import { ListClientDataVerifier } from '@/services/list/verifiers/ListClientDataVerifier.ts';
import { ListServerDataVerifier } from '@/services/list/verifiers/ListServerDataVerifier.ts';

export class ListDataFindOneQueryModel extends DataFindOneQueryModel<
  ListDataFindOneQueryOptions,
  ListServerData,
  ListClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryListRepositoryFindOneQuery(),
      serverDataVerifier: new ListServerDataVerifier(),
      serverToClientDataTransformer: new ListServerToClientDataTransformer(),
      clientDataVerifier: new ListClientDataVerifier(),
    });
  }
}
