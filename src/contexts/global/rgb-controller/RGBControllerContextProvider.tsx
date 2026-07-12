import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useState,
} from 'react';

import { type RGBControllerConfig } from '@/contexts/global/rgb-controller/RGBControllerConfig.ts';
import { RGBControllerContext } from '@/contexts/global/rgb-controller/RGBControllerContext.tsx';
import { RGBLedType } from '@/contexts/global/rgb-controller/RGBLedCSSVarAdapter/RGBLedType.ts';
import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';
import { testRGBControllerConfig } from '@/contexts/global/rgb-controller/testRGBControllerConfig.ts';
import { useRGBControllerDOMEffect } from '@/contexts/global/rgb-controller/useRGBControllerDOMEffect.tsx';
import { useRGBControllerTimerEffect } from '@/contexts/global/rgb-controller/useRGBControllerTimerEffect.tsx';

export function RGBControllerContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [rgbControllerConfig, setRGBControllerConfig] =
    useState<RGBControllerConfig>(() => testRGBControllerConfig);
  const [normalRGBLedStates, setNormalRGBLedStates] = useState<RGBLedState[]>(
    () => rgbControllerConfig.initialNormalRGBLedStates,
  );
  const [alternativeRGBLedStates, setAlternativeRGBLedStates] = useState<
    RGBLedState[]
  >(() => rgbControllerConfig.initialAlternativeRGBLedStates);

  const changeRGBControllerConfig = useCallback(
    (newConfig: RGBControllerConfig): void => {
      setRGBControllerConfig(newConfig);
      setNormalRGBLedStates(newConfig.initialNormalRGBLedStates);
      setAlternativeRGBLedStates(newConfig.initialAlternativeRGBLedStates);
    },
    [],
  );

  useRGBControllerTimerEffect({
    rgbControllerConfig: rgbControllerConfig,
    setRGBLedStates: setNormalRGBLedStates,
  });
  useRGBControllerTimerEffect({
    rgbControllerConfig: rgbControllerConfig,
    setRGBLedStates: setAlternativeRGBLedStates,
  });

  // DOM Effects
  useRGBControllerDOMEffect({
    rgbLedStates: normalRGBLedStates,
    rgbLedType: RGBLedType.Normal,
  });
  useRGBControllerDOMEffect({
    rgbLedStates: alternativeRGBLedStates,
    rgbLedType: RGBLedType.Alternative,
  });

  return (
    <RGBControllerContext
      value={{
        changeRGBControllerConfig: changeRGBControllerConfig,
      }}
    >
      {children}
    </RGBControllerContext>
  );
}
