import { useMotionValue } from 'motion/react';
import { type ReactElement, type ReactNode, useEffect } from 'react';

import { type RGBControllerConfig } from '../_types/RGBControllerConfig.ts';
import { type RGBLedState } from '../_types/RGBLedState.ts';

import { RGBControllerContext } from './RGBControllerContext.tsx';
import { RGBControllerTimerEffect } from './RGBControllerTimerEffect.tsx';

export function RGBControllerContextProvider({
  children,
  rgbControllerConfig,
}: {
  children: ReactNode;
  rgbControllerConfig: RGBControllerConfig;
}): ReactElement {
  // Hooks - Local State
  const rgbLedStatesMotionValue = useMotionValue<RGBLedState[]>(
    rgbControllerConfig.initialRGBLedStates,
  );

  // Hooks - Effects
  useEffect(() => {
    rgbLedStatesMotionValue.set(rgbControllerConfig.initialRGBLedStates);
  }, [rgbLedStatesMotionValue, rgbControllerConfig]);

  return (
    <>
      <RGBControllerTimerEffect
        rgbControllerConfig={rgbControllerConfig}
        rgbLedStatesMotionValue={rgbLedStatesMotionValue}
      />

      {/*<RGBControllerDOMEffect*/}
      {/*  rgbLedStatesMotionValue={rgbLedStatesMotionValue}*/}
      {/*/>*/}

      <RGBControllerContext
        value={{ rgbLedStatesMotionValue: rgbLedStatesMotionValue }}
      >
        {children}
      </RGBControllerContext>
    </>
  );
}
