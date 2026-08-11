import { type ReactElement, type ReactNode } from 'react';

import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function SkillCardLabel({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-skill-card-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillLabel.createMatrix({
        waterfallCount: index,
      })}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-skill-label-text-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-skill-label-text-color--hover)"
    >
      <h3 className="text-4-5 font-normal">{children}</h3>
    </RGBText>
  );
}
