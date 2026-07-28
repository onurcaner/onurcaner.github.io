import { type ReactElement } from 'react';

import { type RGBBaseComponentProps } from '@/features/rgb/_types/RGBBaseComponentProps.ts';
import type { RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBLedGrid } from '@/features/rgb/components/RGBLedGrid.tsx';

interface RGBBackgroundProps extends RGBBaseComponentProps {
  indicesMatrix: RGBLedIndex[][];
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
    <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-(--component-rgb-diffuser-background-color) backdrop-blur-(--component-rgb-diffuser-blur-length)" />
  );
}

function RGBLedGridLayer({
  indicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBBackgroundProps): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
      <RGBLedGrid
        indicesMatrix={indicesMatrix}
        isUsingAlternative={isUsingAlternative}
        preferredNormalFallbackColor={preferredNormalFallbackColor}
        preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
      />
    </div>
  );
}
