import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { DefaultDataCachingTime } from '@/contexts/remote/_constants/DefaultDataCachingTime.ts';
import type { DataCachingPrimaryKeys } from '@/contexts/remote/_types/DataCachingPrimaryKeys.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type DataQueryCachingOptions } from '@/contexts/remote/_types/DataQueryCachingOptions.ts';
import { type DataQueryCachingTimingOptions } from '@/contexts/remote/_types/DataQueryCachingTimingOptions.ts';

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

  protected _createDataCachingTimingOptions(): DataQueryCachingTimingOptions {
    return {
      staleTimeInMs: DefaultDataCachingTime.StaleTimeInMs,
      refetchingIntervalInMs: DefaultDataCachingTime.RefetchingIntervalInMs,
      cacheLifespanInMs: DefaultDataCachingTime.CacheLifeSpanInMs,
    };
  }
}
