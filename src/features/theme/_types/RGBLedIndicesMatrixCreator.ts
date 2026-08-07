import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';

export interface RGBLedIndicesMatrixCreator {
  templateMatrix: RGBLedIndex[][];
  createMatrix: (options: {
    templateMatrix?: RGBLedIndex[][];
    waterfallIndex: number;
    waterfallLength?: number;
  }) => RGBLedIndex[][];
}
