import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { type RGBLedStatesMapper } from '@/features/rgb/_types/RGBLedStatesMapper.ts';

enum MovementDirection {
  Forward = 'forward',
  Backward = 'backward',
  Pause = 'pause',
}

export class LinearRGBLedStatesMapper implements RGBLedStatesMapper {
  private readonly _movements: MovementDirection[]; // forward stop backward stop
  private _currentMovementIndex = 0;

  public constructor(movementPattern: [number, number, number, number]) {
    const hasNegative = movementPattern.some((value) => value < 0);
    if (hasNegative)
      throw new Error(
        'Invalid movement pattern. Movement pattern values can not be negative.',
      );
    const totalMovementAmount = movementPattern.reduce(
      (sum, currentValue) => sum + currentValue,
      0,
    );
    if (totalMovementAmount === 0)
      throw new Error('Invalid movement pattern. All zeros: [0,0,0,0]');

    this._movements = [
      ...Array.from({ length: movementPattern[0] }).map(
        (_) => MovementDirection.Forward,
      ),
      ...Array.from({ length: movementPattern[1] }).map(
        (_) => MovementDirection.Pause,
      ),
      ...Array.from({ length: movementPattern[2] }).map(
        (_) => MovementDirection.Backward,
      ),
      ...Array.from({ length: movementPattern[3] }).map(
        (_) => MovementDirection.Pause,
      ),
    ];
  }

  public map(rgbLedStates: RGBLedState[]): RGBLedState[] {
    // snapshot
    const movement: MovementDirection =
      this._movements[this._currentMovementIndex];

    // transition
    this._currentMovementIndex =
      (this._currentMovementIndex + 1) % this._movements.length;

    // job
    if (movement === MovementDirection.Forward)
      return this._rotateForward(rgbLedStates);
    if (movement === MovementDirection.Backward)
      return this._rotateBackward(rgbLedStates);
    return rgbLedStates;
  }

  private _rotateForward<T>(items: T[]): T[] {
    return [
      ...items.slice(items.length - 1, items.length), // last one
      ...items.slice(0, items.length - 1),
    ];
  }

  private _rotateBackward<T>(items: T[]): T[] {
    return [...items.slice(1, items.length), ...items.slice(0, 1)];
  }
}
