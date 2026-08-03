/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { EducationProviderDataQueryModel } from '@/services/education-provider/models/EducationProviderDataQueryModel.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';
import { type EducationProviderDataQueryOptions } from '@/services/education-provider/types/EducationProviderDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { EducationProviderDataQueryCachingOptionsCreator } from './EducationProviderDataQueryCachingOptionsCreator.ts';

export const useEducationProviderDataQuery: DataQueryHook<
  EducationProviderDataQueryOptions,
  EducationProviderClientData
> = (options) => {
  const cachingOptions =
    new EducationProviderDataQueryCachingOptionsCreator().create(options);

  const { data } = useSuspenseQuery({
    queryFn: (): Promise<EducationProviderClientData> => {
      return new EducationProviderDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
