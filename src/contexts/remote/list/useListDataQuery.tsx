/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { ListDataQueryCachingOptionsCreator } from '@/contexts/remote/list/ListDataQueryCachingOptionsCreator.ts';
import { ListDataQueryModel } from '@/services/list/models/ListDataQueryModel.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';
import { type ListDataQueryOptions } from '@/services/list/types/ListDataQueryOptions.ts';

export const useListDataQuery: DataQueryHook<
  ListDataQueryOptions,
  ListClientData
> = (options) => {
  const cachingOptions = new ListDataQueryCachingOptionsCreator().create(
    options,
  );

  const { data } = useSuspenseQuery({
    queryFn: () => {
      return new ListDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
