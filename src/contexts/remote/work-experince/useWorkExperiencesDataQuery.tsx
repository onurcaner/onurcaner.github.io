/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { WorkExperiencesDataQueryModel } from '@/services/work-experience/models/WorkExperiencesDataQueryModel.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';
import { type WorkExperiencesDataQueryOptions } from '@/services/work-experience/types/WorkExperiencesDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { WorkExperiencesDataQueryCachingOptionsCreator } from './WorkExperiencesDataQueryCachingOptionsCreator.ts';

export const useWorkExperiencesDataQuery: DataQueryHook<
  WorkExperiencesDataQueryOptions,
  WorkExperienceClientData[]
> = (options) => {
  const cachingOptions =
    new WorkExperiencesDataQueryCachingOptionsCreator().create(options);

  const { data } = useSuspenseQuery({
    queryFn: () => {
      return new WorkExperiencesDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
