import { type RGBLedState } from '@/styling/_types/RGBLedState.ts';

export interface RGBLedStatesMapper {
  map: (rgbLedStates: RGBLedState[]) => RGBLedState[];
}
