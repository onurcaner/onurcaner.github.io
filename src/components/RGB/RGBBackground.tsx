import { type ReactElement } from 'react';

import { type RGBBaseProps } from '@/components/RGB/RGBBaseProps.ts';
import { RGBLedGrid } from '@/components/RGB/RGBLedGrid.tsx';

interface RGBBackgroundProps extends RGBBaseProps {
  ledIndicesMatrix: (number | null)[][];
}

export function RGBBackground(props: RGBBackgroundProps): ReactElement {
  return (
    <div className="relative h-full w-full">
      <BackdropBlurLayer />
      <RGBLedGridLayer {...props} />
    </div>
  );
}

function BackdropBlurLayer(): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-(--component-rgb-diffuser-background-color) backdrop-blur-(--component-rgb-diffuser-blur-length)" />
  );
}

function RGBLedGridLayer({
  ledIndicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBBackgroundProps): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
      <RGBLedGrid
        ledIndicesMatrix={ledIndicesMatrix}
        isUsingAlternative={isUsingAlternative}
        preferredNormalFallbackColor={preferredNormalFallbackColor}
        preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
      />
    </div>
  );
}
