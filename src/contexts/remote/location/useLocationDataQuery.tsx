/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { LocationDataQueryModel } from '@/services/location/models/LocationDataQueryModel.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';
import { type LocationDataQueryOptions } from '@/services/location/types/LocationDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { LocationDataQueryCachingOptionsCreator } from './LocationDataQueryCachingOptionsCreator.ts';

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
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
