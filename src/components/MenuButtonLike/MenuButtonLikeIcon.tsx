import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';

export function MenuButtonLikeIcon({
  isUsingAlternativeColors,
  iconName,
  rgbLedIndicesMatrix,
}: {
  isUsingAlternativeColors: boolean;
  iconName: IconName;
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
      preferredNormalFallbackColor="var(--theme-component-menu-button-icon-color--normal)"
      preferredAlternativeFallbackColor="(--theme-component-menu-button-icon-color--hover)"
    >
      <div className="text-4-5" aria-hidden={true}>
        <UIIcon iconName={iconName} />
      </div>
    </RGBText>
  );
}
