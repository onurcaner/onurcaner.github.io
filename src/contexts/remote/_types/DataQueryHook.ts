export type DataQueryHook<TQueryOptions, TData> = (
  options: TQueryOptions,
) => TData;
