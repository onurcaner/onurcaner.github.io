/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { ExternalLinkDataQueryModel } from '@/services/external-link/models/ExternalLinkDataQueryModel.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';
import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { ExternalLinkDataQueryCachingOptionsCreator } from './ExternalLinkDataQueryCachingOptionsCreator.ts';

export const useExternalLinkDataQuery: DataQueryHook<
  ExternalLinkDataQueryOptions,
  ExternalLinkClientData
> = (options) => {
  const cachingOptions =
    new ExternalLinkDataQueryCachingOptionsCreator().create(options);

  const { data } = useSuspenseQuery({
    queryFn: (): Promise<ExternalLinkClientData> => {
      return new ExternalLinkDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
