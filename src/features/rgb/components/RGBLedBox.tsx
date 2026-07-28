import { type ReactElement } from 'react';

import { RGBLedType } from '@/features/rgb/_constants/RGBLedType.ts';
import { type RGBBaseComponentProps } from '@/features/rgb/_types/RGBBaseComponentProps.ts';
import type { RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBLedCSSVarAdapter } from '@/features/rgb/utils/RGBLedCSSVarAdapter.ts';

interface RGBLedBoxProps extends RGBBaseComponentProps {
  rgbLedIndex: RGBLedIndex;
}

export function RGBLedBox({
  rgbLedIndex,
  isUsingAlternative,
  preferredNormalFallbackColor = 'lime',
  preferredAlternativeFallbackColor = 'magenta',
}: RGBLedBoxProps): ReactElement {
  const rgbLedCSSVarAdapter = new RGBLedCSSVarAdapter({
    rgbLedIndex: rgbLedIndex ?? 0,
    rgbLedType: isUsingAlternative ? RGBLedType.Alternative : RGBLedType.Normal,
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
          // willChange: 'background-color, opacity',
        }}
      />
      <div
        className="col-span-full row-span-full"
        style={{
          backgroundColor: isUsingAlternative
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
          // willChange: 'background-color, opacity',
        }}
      />
    </div>
  );
}
