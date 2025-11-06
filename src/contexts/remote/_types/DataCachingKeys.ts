import type { DataCachingPrimaryKeys } from '@/contexts/remote/_types/DataCachingPrimaryKeys.ts';
import type { DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';

export type DataCachingKeys = [
  ...DataCachingPrimaryKeys,
  ...DataCachingSecondaryKeys,
];
