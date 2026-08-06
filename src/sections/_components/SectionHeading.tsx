import { type ReactElement, type ReactNode } from 'react';

import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';

export function SectionHeading({
  children,
  rgbLedIndicesMatrix,
}: {
  children: ReactNode;
  rgbLedIndicesMatrix: RGBLedIndex[][];
}): ReactElement {
  return (
    <RGBText
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      parentBackgroundClassName="bg-(--theme-component-section-background-color)"
      preferredNormalFallbackColor="var(--theme-component-section-heading-text-color)"
    >
      <h2 className="text-7 mb-9 font-semibold uppercase">{children}</h2>
    </RGBText>
  );
}
