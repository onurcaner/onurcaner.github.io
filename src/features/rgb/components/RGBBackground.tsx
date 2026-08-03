import { type ReactElement } from 'react';

import { type RGBBaseComponentProps } from '../_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '../_types/RGBLedIndex.ts';

import { RGBLedGrid } from './RGBLedGrid.tsx';

interface RGBBackgroundProps extends RGBBaseComponentProps {
  rgbLedIndicesMatrix: RGBLedIndex[][];
  className?: string;
}

export function RGBBackground({
  className,
  ...restProps
}: RGBBackgroundProps): ReactElement {
  return (
    <div className={className}>
      <div className="relative h-full w-full">
        <BackdropBlurLayer />
        <RGBLedGridLayer {...restProps} />
      </div>
    </div>
  );
}

function BackdropBlurLayer(): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-(--theme-component-rgb-diffuser-color) backdrop-blur-(--theme-component-rgb-diffuser-blur-length)" />
  );
}

function RGBLedGridLayer({
  rgbLedIndicesMatrix,
  isUsingAlternativeColors,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBBackgroundProps): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
      <RGBLedGrid
        rgbLedIndicesMatrix={rgbLedIndicesMatrix}
        isUsingAlternativeColors={isUsingAlternativeColors}
        preferredNormalFallbackColor={preferredNormalFallbackColor}
        preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
      />
    </div>
  );
}
