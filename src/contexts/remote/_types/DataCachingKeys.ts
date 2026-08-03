import { type DataCachingPrimaryKeys } from './DataCachingPrimaryKeys.ts';
import { type DataCachingSecondaryKeys } from './DataCachingSecondaryKeys.ts';

export type DataCachingKeys = [
  ...DataCachingPrimaryKeys,
  ...DataCachingSecondaryKeys,
];
