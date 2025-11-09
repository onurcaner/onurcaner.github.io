/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { DeveloperDataQueryCachingOptionsCreator } from '@/contexts/remote/developer/DeveloperDataQueryCachingOptionsCreator.ts';
import { DeveloperDataQueryModel } from '@/services/developer/models/DeveloperDataQueryModel.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';
import { type DeveloperDataQueryOptions } from '@/services/developer/types/DeveloperDataQueryOptions.ts';

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
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return query.data;
};
