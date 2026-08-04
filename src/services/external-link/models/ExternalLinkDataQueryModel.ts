import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryExternalLinkRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryExternalLinkRepositoryFindOneQuery.ts';
import { ExternalLinkServerDataTransformer } from '../transformers/ExternalLinkServerDataTransformer.ts';
import { type ExternalLinkClientData } from '../types/ExternalLinkClientData.ts';
import { type ExternalLinkDataQueryOptions } from '../types/ExternalLinkDataQueryOptions.ts';
import { type ExternalLinkServerData } from '../types/ExternalLinkServerData.ts';
import { ExternalLinkClientDataVerifier } from '../verifiers/ExternalLinkClientDataVerifier.ts';
import { ExternalLinkServerDataVerifier } from '../verifiers/ExternalLinkServerDataVerifier.ts';

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
