import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';
import { type RGBLedStatesMapper } from '@/contexts/global/rgb-controller/RGBLedStatesMapper.ts';

export interface RGBControllerConfig {
  initialNormalRGBLedStates: RGBLedState[];
  initialAlternativeRGBLedStates: RGBLedState[];
  tickPeriodMs: number;
  normalRGBLedStatesMapper: RGBLedStatesMapper;
  alternativeRGBLedStatesMapper: RGBLedStatesMapper;
}
