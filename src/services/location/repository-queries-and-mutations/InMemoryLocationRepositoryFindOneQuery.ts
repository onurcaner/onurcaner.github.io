import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryLocationRepository } from '@/services/location/constants/inMemoryLocationRepository.ts';
import type { LocationDataQueryOptions } from '@/services/location/types/LocationDataQueryOptions.ts';
import type { LocationServerData } from '@/services/location/types/LocationServerData.ts';

export class InMemoryLocationRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  LocationDataQueryOptions,
  LocationServerData
> {
  protected override _createErrorMessage(
    options: LocationDataQueryOptions,
  ): string {
    return `Could not find "Location Data" for id: ${options.id}`;
  }

  protected override _retrieveData(
    options: LocationDataQueryOptions,
  ): LocationServerData | null | undefined {
    const result = inMemoryLocationRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
