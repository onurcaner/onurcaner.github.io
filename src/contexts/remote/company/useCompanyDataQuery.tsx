/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { CompanyDataQueryModel } from '@/services/company/models/CompanyDataQueryModel.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';
import { type CompanyDataQueryOptions } from '@/services/company/types/CompanyDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { CompanyDataQueryCachingOptionsCreator } from './CompanyDataQueryCachingOptionsCreator.ts';

export const useCompanyDataQuery: DataQueryHook<
  CompanyDataQueryOptions,
  CompanyClientData
> = (options) => {
  const cachingOptions = new CompanyDataQueryCachingOptionsCreator().create(
    options,
  );

  const query = useSuspenseQuery({
    queryFn: (): Promise<CompanyClientData> => {
      return new CompanyDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return query.data;
};
