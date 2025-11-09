/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { ExternalLinkDataQueryCachingOptionsCreator } from '@/contexts/remote/external-link/ExternalLinkDataQueryCachingOptionsCreator.ts';
import { ExternalLinkDataQueryModel } from '@/services/external-link/models/ExternalLinkDataQueryModel.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';
import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';

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
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
