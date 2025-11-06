import { type DataQueryCachingOptions } from '@/contexts/remote/_types/DataQueryCachingOptions.ts';

export interface DataQueryCachingOptionsCreator<TOptions> {
  create(options: TOptions): DataQueryCachingOptions;
}
