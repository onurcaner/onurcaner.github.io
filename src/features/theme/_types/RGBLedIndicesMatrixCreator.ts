import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';

export interface RGBLedIndicesMatrixCreator {
  templateMatrix: RGBLedIndex[][];
  selfLength: number;
  groupLength: number;
  createMatrix: (options?: {
    templateMatrix?: RGBLedIndex[][];
    waterfallCount: number;
    waterfallLength?: number;
  }) => RGBLedIndex[][];
}
