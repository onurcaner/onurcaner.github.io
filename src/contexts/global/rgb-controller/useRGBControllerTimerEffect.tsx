import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react';

import { type RGBControllerConfig } from '@/contexts/global/rgb-controller/RGBControllerConfig.ts';
import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';

export function useRGBControllerTimerEffect({
  rgbControllerConfig,
  setRGBLedStates,
}: {
  rgbControllerConfig: RGBControllerConfig;
  setRGBLedStates: Dispatch<SetStateAction<RGBLedState[]>>;
}): void {
  const timerId = useRef<number>(0);
  useEffect(() => {
    const handleInterval = (): void => {
      setRGBLedStates((normalRGBLedStates) =>
        rgbControllerConfig.normalRGBLedStatesMapper.map(normalRGBLedStates),
      );
    };

    timerId.current = setInterval(
      handleInterval,
      rgbControllerConfig.tickPeriodMs,
    );

    return () => {
      clearInterval(timerId.current);
    };
  }, [rgbControllerConfig, setRGBLedStates]);
}
