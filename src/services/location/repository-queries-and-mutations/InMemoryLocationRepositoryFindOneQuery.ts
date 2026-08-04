import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryLocationRepository } from '../constants/InMemoryLocationRepository.ts';
import { type LocationDataQueryOptions } from '../types/LocationDataQueryOptions.ts';
import { type LocationServerData } from '../types/LocationServerData.ts';

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
    const { repository } = new InMemoryLocationRepository();

    return repository.find((data) => data.id === options.id);
  }
}
