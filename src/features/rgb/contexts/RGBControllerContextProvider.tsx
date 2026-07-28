import { type ReactElement, type ReactNode, useEffect, useState } from 'react';

import { RGBLedType } from '@/features/rgb/_constants/RGBLedType.ts';
import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBControllerState } from '@/features/rgb/_types/RGBControllerState.ts';
import { RGBControllerContext } from '@/features/rgb/contexts/RGBControllerContext.tsx';
import { useRGBControllerDOMEffect } from '@/features/rgb/contexts/useRGBControllerDOMEffect.tsx';
import { useRGBControllerTimerEffect } from '@/features/rgb/contexts/useRGBControllerTimerEffect.tsx';

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

  // Timer Effect
  useRGBControllerTimerEffect({
    rgbControllerConfig: rgbControllerConfig,
    setRGBControllerState: setRgbControllerState,
  });

  // DOM Effects
  useRGBControllerDOMEffect({
    rgbLedStates: rgbControllerState.normalRGBLedStates,
    rgbLedType: RGBLedType.Normal,
  });
  useRGBControllerDOMEffect({
    rgbLedStates: rgbControllerState.alternativeRGBLedStates,
    rgbLedType: RGBLedType.Alternative,
  });

  return (
    <RGBControllerContext
      // value={{
      //   changeConfig: changeRGBControllerConfig,
      // }}
      value={{}}
    >
      {children}
    </RGBControllerContext>
  );
}
