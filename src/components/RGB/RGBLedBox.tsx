import { type ReactElement } from 'react';

import type { RGBBaseProps } from '@/components/RGB/RGBBaseProps.ts';
import { useRGBControllerContext } from '@/contexts/global/rgb-controller/useRGBControllerContext.tsx';

interface RGBLedBoxProps extends RGBBaseProps {
  ledIndex: number;
  isFallbackForced?: boolean;
}

export function RGBLedBox({
  ledIndex,
  isUsingAlternative,
  preferredNormalFallbackColor = 'lime',
  preferredAlternativeFallbackColor = 'magenta',
  isFallbackForced = false,
}: RGBLedBoxProps): ReactElement {
  const { normalRGBLedStates, alternativeRGBLedStates } =
    useRGBControllerContext();

  const fallbackColor = isUsingAlternative
    ? preferredAlternativeFallbackColor
    : preferredNormalFallbackColor;
  const state = isUsingAlternative
    ? alternativeRGBLedStates.at(ledIndex)
    : normalRGBLedStates.at(ledIndex);
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
