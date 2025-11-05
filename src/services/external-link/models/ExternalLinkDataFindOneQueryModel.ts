import { DataFindOneQueryModel } from '@/services/_base/models/DataFindOneQueryModel.ts';
import { InMemoryExternalLinkRepositoryFindOneQuery } from '@/services/external-link/repository-queries-and-mutations/InMemoryExternalLinkRepositoryFindOneQuery.ts';
import { ExternalLinkServerToClientDataTransformer } from '@/services/external-link/transformers/ExternalLinkServerToClientDataTransformer.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';
import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';
import { ExternalLinkClientDataVerifier } from '@/services/external-link/verifiers/ExternalLinkClientDataVerifier.ts';
import { ExternalLinkServerDataVerifier } from '@/services/external-link/verifiers/ExternalLinkServerDataVerifier.ts';

export class ExternalLinkDataFindOneQueryModel extends DataFindOneQueryModel<
  ExternalLinkDataQueryOptions,
  ExternalLinkServerData,
  ExternalLinkClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryExternalLinkRepositoryFindOneQuery(),
      serverDataVerifier: new ExternalLinkServerDataVerifier(),
      serverToClientDataTransformer:
        new ExternalLinkServerToClientDataTransformer(),
      clientDataVerifier: new ExternalLinkClientDataVerifier(),
    });
  }
}
