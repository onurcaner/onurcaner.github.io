/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { LocationDataQueryCachingOptionsCreator } from '@/contexts/remote/location/LocationDataQueryCachingOptionsCreator.ts';
import { LocationDataQueryModel } from '@/services/location/models/LocationDataQueryModel.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';
import { type LocationDataQueryOptions } from '@/services/location/types/LocationDataQueryOptions.ts';

export const useLocationDataQuery: DataQueryHook<
  LocationDataQueryOptions,
  LocationClientData
> = (options) => {
  const cachingOptions = new LocationDataQueryCachingOptionsCreator().create(
    options,
  );

  const { data } = useSuspenseQuery({
    queryFn: () => {
      return new LocationDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
