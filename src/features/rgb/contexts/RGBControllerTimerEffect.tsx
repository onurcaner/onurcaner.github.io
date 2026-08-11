import {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
  useEffect,
  useRef,
} from 'react';

import { type RGBControllerConfig } from '../_types/RGBControllerConfig.ts';
import { type RGBControllerState } from '../_types/RGBControllerState.ts';

export function RGBControllerTimerEffect({
  rgbControllerConfig,
  setRGBControllerState,
}: {
  rgbControllerConfig: RGBControllerConfig;
  setRGBControllerState: Dispatch<SetStateAction<RGBControllerState>>;
}): ReactElement {
  // Hooks - Local States
  const timerId = useRef<number | null>(null);

  // Hooks - Effect
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
      rgbControllerConfig.tickIntervalMs,
    );

    return () => {
      if (timerId.current === null) return;

      clearInterval(timerId.current);
      timerId.current = null;
    };
  }, [rgbControllerConfig, setRGBControllerState]);

  return <></>;
}
