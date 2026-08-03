import { type ReactElement, type ReactNode, useEffect, useState } from 'react';

import { RGBLedType } from '../_constants/RGBLedType.ts';
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
  const [rgbControllerState, setRgbControllerState] =
    useState<RGBControllerState>({
      normalRGBLedStates: rgbControllerConfig.initialNormalRGBLedStates,
      alternativeRGBLedStates:
        rgbControllerConfig.initialAlternativeRGBLedStates,
    });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRgbControllerState((state) => ({
      ...state,
      normalRGBLedStates: rgbControllerConfig.initialNormalRGBLedStates,
      alternativeRGBLedStates:
        rgbControllerConfig.initialAlternativeRGBLedStates,
    }));
  }, [rgbControllerConfig]);

  return (
    <>
      <RGBControllerTimerEffect
        rgbControllerConfig={rgbControllerConfig}
        setRGBControllerState={setRgbControllerState}
      />

      <RGBControllerDOMEffect
        rgbLedStates={rgbControllerState.normalRGBLedStates}
        rgbLedType={RGBLedType.Normal}
      />
      <RGBControllerDOMEffect
        rgbLedStates={rgbControllerState.alternativeRGBLedStates}
        rgbLedType={RGBLedType.Alternative}
      />

      <RGBControllerContext value={{}}>{children}</RGBControllerContext>
    </>
  );
}
