import { useEffect } from 'react';

import { RGBLedCSSVarAdapter } from '@/contexts/global/rgb-controller/RGBLedCSSVarAdapter/RGBLedCSSVarAdapter.ts';
import { RGBLedType } from '@/contexts/global/rgb-controller/RGBLedCSSVarAdapter/RGBLedType.ts';
import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';

export function useRGBControllerDOMEffect({
  rgbLedStates,
  rgbLedType,
}: {
  rgbLedStates: RGBLedState[];
  rgbLedType: RGBLedType;
}): void {
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
}
