import { type RGBLedState } from './RGBLedState.ts';

export interface RGBLedStatesMapper {
  map: (rgbLedStates: RGBLedState[]) => RGBLedState[];
}
