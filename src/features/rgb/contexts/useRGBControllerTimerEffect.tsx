import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react';

import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';

export function useRGBControllerTimerEffect({
  rgbControllerConfig,
  setNormalRGBLedStates,
  setAlternativeRGBLedStates,
}: {
  rgbControllerConfig: RGBControllerConfig;
  setNormalRGBLedStates: Dispatch<SetStateAction<RGBLedState[]>>;
  setAlternativeRGBLedStates: Dispatch<SetStateAction<RGBLedState[]>>;
}): void {
  const timerId = useRef<number | null>(null);
  useEffect(() => {
    const handleInterval = (): void => {
      setNormalRGBLedStates((normalRGBLedStates) =>
        rgbControllerConfig.normalRGBLedStatesMapper.map(normalRGBLedStates),
      );
      setAlternativeRGBLedStates((alternativeRGBStates) =>
        rgbControllerConfig.alternativeRGBLedStatesMapper.map(
          alternativeRGBStates,
        ),
      );
    };

    timerId.current ??= setInterval(
      handleInterval,
      rgbControllerConfig.tickPeriodMs,
    );

    return () => {
      if (timerId.current === null) return;

      clearInterval(timerId.current);
      timerId.current = null;
    };
  }, [rgbControllerConfig, setNormalRGBLedStates, setAlternativeRGBLedStates]);
}
