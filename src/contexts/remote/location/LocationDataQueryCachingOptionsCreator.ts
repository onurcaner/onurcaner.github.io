import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type LocationDataQueryOptions } from '@/services/location/types/LocationDataQueryOptions.ts';

export class LocationDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<LocationDataQueryOptions> {
  protected override _dataName = DataName.Location;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: LocationDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
