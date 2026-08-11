import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';

import { type RGBLedIndicesMatrixCreator } from '../_types/RGBLedIndicesMatrixCreator.ts';

export class BasicRGBLedIndicesMatrixCreator implements RGBLedIndicesMatrixCreator {
  public templateMatrix: RGBLedIndex[][];
  public selfLength: number;
  public groupLength: number;
  private _boundaryIndex;

  public constructor({
    templateMatrix,
    selfLength,
    groupLength,
    boundaryIndex,
  }: {
    templateMatrix: RGBLedIndex[][];
    selfLength: number;
    groupLength: number;
    boundaryIndex: number;
  }) {
    this.templateMatrix = templateMatrix;
    this.selfLength = selfLength;
    this.groupLength = groupLength;
    this._boundaryIndex = boundaryIndex;
  }

  public createMatrix(
    options:
      | {
          templateMatrix?: RGBLedIndex[][];
          waterfallCount: number;
          waterfallLength?: number;
        }
      | undefined,
  ): RGBLedIndex[][] {
    const templateMatrix = options?.templateMatrix ?? this.templateMatrix;
    const waterfallCount = options?.waterfallCount ?? 0;
    const waterfallLength = options?.waterfallLength ?? this.groupLength;

    return templateMatrix.map((row) =>
      row.map((rgbLedIndex) => {
        if (rgbLedIndex === null) return null;

        const addAmount = waterfallCount * waterfallLength;
        const level = Math.floor(rgbLedIndex / this._boundaryIndex);
        const offset = rgbLedIndex % this._boundaryIndex;

        const newOffset = (addAmount + offset) % this._boundaryIndex;
        return newOffset + level * this._boundaryIndex;
      }),
    );
  }
}
