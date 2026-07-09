import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import type { RGBControllerConfig } from '@/contexts/global/rgb-controller/RGBControllerConfig.ts';
import { RGBControllerContext } from '@/contexts/global/rgb-controller/RGBControllerContext.tsx';
import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';
import { testRGBControllerConfig } from '@/contexts/global/rgb-controller/testRGBControllerConfig.ts';

export function RGBControllerContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [normalRGBLedStates, setNormalRGBLedStates] = useState<RGBLedState[]>(
    () => testRGBControllerConfig.initialNormalRGBLedStates,
  );
  const [alternativeRGBLedStates, setAlternativeRGBLedStates] = useState<
    RGBLedState[]
  >(() => testRGBControllerConfig.initialAlternativeRGBLedStates);

  const reInitialize = (newConfig: RGBControllerConfig): void => {
    setNormalRGBLedStates(newConfig.initialNormalRGBLedStates);
    setAlternativeRGBLedStates(newConfig.initialAlternativeRGBLedStates);
  };

  const timerId = useRef<number>(0);
  useEffect(() => {
    const handleInterval = (): void => {
      setNormalRGBLedStates((normalRGBLedStates) =>
        testRGBControllerConfig.normalRGBLedStatesMapper.map(
          normalRGBLedStates,
        ),
      );
      setAlternativeRGBLedStates((alternativeRGBLedStates) =>
        testRGBControllerConfig.alternativeRGBLedStatesMapper.map(
          alternativeRGBLedStates,
        ),
      );
    };

    timerId.current = setInterval(
      handleInterval,
      testRGBControllerConfig.tickPeriodMs,
    );

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <RGBControllerContext
      value={{
        normalRGBLedStates,
        alternativeRGBLedStates,
        reInitialize,
      }}
    >
      {children}
    </RGBControllerContext>
  );
}
