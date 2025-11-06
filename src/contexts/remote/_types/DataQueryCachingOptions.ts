import { type DataCachingKeys } from '@/contexts/remote/_types/DataCachingKeys.ts';
import { type DataQueryCachingTimingOptions } from '@/contexts/remote/_types/DataQueryCachingTimingOptions.ts';

export interface DataQueryCachingOptions extends DataQueryCachingTimingOptions {
  keys: DataCachingKeys;
}
