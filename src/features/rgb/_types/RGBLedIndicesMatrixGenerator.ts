import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';

export interface RGBLedIndicesMatrixGenerator {
  generate: () => RGBLedIndex[][];
  reset: () => void;
}
