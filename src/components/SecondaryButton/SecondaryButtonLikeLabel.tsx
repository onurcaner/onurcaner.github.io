import { type ReactElement, type ReactNode } from 'react';

import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';

export function SecondaryButtonLikeLabel({
  children,
  rgbLedIndicesMatrix,
}: {
  children: ReactNode;
  rgbLedIndicesMatrix: RGBLedIndex[][];
}): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <RGBText
      parentBackgroundColor={
        isHovered
          ? 'var(--theme-component-secondary-button-background-color--hover)'
          : 'var(--theme-component-secondary-button-background-color--normal)'
      }
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-secondary-button-label-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-secondary-button-label-color--hover)"
    >
      <div className="text-5 font-semibold capitalize">{children}</div>
    </RGBText>
  );
}
