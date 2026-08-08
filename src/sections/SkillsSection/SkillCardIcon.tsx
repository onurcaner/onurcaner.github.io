import type { ReactElement } from 'react';

import { SkillIcon } from '@/assets/icons/SkillIcon.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { type SkillName } from '@/services/skill/constants/SkillName.ts';

export function SkillCardIcon({
  skillName,
  index,
}: {
  skillName: SkillName;
  index: number;
}): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-skill-card-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillIcon.createMatrix({
        waterfallIndex: index,
      })}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-skill-icon-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-skill-icon-color--hover)"
    >
      <div
        className="text-20 grid items-center justify-center"
        aria-hidden={true}
      >
        <SkillIcon skillName={skillName} />
      </div>
    </RGBText>
  );
}
