/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { ListDataQueryModel } from '@/services/list/models/ListDataQueryModel.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';
import { type ListDataQueryOptions } from '@/services/list/types/ListDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { ListDataQueryCachingOptionsCreator } from './ListDataQueryCachingOptionsCreator.ts';

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
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
