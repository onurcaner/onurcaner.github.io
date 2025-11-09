/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { EducationProviderDataQueryCachingOptionsCreator } from '@/contexts/remote/education-provider/EducationProviderDataQueryCachingOptionsCreator.ts';
import { EducationProviderDataQueryModel } from '@/services/education-provider/models/EducationProviderDataQueryModel.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';
import { type EducationProviderDataQueryOptions } from '@/services/education-provider/types/EducationProviderDataQueryOptions.ts';

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
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
