import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryDeveloperRepositoryFindOneQuery } from '@/services/developer/repository-queries-and-mutations/InMemoryDeveloperRepositoryFindOneQuery.ts';
import { DeveloperServerDataTransformer } from '@/services/developer/transformers/DeveloperServerDataTransformer.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';
import { type DeveloperDataQueryOptions } from '@/services/developer/types/DeveloperDataQueryOptions.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';
import { DeveloperClientDataVerifier } from '@/services/developer/verifiers/DeveloperClientDataVerifier.ts';
import { DeveloperServerDataVerifier } from '@/services/developer/verifiers/DeveloperServerDataVerifier.ts';

export class DeveloperDataQueryModel extends DataQueryModel<
  DeveloperDataQueryOptions,
  DeveloperServerData,
  DeveloperClientData
> {
  protected override _repositoryQuery =
    new InMemoryDeveloperRepositoryFindOneQuery();
  protected override _serverDataVerifier = new DeveloperServerDataVerifier();
  protected override _serverDataTransformer =
    new DeveloperServerDataTransformer();
  protected override _clientDataVerifier = new DeveloperClientDataVerifier();
}
