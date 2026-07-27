import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useState,
} from 'react';

import { RGBLedType } from '@/features/rgb/_constants/RGBLedType.ts';
import { testRGBControllerConfig } from '@/features/rgb/_constants/testRGBControllerConfig.ts';
import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedState } from '@/features/rgb/_types/RGBLedState.ts';
import { RGBControllerContext } from '@/features/rgb/contexts/RGBControllerContext.tsx';
import { useRGBControllerDOMEffect } from '@/features/rgb/contexts/useRGBControllerDOMEffect.tsx';
import { useRGBControllerTimerEffect } from '@/features/rgb/contexts/useRGBControllerTimerEffect.tsx';

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
    setNormalRGBLedStates: setNormalRGBLedStates,
    setAlternativeRGBLedStates: setAlternativeRGBLedStates,
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
