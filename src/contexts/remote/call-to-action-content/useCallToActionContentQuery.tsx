import { useSuspenseQuery } from '@tanstack/react-query';

import { CallToActionContentDataCachingOptionsCreator } from '@/contexts/remote/call-to-action-content/CallToActionContentDataCachingOptionsCreator.ts';
import { CallToActionContentDataFindOneQueryModel } from '@/services/call-to-action-content/models/CallToActionContentDataFindOneQueryModel.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentDataFindOneQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataFindOneQueryOptions.ts';

export function useCallToActionContentQuery(
  options: CallToActionContentDataFindOneQueryOptions,
): CallToActionContentClientData {
  const cachingOptions =
    new CallToActionContentDataCachingOptionsCreator().create(options);

  const query = useSuspenseQuery({
    queryFn: () =>
      new CallToActionContentDataFindOneQueryModel().query(options),
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return query.data;
}
