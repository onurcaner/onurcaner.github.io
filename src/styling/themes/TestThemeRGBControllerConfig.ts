import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { LinearRGBLedStatesMapper } from '@/features/rgb/utils/LinearRGBLedStatesMapper.ts';

enum Option {
  TickIntervalMs = 1000,
  Period = 12,
  TransitionDurationMs = 0,
}

export class TestThemeRGBControllerConfig implements RGBControllerConfig {
  public initialNormalRGBLedStates: RGBLedState[] = Array.from({
    length: 144,
  }).map((_, index): RGBLedState => ({
    color:
      index % Option.Period === 2
        ? `oklch(0.72 0.12 ${((index * 360) / 144).toString()})`
        : 'oklch(0 0 0)',
    isPreferringFallbackColor: index % Option.Period !== 2,
    transitionDuration:
      index % Option.Period === 2
        ? `${(Option.TransitionDurationMs * 2).toString()}ms`
        : `${(Option.TransitionDurationMs * 10).toString()}ms`,
    transitionTimingFunction:
      'var(--theme-transition-timing-function-ease-out)',
  }));

  public initialAlternativeRGBLedStates: RGBLedState[] = Array.from({
    length: 144,
  }).map((_, index): RGBLedState => ({
    color:
      index % Option.Period === 2 ||
      index % Option.Period === 1 ||
      index % Option.Period === 0
        ? `oklch(0.72 0.12 ${((index * 360) / 144).toString()})`
        : 'oklch(0 0 0)',
    isPreferringFallbackColor: !(
      index % Option.Period === 2 ||
      index % Option.Period === 1 ||
      index % Option.Period === 0
    ),
    transitionDuration:
      index % Option.Period === 2 ||
      index % Option.Period === 1 ||
      index % Option.Period === 0
        ? `${(Option.TransitionDurationMs * 2).toString()}ms`
        : `${(Option.TransitionDurationMs * 10).toString()}ms`,
    transitionTimingFunction:
      'var(--theme-transition-timing-function-ease-out)',
  }));

  public tickIntervalMs = Option.TickIntervalMs;

  public normalRGBLedStatesMapper = new LinearRGBLedStatesMapper([1, 0, 0, 0]);
  public alternativeRGBLedStatesMapper = new LinearRGBLedStatesMapper([
    1, 0, 0, 0,
  ]);
}

// export class TestThemeRGBControllerConfig implements RGBControllerConfig {
//   public initialNormalRGBLedStates: RGBLedState[] = Array.from({
//     length: 144,
//   }).map((_, index): RGBLedState => ({
//     color:
//       index % 48 === 47
//         ? `oklch(0.72 0.12 ${(index * 3).toString()})`
//         : 'oklch(0 0 0)',
//     isPreferringFallbackColor: index % 48 !== 47,
//     transitionDuration:
//       index % 48 === 47
//         ? `${Option.TickIntervalMs.toString()}ms`
//         : `${(Option.TickIntervalMs * 5).toString()}ms`,
//     transitionTimingFunction:
//       'var(--theme-transition-timing-function-ease-out)',
//   }));
//
//   public initialAlternativeRGBLedStates: RGBLedState[] = Array.from({
//     length: 144,
//   }).map((_, index): RGBLedState => ({
//     color:
//       index % 48 === 47 || index % 48 === 46 || index % 48 === 45
//         ? `oklch(0.72 0.12 ${(index * 3).toString()})`
//         : 'oklch(0 0 0)',
//     isPreferringFallbackColor: !(
//       index % 48 === 47 ||
//       index % 48 === 46 ||
//       index % 48 === 45
//     ),
//     transitionDuration:
//       index % 48 === 47 || index % 48 === 46 || index % 48 === 45
//         ? `${Option.TickIntervalMs.toString()}ms`
//         : `${(Option.TickIntervalMs * 5).toString()}ms`,
//     transitionTimingFunction:
//       'var(--theme-transition-timing-function-ease-out)',
//   }));
//
//   public tickIntervalMs = Option.TickIntervalMs;
//
//   public normalRGBLedStatesMapper = new LinearRGBLedStatesMapper([1, 0, 0, 0]);
//   public alternativeRGBLedStatesMapper = new LinearRGBLedStatesMapper([
//     1, 0, 0, 0,
//   ]);
// }
