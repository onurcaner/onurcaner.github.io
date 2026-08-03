/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { EducationsDataQueryModel } from '@/services/education/models/EducationsDataQueryModel.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';
import { type EducationsDataQueryOptions } from '@/services/education/types/EducationsDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { EducationsDataQueryCachingOptionsCreator } from './EducationsDataQueryCachingOptionsCreator.ts';

export const useEducationsDataQuery: DataQueryHook<
  EducationsDataQueryOptions,
  EducationClientData[]
> = (options) => {
  const cachingOptions = new EducationsDataQueryCachingOptionsCreator().create(
    options,
  );

  const { data } = useSuspenseQuery({
    queryFn: (): Promise<EducationClientData[]> => {
      return new EducationsDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
