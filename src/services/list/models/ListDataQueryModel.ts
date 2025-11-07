import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryListRepositoryFindOneQuery } from '@/services/list/repository-queries-and-mutations/InMemoryListRepositoryFindOneQuery.ts';
import { ListServerDataTransformer } from '@/services/list/transformers/ListServerDataTransformer.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';
import { type ListDataQueryOptions } from '@/services/list/types/ListDataQueryOptions.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';
import { ListClientDataVerifier } from '@/services/list/verifiers/ListClientDataVerifier.ts';
import { ListServerDataVerifier } from '@/services/list/verifiers/ListServerDataVerifier.ts';

export class ListDataQueryModel extends DataQueryModel<
  ListDataQueryOptions,
  ListServerData,
  ListClientData
> {
  protected override _repositoryQuery =
    new InMemoryListRepositoryFindOneQuery();
  protected override _serverDataVerifier = new ListServerDataVerifier();
  protected override _serverDataTransformer = new ListServerDataTransformer();
  protected override _clientDataVerifier = new ListClientDataVerifier();
}
