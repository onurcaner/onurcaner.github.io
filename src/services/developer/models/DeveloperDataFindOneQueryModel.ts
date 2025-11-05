import { DataFindOneQueryModel } from '@/services/_base/models/DataFindOneQueryModel.ts';
import { InMemoryDeveloperRepositoryFindOneQuery } from '@/services/developer/repository-queries-and-mutations/InMemoryDeveloperRepositoryFindOneQuery.ts';
import { DeveloperServerToClientDataTransformer } from '@/services/developer/transformers/DeveloperServerToClientDataTransformer.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';
import { type DeveloperDataFindOneQueryOptions } from '@/services/developer/types/DeveloperDataFindOneQueryOptions.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';
import { DeveloperClientDataVerifier } from '@/services/developer/verifiers/DeveloperClientDataVerifier.ts';
import { DeveloperServerDataVerifier } from '@/services/developer/verifiers/DeveloperServerDataVerifier.ts';

export class DeveloperDataFindOneQueryModel extends DataFindOneQueryModel<
  DeveloperDataFindOneQueryOptions,
  DeveloperServerData,
  DeveloperClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryDeveloperRepositoryFindOneQuery(),
      serverDataVerifier: new DeveloperServerDataVerifier(),
      serverToClientDataTransformer:
        new DeveloperServerToClientDataTransformer(),
      clientDataVerifier: new DeveloperClientDataVerifier(),
    });
  }
}
