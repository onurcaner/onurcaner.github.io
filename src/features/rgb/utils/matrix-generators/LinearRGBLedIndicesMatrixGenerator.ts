import { LinearMatrixDirection } from '../../_types/LinearMatrixDirection.ts';
import { type RGBLedIndex } from '../../_types/RGBLedIndex.ts';
import { type RGBLedIndicesMatrixGenerator } from '../../_types/RGBLedIndicesMatrixGenerator.ts';

export class LinearRGBLedIndicesMatrixGenerator implements RGBLedIndicesMatrixGenerator {
  private _initialStartIndex: number;
  private _boundaryIndex: number;
  private _length: number;
  private _stackSize: number;
  private _direction: LinearMatrixDirection;
  private _startIndex: number;

  public static readonly Direction = {
    ToLeft: LinearMatrixDirection.ToLeft,
    ToRight: LinearMatrixDirection.ToRight,
    ToBottom: LinearMatrixDirection.ToBottom,
    ToTop: LinearMatrixDirection.ToTop,
  };

  public constructor({
    startIndex,
    boundaryIndex,
    length,
    stackSize = 1,
    direction = LinearMatrixDirection.ToRight,
  }: {
    startIndex: number;
    boundaryIndex: number;
    length: number;
    stackSize?: number;
    direction?: LinearMatrixDirection;
  }) {
    this._initialStartIndex = startIndex;
    this._boundaryIndex = boundaryIndex;
    this._length = length;
    this._stackSize = stackSize;
    this._direction = direction;
    this._startIndex = this._initialStartIndex;
  }

  public generate(): RGBLedIndex[][] {
    if (this._direction === LinearMatrixDirection.ToRight) {
      return this._generateToRight();
    }

    return [[]];
  }

  public reset(): void {
    this._startIndex = this._initialStartIndex;
  }

  private _generateToRight(): RGBLedIndex[][] {
    // snapshot
    const startIndex = this._startIndex;
    const endIndex = this._startIndex + this._length;

    // transition
    this._startIndex += this._length;

    // job
    const generatedArray = this._generateArray({
      start: startIndex,
      end: endIndex,
    });
    const niceArray = this._normalizeArrayOverflows(generatedArray);

    return Array.from({ length: this._stackSize }).map((_, i) =>
      this._shiftArray({ array: niceArray, shiftTimes: i }),
    );
  }

  private _generateArray({
    start,
    end,
  }: {
    start: number;
    end: number;
  }): RGBLedIndex[] {
    return Array.from({ length: end - start }).map((_, i) => start + i);
  }

  private _normalizeArrayOverflows(array: RGBLedIndex[]): RGBLedIndex[] {
    return array.map((value) =>
      value === null ? null : value % this._boundaryIndex,
    );
  }

  private _shiftArray({
    array,
    shiftTimes,
  }: {
    array: RGBLedIndex[];
    shiftTimes: number;
  }): RGBLedIndex[] {
    return array.map((value) =>
      value === null ? null : value + shiftTimes * this._boundaryIndex,
    );
  }
}
