import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';

export interface RGBControllerState {
  normalRGBLedStates: RGBLedState[];
  alternativeRGBLedStates: RGBLedState[];
}
