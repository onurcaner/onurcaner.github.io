import { type ReactElement } from 'react';

import { BlurShadow } from '@/components/BlurShadow.tsx';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { SkillCardIcon } from '@/sections/SkillsSection/SkillCardIcon.tsx';
import { SkillCardLabel } from '@/sections/SkillsSection/SkillCardLabel.tsx';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

interface SkillCardProps {
  skill: SkillClientData;
  index: number;
}

export function SkillCard(props: SkillCardProps) {
  return (
    <HoverContextProvider>
      <SkillCardLayout {...props} />
    </HoverContextProvider>
  );
}

function SkillCardLayout({ skill, index }: SkillCardProps): ReactElement {
  return (
    <div className="relative z-0 grid">
      <SkillCardContentLayer skill={skill} index={index} />
      <SkillCardBorderLayer skill={skill} index={index} />
      <SkillCardBlurShadowLayer skill={skill} index={index} />
    </div>
  );
}

function SkillCardContentLayer({ skill, index }: SkillCardProps): ReactElement {
  const { onPointerEnter, onPointerLeave } = useHoverContext();

  return (
    <div
      className="relative z-2 m-(--theme-border-thickness) grid content-between gap-y-7 overflow-hidden rounded-(--theme-border-radius) bg-(--theme-component-skill-card-background-color) px-16 py-20 text-center"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <SkillCardIcon skillName={skill.name} index={index} />
      <SkillCardLabel index={index}>{skill.label}</SkillCardLabel>
    </div>
  );
}

function SkillCardBorderLayer({ index }: SkillCardProps): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1 overflow-hidden rounded-(--theme-border-radius)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillBorder.createMatrix(
        { waterfallCount: index },
      )}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-skill-card-border-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-skill-card-border-color--hover)"
    />
  );
}

function SkillCardBlurShadowLayer({ index }: SkillCardProps): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-0 left-0 z-0 grid rounded-(--theme-border-radius)"
      elevationStep={ElevationStep.SkillItem}
    >
      <RGBBackground
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillBorder.createMatrix(
          { waterfallCount: index },
        )}
        isUsingAlternativeColors={isHovered}
        preferredNormalFallbackColor="var(--theme-component-skill-card-border-color--normal)"
        preferredAlternativeFallbackColor="var(--theme-component-skill-card-border-color--hover)"
      />
    </BlurShadow>
  );
}
