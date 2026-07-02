import { QueryMode } from '@/services/_constants/QueryMode.ts';
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
  LocationClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryLocationRepositoryFindOneQuery(),
      serverDataVerifier: new LocationServerDataVerifier(),
      serverDataTransformer: new LocationServerDataTransformer(),
      clientDataVerifier: new LocationClientDataVerifier(),
    });
  }
}
