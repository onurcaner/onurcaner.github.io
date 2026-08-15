import { type MotionValue } from 'motion';

import { type RGBLedState } from './RGBLedState.ts';

export interface RGBControllerContextState {
  rgbLedStatesMotionValue: MotionValue<RGBLedState[]>;
}
