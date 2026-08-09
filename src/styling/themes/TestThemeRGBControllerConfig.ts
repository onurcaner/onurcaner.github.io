import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { LinearRGBLedStatesMapper } from '@/features/rgb/utils/LinearRGBLedStatesMapper.ts';

enum Option {
  TickIntervalMs = 500000,
}

export class TestThemeRGBControllerConfig implements RGBControllerConfig {
  public initialNormalRGBLedStates: RGBLedState[] = Array.from({
    length: 144,
  }).map((_, index): RGBLedState => ({
    color:
      index % 12 === 2
        ? `oklch(0.72 0.12 ${((index * 360) / 144).toString()})`
        : 'oklch(0 0 0)',
    isPreferringFallbackColor: index % 12 !== 2,
    transitionDuration: '0s',
    transitionTimingFunction: 'linear',
  }));

  public initialAlternativeRGBLedStates: RGBLedState[] = Array.from({
    length: 144,
  }).map((_, index): RGBLedState => ({
    color:
      index % 12 === 2 || index % 12 === 1 || index % 12 === 0
        ? `oklch(0.72 0.12 ${((index * 360) / 144).toString()})`
        : 'oklch(0 0 0)',
    isPreferringFallbackColor: !(
      index % 12 === 2 ||
      index % 12 === 1 ||
      index % 12 === 0
    ),
    transitionDuration: '0s',
    transitionTimingFunction: 'linear',
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
