import { useMotionValue } from 'motion/react';
import { type ReactElement, type ReactNode, useEffect } from 'react';

import { type RGBControllerConfig } from '../_types/RGBControllerConfig.ts';
import { type RGBControllerState } from '../_types/RGBControllerState.ts';

import { RGBControllerContext } from './RGBControllerContext.tsx';
import { RGBControllerDOMEffect } from './RGBControllerDOMEffect.tsx';
import { RGBControllerTimerEffect } from './RGBControllerTimerEffect.tsx';

export function RGBControllerContextProvider({
  children,
  rgbControllerConfig,
}: {
  children: ReactNode;
  rgbControllerConfig: RGBControllerConfig;
}): ReactElement {
  // Hooks - Local State
  const rgbControllerStateMotionValue = useMotionValue<RGBControllerState>({
    normalRGBLedStates: rgbControllerConfig.initialNormalRGBLedStates,
    alternativeRGBLedStates: rgbControllerConfig.initialAlternativeRGBLedStates,
  });

  // Hooks - Effects
  useEffect(() => {
    rgbControllerStateMotionValue.set({
      normalRGBLedStates: rgbControllerConfig.initialNormalRGBLedStates,
      alternativeRGBLedStates:
        rgbControllerConfig.initialAlternativeRGBLedStates,
    });
  }, [rgbControllerConfig, rgbControllerStateMotionValue]);

  return (
    <>
      <RGBControllerTimerEffect
        rgbControllerConfig={rgbControllerConfig}
        rgbControllerStateMotionValue={rgbControllerStateMotionValue}
      />

      <RGBControllerDOMEffect
        rgbControllerStateMotionValue={rgbControllerStateMotionValue}
      />

      <RGBControllerContext value={{}}>{children}</RGBControllerContext>
    </>
  );
}
