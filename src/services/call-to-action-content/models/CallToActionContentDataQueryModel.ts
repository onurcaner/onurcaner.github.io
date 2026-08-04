import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryCallToActionContentRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryCallToActionContentRepositoryFindOneQuery.ts';
import { CallToActionContentServerDataTransformer } from '../transformers/CallToActionContentServerDataTransformer.ts';
import { type CallToActionContentClientData } from '../types/CallToActionContentClientData.ts';
import { type CallToActionContentDataQueryOptions } from '../types/CallToActionContentDataQueryOptions.ts';
import { type CallToActionContentServerData } from '../types/CallToActionContentServerData.ts';
import { CallToActionContentClientDataVerifier } from '../verifiers/CallToActionContentClientDataVerifier.ts';
import { CallToActionContentServerDataVerifier } from '../verifiers/CallToActionContentServerDataVerifier.ts';

export class CallToActionContentDataQueryModel extends DataQueryModel<
  CallToActionContentDataQueryOptions,
  CallToActionContentServerData,
  CallToActionContentClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryCallToActionContentRepositoryFindOneQuery(),
      serverDataVerifier: new CallToActionContentServerDataVerifier(),
      serverDataTransformer: new CallToActionContentServerDataTransformer(),
      clientDataVerifier: new CallToActionContentClientDataVerifier(),
    });
  }
}
