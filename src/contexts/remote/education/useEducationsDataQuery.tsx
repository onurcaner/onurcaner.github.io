/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { EducationsDataQueryCachingOptionsCreator } from '@/contexts/remote/education/EducationsDataQueryCachingOptionsCreator.ts';
import { EducationsDataQueryModel } from '@/services/education/models/EducationsDataQueryModel.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';
import { type EducationsDataQueryOptions } from '@/services/education/types/EducationsDataQueryOptions.ts';

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
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
