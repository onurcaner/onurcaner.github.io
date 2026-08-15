import { type RGBLedState } from './RGBLedState.ts';
import { type RGBLedStatesMapper } from './RGBLedStatesMapper.ts';

export interface RGBControllerConfig {
  initialRGBLedStates: RGBLedState[];
  tickIntervalMs: number;
  rgbLedStatesMapper: RGBLedStatesMapper;
}
