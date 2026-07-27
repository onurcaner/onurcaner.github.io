import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { LinearRGBLedStatesMapper } from '@/features/rgb/utils/LinearRGBLedStatesMapper.ts';

export const testRGBControllerConfig: RGBControllerConfig = {
  initialNormalRGBLedStates: Array.from({ length: 144 }).map(
    (_, index): RGBLedState => ({
      color:
        index % 24 === 0
          ? `oklch(0.72 0.12 ${(index * 3).toString()})`
          : 'oklch(0 0 0)',
      isPreferringFallbackColor: index % 24 !== 0,
      transitionDuration: index % 24 === 0 ? '100ms' : '2000ms',
      transitionTimingFunction: 'ease-out',
    }),
  ),
  initialAlternativeRGBLedStates: Array.from({ length: 144 }).map(
    (_, index): RGBLedState => ({
      color:
        index % 24 === 0 || index % 24 === 1 || index % 24 === 2
          ? `oklch(0.72 0.12 ${(index * 3).toString()})`
          : 'oklch(0 0 0)',
      isPreferringFallbackColor: !(
        index % 24 === 0 ||
        index % 24 === 1 ||
        index % 24 === 2
      ),
      transitionDuration:
        index % 24 === 0 || index % 24 === 1 || index % 24 === 2
          ? '100ms'
          : '2000ms',
      transitionTimingFunction: 'ease-out',
    }),
  ),
  tickPeriodMs: 100,
  normalRGBLedStatesMapper: new LinearRGBLedStatesMapper([1, 0, 0, 0]),
  alternativeRGBLedStatesMapper: new LinearRGBLedStatesMapper([1, 0, 0, 0]),
};
