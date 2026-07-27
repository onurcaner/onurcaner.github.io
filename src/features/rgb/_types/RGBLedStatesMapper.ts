import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';

export interface RGBLedStatesMapper {
  map: (rgbLedStates: RGBLedState[]) => RGBLedState[];
}
