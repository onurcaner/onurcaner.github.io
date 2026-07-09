import { type RGBControllerConfig } from '@/contexts/global/rgb-controller/RGBControllerConfig.ts';
import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';
import { type RGBLedStatesMapper } from '@/contexts/global/rgb-controller/RGBLedStatesMapper.ts';

class TestRGBLedStatesMapper implements RGBLedStatesMapper {
  public map(rgbLedStates: RGBLedState[]): RGBLedState[] {
    return [
      ...rgbLedStates.slice(rgbLedStates.length - 1, rgbLedStates.length),
      ...rgbLedStates.slice(0, rgbLedStates.length - 1),
    ];
  }
}

export const testRGBControllerConfig: RGBControllerConfig = {
  initialNormalRGBLedStates: Array.from({ length: 144 }).map(
    (_, index): RGBLedState => ({
      color: `oklch(0.72 0.12 ${((index * 15) % 360).toString()} / 27%)`,
      isPreferringFallbackColor: false,
      transitionDuration: '50ms',
      transitionTimingFunction: 'ease-out',
    }),
  ),
  initialAlternativeRGBLedStates: Array.from({ length: 144 }).map(
    (_, index): RGBLedState => ({
      color: index % 36 === 0 ? 'white' : 'black',
      isPreferringFallbackColor: false,
      transitionDuration: index % 36 === 0 ? '5ms' : '500ms',
      transitionTimingFunction: 'ease-out',
    }),
  ),
  tickPeriodMs: 50,
  normalRGBLedStatesMapper: new TestRGBLedStatesMapper(),
  alternativeRGBLedStatesMapper: new TestRGBLedStatesMapper(),
};
