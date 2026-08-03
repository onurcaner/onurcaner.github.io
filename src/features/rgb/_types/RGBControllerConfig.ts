import { type RGBLedState } from './RGBLedState.ts';
import { type RGBLedStatesMapper } from './RGBLedStatesMapper.ts';

export interface RGBControllerConfig {
  initialNormalRGBLedStates: RGBLedState[];
  initialAlternativeRGBLedStates: RGBLedState[];
  tickIntervalMs: number;
  normalRGBLedStatesMapper: RGBLedStatesMapper;
  alternativeRGBLedStatesMapper: RGBLedStatesMapper;
}
