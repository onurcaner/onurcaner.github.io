/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { ExperiencesDataQueryModel } from '@/services/experience/models/ExperiencesDataQueryModel.ts';
import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';
import { type ExperiencesDataQueryOptions } from '@/services/experience/types/ExperiencesDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { ExperiencesDataQueryCachingOptionsCreator } from './ExperiencesDataQueryCachingOptionsCreator.ts';

export const useExperiencesDataQuery: DataQueryHook<
  ExperiencesDataQueryOptions,
  ExperienceClientData[]
> = (options) => {
  const cachingOptions = new ExperiencesDataQueryCachingOptionsCreator().create(
    options,
  );

  const { data } = useSuspenseQuery({
    queryFn: () => {
      return new ExperiencesDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
