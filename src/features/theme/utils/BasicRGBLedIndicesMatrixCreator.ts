import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';

import { type RGBLedIndicesMatrixCreator } from '../_types/RGBLedIndicesMatrixCreator.ts';

export class BasicRGBLedIndicesMatrixCreator implements RGBLedIndicesMatrixCreator {
  public templateMatrix: RGBLedIndex[][];
  private _boundaryIndex = 144;
  private _waterfallLength: number;

  public constructor({
    templateMatrix,
    waterfallLength,
  }: {
    templateMatrix: RGBLedIndex[][];
    waterfallLength: number;
  }) {
    this.templateMatrix = templateMatrix;
    this._waterfallLength = waterfallLength;
  }

  public createMatrix({
    templateMatrix = this.templateMatrix,
    waterfallIndex,
    waterfallLength = this._waterfallLength,
  }: {
    templateMatrix?: RGBLedIndex[][];
    waterfallIndex: number;
    waterfallLength?: number;
  }): RGBLedIndex[][] {
    return templateMatrix.map((row) =>
      row.map((rgbLedIndex) => {
        if (rgbLedIndex === null) return null;

        const addAmount = waterfallIndex * waterfallLength;
        const level = Math.floor(rgbLedIndex / this._boundaryIndex);
        const offset = rgbLedIndex % this._boundaryIndex;

        const newOffset = (addAmount + offset) % this._boundaryIndex;
        return newOffset + level * this._boundaryIndex;
      }),
    );
  }
}
