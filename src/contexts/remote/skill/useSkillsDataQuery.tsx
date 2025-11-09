/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { type DataQueryHook } from '@/contexts/remote/_types/DataQueryHook.ts';
import { SkillsDataQueryCachingOptionsCreator } from '@/contexts/remote/skill/SkillsDataQueryCachingOptionsCreator.ts';
import { SkillsDataQueryModel } from '@/services/skill/models/SkillsDataQueryModel.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';
import { type SkillsDataQueryOptions } from '@/services/skill/types/SkillsDataQueryOptions.ts';

export const useSkillsDataQuery: DataQueryHook<
  SkillsDataQueryOptions,
  SkillClientData[]
> = (options) => {
  const cachingOptions = new SkillsDataQueryCachingOptionsCreator().create(
    options,
  );

  const { data } = useSuspenseQuery({
    queryFn: () => {
      return new SkillsDataQueryModel().query(options);
    },
    queryKey: cachingOptions.keys,
    staleTime: cachingOptions.staleTimeInMs,
    refetchInterval: cachingOptions.refetchingIntervalInMs,
    gcTime: cachingOptions.cacheLifespanInMs,
  });

  return data;
};
