import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryLocationRepository } from '@/services/location/constants/inMemoryLocationRepository.ts';
import type { LocationDataFindOneQueryOptions } from '@/services/location/types/LocationDataFindOneQueryOptions.ts';
import type { LocationServerData } from '@/services/location/types/LocationServerData.ts';

export class InMemoryLocationRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  LocationDataFindOneQueryOptions,
  LocationServerData
> {
  protected override _errorMessage = 'Could not find "Location"';

  protected override _retrieveData(
    options: LocationDataFindOneQueryOptions,
  ): LocationServerData | null | undefined {
    const result = inMemoryLocationRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
