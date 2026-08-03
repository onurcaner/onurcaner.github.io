/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { HeroContentDataQueryModel } from '@/services/hero-content/models/HeroContentDataQueryModel.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';
import { type HeroContentDataQueryOptions } from '@/services/hero-content/types/HeroContentDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { HeroContentDataQueryCachingOptionsCreator } from './HeroContentDataQueryCachingOptionsCreator.ts';

export const useHeroContentDataQuery: DataQueryHook<
  HeroContentDataQueryOptions,
  HeroContentClientData
> = (options) => {
  const cachingOptions = new HeroContentDataQueryCachingOptionsCreator().create(
    options,
  );

  const { data } = useSuspenseQuery({
    queryFn: (): Promise<HeroContentClientData> => {
      return new HeroContentDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
