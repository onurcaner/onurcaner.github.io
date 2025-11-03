import { DataQueryModel } from '@/services/_base/models/DataQueryModel.ts';
import { InMemoryCallToActionContentRepositoryQuery } from '@/services/call-to-action-content/repositories/InMemoryCallToActionContentRepositoryQuery.ts';
import { CallToActionContentServerToClientDataTransformer } from '@/services/call-to-action-content/transformers/CallToActionContentServerToClientDataTransformer.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';
import { CallToActionContentClientDataVerifier } from '@/services/call-to-action-content/verifiers/CallToActionContentClientDataVerifier.ts';
import { CallToActionContentServerDataVerifier } from '@/services/call-to-action-content/verifiers/CallToActionContentServerDataVerifier.ts';

export class CallToActionContentDataQueryModel extends DataQueryModel<
  CallToActionContentDataQueryOptions,
  CallToActionContentServerData,
  CallToActionContentClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryCallToActionContentRepositoryQuery(),
      serverDataVerifier: new CallToActionContentServerDataVerifier(),
      serverToClientDataTransformer:
        new CallToActionContentServerToClientDataTransformer(),
      clientDataVerifier: new CallToActionContentClientDataVerifier(),
    });
  }
}
