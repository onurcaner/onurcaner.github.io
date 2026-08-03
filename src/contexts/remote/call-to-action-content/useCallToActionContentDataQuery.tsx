/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { CallToActionContentDataQueryModel } from '@/services/call-to-action-content/models/CallToActionContentDataQueryModel.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { CallToActionContentDataQueryCachingOptionsCreator } from './CallToActionContentDataQueryCachingOptionsCreator.ts';

export const useCallToActionContentDataQuery: DataQueryHook<
  CallToActionContentDataQueryOptions,
  CallToActionContentClientData
> = (options) => {
  const cachingOptions =
    new CallToActionContentDataQueryCachingOptionsCreator().create(options);

  const { data } = useSuspenseQuery({
    queryFn: (): Promise<CallToActionContentClientData> => {
      return new CallToActionContentDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
