import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { type RGBLedStatesMapper } from '@/features/rgb/_types/RGBLedStatesMapper.ts';

export interface RGBControllerConfig {
  initialNormalRGBLedStates: RGBLedState[];
  initialAlternativeRGBLedStates: RGBLedState[];
  tickPeriodMs: number;
  normalRGBLedStatesMapper: RGBLedStatesMapper;
  alternativeRGBLedStatesMapper: RGBLedStatesMapper;
}
