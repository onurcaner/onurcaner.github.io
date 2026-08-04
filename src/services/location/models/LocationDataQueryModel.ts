import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryLocationRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryLocationRepositoryFindOneQuery.ts';
import { LocationServerDataTransformer } from '../transformers/LocationServerDataTransformer.ts';
import { type LocationClientData } from '../types/LocationClientData.ts';
import { type LocationDataQueryOptions } from '../types/LocationDataQueryOptions.ts';
import { type LocationServerData } from '../types/LocationServerData.ts';
import { LocationClientDataVerifier } from '../verifiers/LocationClientDataVerifier.ts';
import { LocationServerDataVerifier } from '../verifiers/LocationServerDataVerifier.ts';

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
