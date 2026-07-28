import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react';

import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBControllerState } from '@/features/rgb/_types/RGBControllerState.ts';

export function useRGBControllerTimerEffect({
  rgbControllerConfig,
  setRGBControllerState,
}: {
  rgbControllerConfig: RGBControllerConfig;
  setRGBControllerState: Dispatch<SetStateAction<RGBControllerState>>;
}): void {
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    const handleInterval = (): void => {
      setRGBControllerState((state) => ({
        ...state,
        normalRGBLedStates: rgbControllerConfig.normalRGBLedStatesMapper.map(
          state.normalRGBLedStates,
        ),
        alternativeRGBLedStates:
          rgbControllerConfig.alternativeRGBLedStatesMapper.map(
            state.alternativeRGBLedStates,
          ),
      }));
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
  }, [rgbControllerConfig, setRGBControllerState]);
}
