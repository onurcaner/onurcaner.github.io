import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { LinearRGBLedStatesMapper } from '@/features/rgb/utils/LinearRGBLedStatesMapper.ts';

export class TestThemeRGBControllerConfig implements RGBControllerConfig {
  public initialNormalRGBLedStates: RGBLedState[] = Array.from({
    length: 144,
  }).map((_, index): RGBLedState => ({
    color:
      index % 24 === 0
        ? `oklch(0.72 0.12 ${(index * 3).toString()})`
        : 'oklch(0 0 0)',
    isPreferringFallbackColor: index % 24 !== 0,
    transitionDuration: index % 24 === 0 ? '200ms' : '2000ms',
    transitionTimingFunction:
      'var(--theme-transition-timing-function-ease-out)',
  }));

  public initialAlternativeRGBLedStates: RGBLedState[] = Array.from({
    length: 144,
  }).map((_, index): RGBLedState => ({
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
        ? '200ms'
        : '2000ms',
    transitionTimingFunction:
      'var(--theme-transition-timing-function-ease-out)',
  }));

  public tickPeriodMs = 200;

  public normalRGBLedStatesMapper = new LinearRGBLedStatesMapper([1, 0, 0, 0]);
  public alternativeRGBLedStatesMapper = new LinearRGBLedStatesMapper([
    1, 0, 0, 0,
  ]);
}
