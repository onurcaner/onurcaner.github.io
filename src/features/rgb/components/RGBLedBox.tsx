import { motion, useTransform } from 'motion/react';
import { type ReactElement, useRef } from 'react';

import { type RGBBaseComponentProps } from '../_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '../_types/RGBLedIndex.ts';
import { type RGBLedState } from '../_types/RGBLedState.ts';
import { useRGBControllerContext } from '../contexts/useRGBControllerContext.tsx';

interface RGBLedBoxProps extends RGBBaseComponentProps {
  rgbLedIndex: RGBLedIndex;
}

export function RGBLedBox({
  rgbLedIndex,
  isUsingAlternativeColors = false,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor = 'magenta',
}: RGBLedBoxProps): ReactElement {
  // Hooks - Elevated States
  const { rgbLedStatesMotionValue } = useRGBControllerContext();

  // Hooks - Local State
  const nullRgbLedState = useRef<RGBLedState>({
    normalColor: 'black',
    alternativeColor: 'black',
    normalTransitionDuration: '0s',
    alternativeTransitionDuration: '0s',
    normalTransitionTimingFunction: 'linear',
    alternativeTransitionTimingFunction: 'linear',
    isNormalColorPreferringFallbackColor: true,
    isAlternativeColorPreferringFallbackColor: true,
  });

  // Motion Hooks - Derived States
  const rgbLedStateMotionValue = useTransform(
    rgbLedStatesMotionValue,
    (rgbLedStates) => {
      if (rgbLedIndex === null) return nullRgbLedState.current;

      const rgbLedState = rgbLedStates.at(rgbLedIndex);
      return rgbLedState ?? nullRgbLedState.current;
    },
  );

  const backgroundColorMotionValue = useTransform(
    rgbLedStateMotionValue,
    (rgbLedState) => {
      if (isUsingAlternativeColors) {
        return rgbLedState.isAlternativeColorPreferringFallbackColor
          ? preferredAlternativeFallbackColor
          : rgbLedState.alternativeColor;
      } else
        return rgbLedState.isNormalColorPreferringFallbackColor
          ? preferredNormalFallbackColor
          : rgbLedState.normalColor;
    },
  );
  const transitionDurationMotionValue = useTransform(
    rgbLedStateMotionValue,
    (rgbLedState) => {
      return isUsingAlternativeColors
        ? rgbLedState.alternativeTransitionDuration
        : rgbLedState.normalTransitionDuration;
    },
  );
  const transitionTimingFunctionMotionValue = useTransform(
    rgbLedStateMotionValue,
    (rgbLedState) => {
      return isUsingAlternativeColors
        ? rgbLedState.alternativeTransitionTimingFunction
        : rgbLedState.normalTransitionTimingFunction;
    },
  );

  return (
    <motion.div
      style={{
        backgroundColor: backgroundColorMotionValue,
        transitionProperty: 'background-color, opacity',
        transitionDuration: transitionDurationMotionValue,
        transitionTimingFunction: transitionTimingFunctionMotionValue,
      }}
    />
  );
}

// export function RGBLedBox({
//   rgbLedIndex,
//   isUsingAlternativeColors = false,
//   preferredNormalFallbackColor,
//   preferredAlternativeFallbackColor = 'magenta',
// }: RGBLedBoxProps): ReactElement {
//   const rgbLedCSSVarAdapter = new RGBLedCSSVarAdapter({
//     rgbLedIndex: rgbLedIndex ?? 0,
//     rgbLedType: isUsingAlternativeColors
//       ? RGBLedType.Alternative
//       : RGBLedType.Normal,
//   });
//
//   const isFallbackForced = rgbLedIndex === null;
//
//   return (
//     <div className="relative grid">
//       <div
//         className="col-span-full row-span-full"
//         style={{
//           backgroundColor: rgbLedCSSVarAdapter.generateColorCSSVar(),
//           transitionProperty: 'background-color, opacity',
//           transitionDuration:
//             rgbLedCSSVarAdapter.generateTransitionDurationCSSVar(),
//           transitionTimingFunction:
//             rgbLedCSSVarAdapter.generateTransitionTimingFunctionCSSVar(),
//           opacity: isFallbackForced
//             ? '0%'
//             : `calc(100% - ${rgbLedCSSVarAdapter.generateFallbackColorOpacityCSSVar()})`,
//           willChange: 'background-color, opacity, transition-duration',
//         }}
//       />
//       <div
//         className="col-span-full row-span-full"
//         style={{
//           backgroundColor: isUsingAlternativeColors
//             ? preferredAlternativeFallbackColor
//             : preferredNormalFallbackColor,
//           transitionProperty: 'background-color, opacity',
//           transitionDuration:
//             rgbLedCSSVarAdapter.generateTransitionDurationCSSVar(),
//           transitionTimingFunction:
//             rgbLedCSSVarAdapter.generateTransitionTimingFunctionCSSVar(),
//           opacity: isFallbackForced
//             ? '100%'
//             : rgbLedCSSVarAdapter.generateFallbackColorOpacityCSSVar(),
//           willChange: 'background-color, opacity, transition-duration',
//         }}
//       />
//     </div>
//   );
// }
