import { type DataCachingKeys } from './DataCachingKeys.ts';
import { type DataQueryCachingTimingOptions } from './DataQueryCachingTimingOptions.ts';

export interface DataQueryCachingOptions extends DataQueryCachingTimingOptions {
  keys: DataCachingKeys;
}
