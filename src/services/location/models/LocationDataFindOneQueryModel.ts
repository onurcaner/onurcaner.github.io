import { DataFindOneQueryModel } from '@/services/_models/DataFindOneQueryModel.ts';
import { InMemoryLocationRepositoryFindOneQuery } from '@/services/location/repository-queries-and-mutations/InMemoryLocationRepositoryFindOneQuery.ts';
import { LocationServerDataTransformer } from '@/services/location/transformers/LocationServerDataTransformer.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';
import { type LocationDataFindOneQueryOptions } from '@/services/location/types/LocationDataFindOneQueryOptions.ts';
import { type LocationServerData } from '@/services/location/types/LocationServerData.ts';
import { LocationClientDataVerifier } from '@/services/location/verifiers/LocationClientDataVerifier.ts';
import { LocationServerDataVerifier } from '@/services/location/verifiers/LocationServerDataVerifier.ts';

export class LocationDataFindOneQueryModel extends DataFindOneQueryModel<
  LocationDataFindOneQueryOptions,
  LocationServerData,
  LocationClientData
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
