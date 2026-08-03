import { type ReactElement, useEffect } from 'react';

import { RGBLedType } from '../_constants/RGBLedType.ts';
import { type RGBLedState } from '../_types/RGBLedState.ts';
import { RGBLedCSSVarAdapter } from '../utils/RGBLedCSSVarAdapter.ts';

export function RGBControllerDOMEffect({
  rgbLedStates,
  rgbLedType,
}: {
  rgbLedStates: RGBLedState[];
  rgbLedType: RGBLedType;
}): ReactElement {
  useEffect(() => {
    const root = document.documentElement;
    rgbLedStates.forEach((rgbLedState, rgbLedIndex) => {
      const rgbLedCSSVarPropertyNameGenerator = new RGBLedCSSVarAdapter({
        rgbLedIndex: rgbLedIndex,
        rgbLedType: rgbLedType,
      });
      root.style.setProperty(
        rgbLedCSSVarPropertyNameGenerator.generateColorPropertyName(),
        rgbLedState.color,
      );
      root.style.setProperty(
        rgbLedCSSVarPropertyNameGenerator.generateTransitionDurationPropertyName(),
        rgbLedState.transitionDuration,
      );
      root.style.setProperty(
        rgbLedCSSVarPropertyNameGenerator.generateTransitionTimingFunctionPropertyName(),
        rgbLedState.transitionTimingFunction,
      );
      root.style.setProperty(
        rgbLedCSSVarPropertyNameGenerator.generateFallbackColorOpacityPropertyName(),
        rgbLedState.isPreferringFallbackColor ? '100%' : '0%',
      );
    });
  }, [rgbLedStates, rgbLedType]);

  return <></>;
}
