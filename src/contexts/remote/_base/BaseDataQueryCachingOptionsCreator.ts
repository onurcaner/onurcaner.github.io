import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { DefaultDataCachingTiming } from '@/contexts/remote/_constants/DefaultDataCachingTiming.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type DataQueryCachingOptions } from '@/contexts/remote/_types/DataQueryCachingOptions.ts';
import { type DataQueryCachingOptionsCreator } from '@/contexts/remote/_types/DataQueryCachingOptionsCreator.ts';
import type { DataQueryCachingTimingOptions } from '@/contexts/remote/_types/DataQueryCachingTimingOptions.ts';

export class BaseDataQueryCachingOptionsCreator<TQueryOptions>
  implements DataQueryCachingOptionsCreator<TQueryOptions>
{
  protected _dataName: DataName;
  protected _dataType: DataType;

  protected _createSecondaryKeys: (
    options: TQueryOptions,
  ) => DataCachingSecondaryKeys;

  public constructor({
    dataName,
    dataType,
    createSecondaryKeys,
  }: {
    dataName: DataName;
    dataType: DataType;
    createSecondaryKeys: (options: TQueryOptions) => DataCachingSecondaryKeys;
  }) {
    this._dataName = dataName;
    this._dataType = dataType;
    this._createSecondaryKeys = createSecondaryKeys;
  }

  public create(options: TQueryOptions): DataQueryCachingOptions {
    return {
      keys: [
        this._dataName,
        this._dataType,
        ...this._createSecondaryKeys(options),
      ],
      ...this._createDataCachingTimingOptions(),
    };
  }

  protected _createDataCachingTimingOptions(): DataQueryCachingTimingOptions {
    return {
      staleTimeInMs: DefaultDataCachingTiming.StaleTimeInMs,
      refetchingIntervalInMs: DefaultDataCachingTiming.RefetchingIntervalInMs,
      cacheLifespanInMs: DefaultDataCachingTiming.CacheLifeSpanInMs,
    };
  }
}
