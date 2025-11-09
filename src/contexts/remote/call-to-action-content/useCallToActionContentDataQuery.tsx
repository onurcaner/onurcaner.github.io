/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { CallToActionContentDataQueryCachingOptionsCreator } from '@/contexts/remote/call-to-action-content/CallToActionContentDataQueryCachingOptionsCreator.ts';
import { CallToActionContentDataQueryModel } from '@/services/call-to-action-content/models/CallToActionContentDataQueryModel.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';

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
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
