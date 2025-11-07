/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { CompanyDataQueryCachingOptionsCreator } from '@/contexts/remote/company/CompanyDataQueryCachingOptionsCreator.ts';
import { CompanyDataQueryModel } from '@/services/company/models/CompanyDataQueryModel.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';
import { type CompanyDataQueryOptions } from '@/services/company/types/CompanyDataQueryOptions.ts';

export const useCompanyDataQuery: DataQueryHook<
  CompanyDataQueryOptions,
  CompanyClientData
> = (options) => {
  const cachingOptions = new CompanyDataQueryCachingOptionsCreator().create(
    options,
  );

  const query = useSuspenseQuery({
    queryFn: () => new CompanyDataQueryModel().query(options),
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return query.data;
};
