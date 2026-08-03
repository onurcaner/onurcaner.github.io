import { type RGBLedState } from './RGBLedState.ts';

export interface RGBControllerState {
  normalRGBLedStates: RGBLedState[];
  alternativeRGBLedStates: RGBLedState[];
}
