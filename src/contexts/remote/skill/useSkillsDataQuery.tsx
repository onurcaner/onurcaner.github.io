/* eslint-disable @tanstack/query/exhaustive-deps */
import { useSuspenseQuery } from '@tanstack/react-query';

import { SkillsDataQueryModel } from '@/services/skill/models/SkillsDataQueryModel.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';
import { type SkillsDataQueryOptions } from '@/services/skill/types/SkillsDataQueryOptions.ts';

import { type DataQueryHook } from '../_types/DataQueryHook.ts';

import { SkillsDataQueryCachingOptionsCreator } from './SkillsDataQueryCachingOptionsCreator.ts';

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
    staleTime: cachingOptions.staleTimeMs,
    refetchInterval: cachingOptions.refetchingIntervalMs,
    gcTime: cachingOptions.cacheLifespanMs,
  });

  return data;
};
