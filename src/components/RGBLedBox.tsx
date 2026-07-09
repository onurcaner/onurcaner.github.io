import { type ReactElement } from 'react';

import { useRGBControllerContext } from '@/contexts/global/rgb-controller/useRGBControllerContext.tsx';

export function RGBLedBox({
  ledNumber,
  isAlternative,
  fallbackColor,
}: {
  ledNumber: number;
  isAlternative: boolean;
  fallbackColor?: string;
}): ReactElement {
  const { normalRGBLedStates, alternativeRGBLedStates } =
    useRGBControllerContext();

  const state = isAlternative
    ? alternativeRGBLedStates.at(ledNumber)
    : normalRGBLedStates.at(ledNumber);

  if (!state) throw new Error();

  return (
    <div
      style={{
        backgroundColor: state.isPreferringFallbackColor
          ? fallbackColor
          : state.color,
        transitionProperty: 'background-color',
        transitionDuration: state.transitionDuration,
        transitionTimingFunction: state.transitionTimingFunction,
      }}
    />
  );
}
