import { type MotionValue } from 'motion';
import { type ReactElement, useEffect, useRef } from 'react';

import { type RGBControllerConfig } from '../_types/RGBControllerConfig.ts';
import { type RGBLedState } from '../_types/RGBLedState.ts';

export function RGBControllerTimerEffect({
  rgbControllerConfig,
  rgbLedStatesMotionValue,
}: {
  rgbControllerConfig: RGBControllerConfig;
  rgbLedStatesMotionValue: MotionValue<RGBLedState[]>;
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

        rgbLedStatesMotionValue.set(
          rgbControllerConfig.rgbLedStatesMapper.map(
            rgbLedStatesMotionValue.get(),
          ),
        );
      }

      rafId.current = requestAnimationFrame(tickHandler);
    };

    rafId.current = requestAnimationFrame(tickHandler);

    return () => {
      if (rafId.current === null) return;

      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    };
  }, [rgbControllerConfig, rgbLedStatesMotionValue]);

  return <></>;
}
