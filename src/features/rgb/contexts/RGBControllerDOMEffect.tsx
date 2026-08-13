import { type MotionValue } from 'motion';
import { useMotionValueEvent } from 'motion/react';
import { type ReactElement } from 'react';

import { type RGBControllerState } from '@/features/rgb/_types/RGBControllerState.ts';

import { RGBLedType } from '../_constants/RGBLedType.ts';
import { type RGBLedState } from '../_types/RGBLedState.ts';
import { RGBLedCSSVarAdapter } from '../utils/RGBLedCSSVarAdapter.ts';

export function RGBControllerDOMEffect({
  rgbControllerStateMotionValue,
}: {
  rgbControllerStateMotionValue: MotionValue<RGBControllerState>;
}): ReactElement {
  useMotionValueEvent(
    rgbControllerStateMotionValue,
    'change',
    (rgbControllerState) => {
      rgbControllerState.normalRGBLedStates.forEach(
        affectRootCSSVars.bind(null, RGBLedType.Normal),
      );
      rgbControllerState.alternativeRGBLedStates.forEach(
        affectRootCSSVars.bind(null, RGBLedType.Alternative),
      );
    },
  );

  return <></>;
}

function affectRootCSSVars(
  rgbLedType: RGBLedType,
  rgbLedState: RGBLedState,
  rgbLedIndex: number,
): void {
  const rgbLedCSSVarPropertyNameGenerator = new RGBLedCSSVarAdapter({
    rgbLedIndex: rgbLedIndex,
    rgbLedType: rgbLedType,
  });

  const rootStyle = document.documentElement.style;
  rootStyle.setProperty(
    rgbLedCSSVarPropertyNameGenerator.generateColorPropertyName(),
    rgbLedState.color,
  );
  rootStyle.setProperty(
    rgbLedCSSVarPropertyNameGenerator.generateTransitionDurationPropertyName(),
    rgbLedState.transitionDuration,
  );
  rootStyle.setProperty(
    rgbLedCSSVarPropertyNameGenerator.generateTransitionTimingFunctionPropertyName(),
    rgbLedState.transitionTimingFunction,
  );
  rootStyle.setProperty(
    rgbLedCSSVarPropertyNameGenerator.generateFallbackColorOpacityPropertyName(),
    rgbLedState.isPreferringFallbackColor ? '100%' : '0%',
  );
}
