/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { DeveloperDataQueryModel } from '@/services/developer/models/DeveloperDataQueryModel.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';
import { type DeveloperDataQueryOptions } from '@/services/developer/types/DeveloperDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { DeveloperDataQueryCachingOptionsCreator } from './DeveloperDataQueryCachingOptionsCreator.ts';

export const useDeveloperDataQuery: DataQueryHook<
  DeveloperDataQueryOptions,
  DeveloperClientData
> = (options) => {
  const cachingOptions = new DeveloperDataQueryCachingOptionsCreator().create(
    options,
  );

  const query = useSuspenseQuery({
    queryFn: (): Promise<DeveloperClientData> => {
      return new DeveloperDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return query.data;
};
