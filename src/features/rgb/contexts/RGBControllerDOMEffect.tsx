import { type MotionValue } from 'motion';
import { useMotionValueEvent } from 'motion/react';
import { type ReactElement } from 'react';

import { RGBLedType } from '../_constants/RGBLedType.ts';
import { type RGBLedState } from '../_types/RGBLedState.ts';
import { RGBLedCSSVarAdapter } from '../utils/RGBLedCSSVarAdapter.ts';

export function RGBControllerDOMEffect({
  rgbLedStatesMotionValue,
}: {
  rgbLedStatesMotionValue: MotionValue<RGBLedState[]>;
}): ReactElement {
  useMotionValueEvent(rgbLedStatesMotionValue, 'change', (rgbLedStates) => {
    rgbLedStates.forEach(affectRootCSSVars);
  });

  return <></>;
}

function affectRootCSSVars(
  rgbLedState: RGBLedState,
  rgbLedIndex: number,
): void {
  const normalRgbLedCSSVarPropertyNameGenerator = new RGBLedCSSVarAdapter({
    rgbLedIndex: rgbLedIndex,
    rgbLedType: RGBLedType.Normal,
  });
  const alternativeRgbLedCSSVarPropertyNameGenerator = new RGBLedCSSVarAdapter({
    rgbLedIndex: rgbLedIndex,
    rgbLedType: RGBLedType.Alternative,
  });

  const rootStyle = document.documentElement.style;

  rootStyle.setProperty(
    normalRgbLedCSSVarPropertyNameGenerator.generateColorPropertyName(),
    rgbLedState.normalColor,
  );
  rootStyle.setProperty(
    alternativeRgbLedCSSVarPropertyNameGenerator.generateColorPropertyName(),
    rgbLedState.alternativeColor,
  );

  rootStyle.setProperty(
    normalRgbLedCSSVarPropertyNameGenerator.generateTransitionDurationPropertyName(),
    rgbLedState.normalTransitionDuration,
  );
  rootStyle.setProperty(
    alternativeRgbLedCSSVarPropertyNameGenerator.generateTransitionDurationPropertyName(),
    rgbLedState.alternativeTransitionDuration,
  );

  rootStyle.setProperty(
    normalRgbLedCSSVarPropertyNameGenerator.generateTransitionTimingFunctionPropertyName(),
    rgbLedState.normalTransitionDuration,
  );
  rootStyle.setProperty(
    alternativeRgbLedCSSVarPropertyNameGenerator.generateTransitionTimingFunctionPropertyName(),
    rgbLedState.alternativeTransitionDuration,
  );

  rootStyle.setProperty(
    normalRgbLedCSSVarPropertyNameGenerator.generateFallbackColorOpacityPropertyName(),
    rgbLedState.isNormalColorPreferringFallbackColor ? '100%' : '0%',
  );
  rootStyle.setProperty(
    alternativeRgbLedCSSVarPropertyNameGenerator.generateFallbackColorOpacityPropertyName(),
    rgbLedState.isAlternativeColorPreferringFallbackColor ? '100%' : '0%',
  );
}
