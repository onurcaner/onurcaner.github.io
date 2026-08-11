import { type ReactElement } from 'react';

import { RGBLedType } from '../_constants/RGBLedType.ts';
import { type RGBBaseComponentProps } from '../_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '../_types/RGBLedIndex.ts';
import { RGBLedCSSVarAdapter } from '../utils/RGBLedCSSVarAdapter.ts';

interface RGBLedBoxProps extends RGBBaseComponentProps {
  rgbLedIndex: RGBLedIndex;
}

export function RGBLedBox({
  rgbLedIndex,
  isUsingAlternativeColors,
  preferredNormalFallbackColor = 'lime',
  preferredAlternativeFallbackColor = 'magenta',
}: RGBLedBoxProps): ReactElement {
  const rgbLedCSSVarAdapter = new RGBLedCSSVarAdapter({
    rgbLedIndex: rgbLedIndex ?? 0,
    rgbLedType: isUsingAlternativeColors
      ? RGBLedType.Alternative
      : RGBLedType.Normal,
  });

  const isFallbackForced = rgbLedIndex === null;

  return (
    <div className="relative grid">
      <div
        className="col-span-full row-span-full"
        style={{
          backgroundColor: rgbLedCSSVarAdapter.generateColorCSSVar(),
          transitionProperty: 'background-color, opacity',
          transitionDuration:
            rgbLedCSSVarAdapter.generateTransitionDurationCSSVar(),
          transitionTimingFunction:
            rgbLedCSSVarAdapter.generateTransitionTimingFunctionCSSVar(),
          opacity: isFallbackForced
            ? '0%'
            : `calc(100% - ${rgbLedCSSVarAdapter.generateFallbackColorOpacityCSSVar()})`,
          willChange: 'background-color, opacity, transition-duration',
        }}
      />
      <div
        className="col-span-full row-span-full"
        style={{
          backgroundColor: isUsingAlternativeColors
            ? preferredAlternativeFallbackColor
            : preferredNormalFallbackColor,
          transitionProperty: 'background-color, opacity',
          transitionDuration:
            rgbLedCSSVarAdapter.generateTransitionDurationCSSVar(),
          transitionTimingFunction:
            rgbLedCSSVarAdapter.generateTransitionTimingFunctionCSSVar(),
          opacity: isFallbackForced
            ? '100%'
            : rgbLedCSSVarAdapter.generateFallbackColorOpacityCSSVar(),
          willChange: 'background-color, opacity, transition-duration',
        }}
      />
    </div>
  );
}
