/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { LinearRGBLedStatesMapper } from '@/features/rgb/utils/LinearRGBLedStatesMapper.ts';

enum Option {
  TickIntervalMs = 50,
  SnakeEvery = 16,
  NormalSnakeSize = 1,
  AlternativeSnakeSize = 8,
  TotalLength = 96,
  TransitionDurationMs = 0,
}

export class TestThemeRGBControllerConfig implements RGBControllerConfig {
  public initialRGBLedStates: RGBLedState[] = Array.from({
    length: Option.TotalLength,
  }).map((_, index): RGBLedState => ({
    normalColor:
      index % Option.SnakeEvery < Option.NormalSnakeSize
        ? `oklch(0.72 0.12 ${((index * 360) / Option.TotalLength).toString()})`
        : 'oklch(0 0 0)',
    alternativeColor:
      index % Option.SnakeEvery < Option.AlternativeSnakeSize
        ? `oklch(0.72 0.12 ${((index * 360) / Option.TotalLength).toString()})`
        : 'oklch(0 0 0)',

    isNormalColorPreferringFallbackColor: !(
      index % Option.SnakeEvery <
      Option.NormalSnakeSize
    ),
    isAlternativeColorPreferringFallbackColor: !(
      index % Option.SnakeEvery <
      Option.AlternativeSnakeSize
    ),

    normalTransitionDuration:
      index % Option.SnakeEvery < Option.NormalSnakeSize
        ? `${(Option.TransitionDurationMs * 1).toString()}ms`
        : `${(Option.TransitionDurationMs * 1).toString()}ms`,
    alternativeTransitionDuration:
      index % Option.SnakeEvery < Option.AlternativeSnakeSize
        ? `${(Option.TransitionDurationMs * 1).toString()}ms`
        : `${(Option.TransitionDurationMs * 1).toString()}ms`,

    normalTransitionTimingFunction:
      'var(--theme-transition-timing-function-ease-out)',
    alternativeTransitionTimingFunction:
      'var(--theme-transition-timing-function-ease-out)',
  }));

  public tickIntervalMs = Option.TickIntervalMs;

  public rgbLedStatesMapper = new LinearRGBLedStatesMapper([1, 0, 0, 0]);
}
