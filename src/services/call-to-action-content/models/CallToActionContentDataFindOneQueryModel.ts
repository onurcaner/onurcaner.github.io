import { DataFindOneQueryModel } from '@/services/_base/models/DataFindOneQueryModel.ts';
import { InMemoryCallToActionContentRepositoryFindOneQuery } from '@/services/call-to-action-content/repository-queries-and-mutations/InMemoryCallToActionContentRepositoryFindOneQuery.ts';
import { CallToActionContentServerToClientDataTransformer } from '@/services/call-to-action-content/transformers/CallToActionContentServerToClientDataTransformer.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentDataFindOneQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataFindOneQueryOptions.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';
import { CallToActionContentClientDataVerifier } from '@/services/call-to-action-content/verifiers/CallToActionContentClientDataVerifier.ts';
import { CallToActionContentServerDataVerifier } from '@/services/call-to-action-content/verifiers/CallToActionContentServerDataVerifier.ts';

export class CallToActionContentDataFindOneQueryModel extends DataFindOneQueryModel<
  CallToActionContentDataFindOneQueryOptions,
  CallToActionContentServerData,
  CallToActionContentClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryCallToActionContentRepositoryFindOneQuery(),
      serverDataVerifier: new CallToActionContentServerDataVerifier(),
      serverToClientDataTransformer:
        new CallToActionContentServerToClientDataTransformer(),
      clientDataVerifier: new CallToActionContentClientDataVerifier(),
    });
  }
}
