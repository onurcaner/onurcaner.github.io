import { type ReactElement, type ReactNode } from 'react';

import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';

export function MenuButtonLikeLabel({
  isUsingAlternativeColors,
  children,
  rgbLedIndicesMatrix,
}: {
  isUsingAlternativeColors: boolean;
  children: ReactNode;
  rgbLedIndicesMatrix: RGBLedIndex[][];
}): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <RGBText
      parentBackgroundColor={
        isHovered
          ? 'var(--theme-component-menu-button-background-color--hover)'
          : 'var(--theme-component-menu-button-background-color--normal)'
      }
      isUsingAlternativeColors={isUsingAlternativeColors}
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      preferredNormalFallbackColor="var(--theme-component-menu-button-text-color--normal)"
      preferredAlternativeFallbackColor="(--theme-component-menu-button-text-color--hover)"
    >
      <div className="text-4 font-medium uppercase">{children}</div>
    </RGBText>
  );
}
