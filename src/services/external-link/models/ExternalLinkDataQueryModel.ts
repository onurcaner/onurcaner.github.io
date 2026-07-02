import { QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryExternalLinkRepositoryFindOneQuery } from '@/services/external-link/repository-queries-and-mutations/InMemoryExternalLinkRepositoryFindOneQuery.ts';
import { ExternalLinkServerDataTransformer } from '@/services/external-link/transformers/ExternalLinkServerDataTransformer.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';
import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';
import { ExternalLinkClientDataVerifier } from '@/services/external-link/verifiers/ExternalLinkClientDataVerifier.ts';
import { ExternalLinkServerDataVerifier } from '@/services/external-link/verifiers/ExternalLinkServerDataVerifier.ts';

export class ExternalLinkDataQueryModel extends DataQueryModel<
  ExternalLinkDataQueryOptions,
  ExternalLinkServerData,
  ExternalLinkClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryExternalLinkRepositoryFindOneQuery(),
      serverDataVerifier: new ExternalLinkServerDataVerifier(),
      serverDataTransformer: new ExternalLinkServerDataTransformer(),
      clientDataVerifier: new ExternalLinkClientDataVerifier(),
    });
  }
}
