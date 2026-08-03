import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { DefaultDataCachingTime } from '../_constants/DefaultDataCachingTime.ts';
import { type DataCachingPrimaryKeys } from '../_types/DataCachingPrimaryKeys.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';
import { type DataQueryCachingOptions } from '../_types/DataQueryCachingOptions.ts';
import { type DataQueryCachingTimingOptions } from '../_types/DataQueryCachingTimingOptions.ts';

export abstract class DataQueryCachingOptionsCreator<TQueryOptions> {
  protected abstract _dataName: DataName;
  protected abstract _dataType: DataType;

  protected abstract _createSecondaryKeys(
    options: TQueryOptions,
  ): DataCachingSecondaryKeys;

  public create(options: TQueryOptions): DataQueryCachingOptions {
    return {
      keys: [
        ...this._createPrimaryKeys(),
        ...this._createSecondaryKeys(options),
      ],
      ...this._createDataCachingTimingOptions(),
    };
  }

  protected _createPrimaryKeys(): DataCachingPrimaryKeys {
    return [this._dataName, this._dataType];
  }

  // Override when necessary
  protected _createDataCachingTimingOptions(): DataQueryCachingTimingOptions {
    return {
      staleTimeMs: DefaultDataCachingTime.StaleTimeMs,
      refetchingIntervalMs: DefaultDataCachingTime.RefetchingIntervalMs,
      cacheLifespanMs: DefaultDataCachingTime.CacheLifeSpanMs,
    };
  }
}
