import { type ReactElement } from 'react';

import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function RGBStripe(): ReactElement {
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  rgbLedIndicesMatrixGenerators.headerBorder.reset();
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixGenerators.headerBorder.generate();

  return (
    <RGBBackground
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
    />
  );
}
