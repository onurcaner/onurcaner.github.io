import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryLocationRepositoryFindOneQuery } from '@/services/location/repository-queries-and-mutations/InMemoryLocationRepositoryFindOneQuery.ts';
import { LocationServerDataTransformer } from '@/services/location/transformers/LocationServerDataTransformer.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';
import { type LocationDataQueryOptions } from '@/services/location/types/LocationDataQueryOptions.ts';
import { type LocationServerData } from '@/services/location/types/LocationServerData.ts';
import { LocationClientDataVerifier } from '@/services/location/verifiers/LocationClientDataVerifier.ts';
import { LocationServerDataVerifier } from '@/services/location/verifiers/LocationServerDataVerifier.ts';

export class LocationDataQueryModel extends DataQueryModel<
  LocationDataQueryOptions,
  LocationServerData,
  LocationClientData
> {
  protected override _repositoryQuery =
    new InMemoryLocationRepositoryFindOneQuery();
  protected override _serverDataVerifier = new LocationServerDataVerifier();
  protected override _serverDataTransformer =
    new LocationServerDataTransformer();
  protected override _clientDataVerifier = new LocationClientDataVerifier();
}
