import { type ReactElement } from 'react';

import { type RGBBaseProps } from '@/components/RGB/RGBBaseProps.ts';
import { RGBLedCSSVarAdapter } from '@/contexts/global/rgb-controller/RGBLedCSSVarAdapter/RGBLedCSSVarAdapter.ts';
import { RGBLedType } from '@/contexts/global/rgb-controller/RGBLedCSSVarAdapter/RGBLedType.ts';

interface RGBLedBoxProps extends RGBBaseProps {
  ledIndex: number | null;
}

export function RGBLedBox({
  ledIndex,
  isUsingAlternative,
  preferredNormalFallbackColor = 'lime',
  preferredAlternativeFallbackColor = 'magenta',
}: RGBLedBoxProps): ReactElement {
  const rgbLedCSSVarAdapter = new RGBLedCSSVarAdapter({
    rgbLedIndex: ledIndex ?? 0,
    rgbLedType: isUsingAlternative ? RGBLedType.Alternative : RGBLedType.Normal,
  });
  const isFallbackForced = ledIndex === null;

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
