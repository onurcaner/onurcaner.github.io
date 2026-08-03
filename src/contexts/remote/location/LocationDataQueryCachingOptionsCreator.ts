import { type LocationDataQueryOptions } from '@/services/location/types/LocationDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class LocationDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<LocationDataQueryOptions> {
  protected override _dataName = DataName.Location;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: LocationDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
