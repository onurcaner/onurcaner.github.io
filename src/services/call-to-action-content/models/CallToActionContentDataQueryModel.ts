import { type QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryCallToActionContentRepositoryFindOneQuery } from '@/services/call-to-action-content/repository-queries-and-mutations/InMemoryCallToActionContentRepositoryFindOneQuery.ts';
import { CallToActionContentServerDataTransformer } from '@/services/call-to-action-content/transformers/CallToActionContentServerDataTransformer.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';
import { CallToActionContentClientDataVerifier } from '@/services/call-to-action-content/verifiers/CallToActionContentClientDataVerifier.ts';
import { CallToActionContentServerDataVerifier } from '@/services/call-to-action-content/verifiers/CallToActionContentServerDataVerifier.ts';

export class CallToActionContentDataQueryModel extends DataQueryModel<
  CallToActionContentDataQueryOptions,
  CallToActionContentServerData,
  CallToActionContentClientData,
  QueryMode.One
> {
  protected override _repositoryQuery =
    new InMemoryCallToActionContentRepositoryFindOneQuery();
  protected override _serverDataVerifier =
    new CallToActionContentServerDataVerifier();
  protected override _serverDataTransformer =
    new CallToActionContentServerDataTransformer();
  protected override _clientDataVerifier =
    new CallToActionContentClientDataVerifier();
}
