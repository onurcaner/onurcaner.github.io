import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';

export function SecondaryButtonLikeIcon({
  iconName,
  rgbLedIndicesMatrix,
}: {
  iconName: IconName;
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
      preferredNormalFallbackColor="var(--theme-component-secondary-button-icon-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-secondary-button-icon-color--hover)"
    >
      <div className="text-6 mx-0.5" aria-hidden={true}>
        <UIIcon iconName={iconName} />
      </div>
    </RGBText>
  );
}
