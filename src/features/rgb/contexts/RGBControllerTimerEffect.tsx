import { type MotionValue } from 'motion';
import { type ReactElement, useEffect, useRef } from 'react';

import { type RGBControllerConfig } from '../_types/RGBControllerConfig.ts';
import { type RGBControllerState } from '../_types/RGBControllerState.ts';

export function RGBControllerTimerEffect({
  rgbControllerConfig,
  rgbControllerStateMotionValue,
}: {
  rgbControllerConfig: RGBControllerConfig;
  rgbControllerStateMotionValue: MotionValue<RGBControllerState>;
}): ReactElement {
  // Hooks - Local States
  const rafId = useRef<number | null>(null);
  const lastTime = useRef<number>(0);

  // Hooks - Effect
  useEffect(() => {
    const tickHandler = (): void => {
      const nowTime = performance.now();
      const tickPeriod = nowTime - lastTime.current;
      if (tickPeriod >= rgbControllerConfig.tickIntervalMs) {
        lastTime.current = performance.now();

        rgbControllerStateMotionValue.set({
          normalRGBLedStates: rgbControllerConfig.normalRGBLedStatesMapper.map(
            rgbControllerStateMotionValue.get().normalRGBLedStates,
          ),
          alternativeRGBLedStates:
            rgbControllerConfig.alternativeRGBLedStatesMapper.map(
              rgbControllerStateMotionValue.get().alternativeRGBLedStates,
            ),
        });
      }

      rafId.current = requestAnimationFrame(tickHandler);
    };

    rafId.current = requestAnimationFrame(tickHandler);

    return () => {
      if (rafId.current === null) return;

      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    };
  }, [rgbControllerConfig, rgbControllerStateMotionValue]);

  return <></>;
}
