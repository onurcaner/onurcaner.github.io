import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';

export interface RGBLedStatesMapper {
  map: (rgbLedStates: RGBLedState[]) => RGBLedState[];
}
