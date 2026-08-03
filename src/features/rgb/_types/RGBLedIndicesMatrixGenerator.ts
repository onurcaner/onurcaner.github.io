import { type RGBLedIndex } from './RGBLedIndex.ts';

export interface RGBLedIndicesMatrixGenerator {
  generate: () => RGBLedIndex[][];
  reset: () => void;
}
