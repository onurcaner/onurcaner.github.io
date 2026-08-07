import { type ReactElement, useState } from 'react';

import { SkillIcon } from '@/assets/icons/SkillIcon.tsx';
import { BlurShadow } from '@/components/BlurShadow.tsx';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

export function SkillItem({
  skill,
  index,
}: {
  skill: SkillClientData;
  index: number;
}): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="grid">
      <div className="relative z-0 grid p-(--theme-border-thickness)">
        {/* Card */}
        <div
          className="relative z-2 grid content-between justify-items-center gap-y-9 overflow-hidden rounded-(--theme-border-radius) bg-(--theme-component-skill-background-color) px-16 py-20"
          onPointerEnter={setIsHovered.bind(null, true)}
          onPointerLeave={setIsHovered.bind(null, false)}
        >
          {/* Icon */}
          <RGBText
            parentBackgroundClassName="bg-(--theme-component-skill-background-color)"
            rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillIcon.createMatrix(
              { waterfallIndex: index },
            )}
            isUsingAlternativeColors={isHovered}
            preferredNormalFallbackColor="var(--theme-component-skill-icon-color--normal)"
            preferredAlternativeFallbackColor="var(--theme-component-skill-icon-color--hover)"
          >
            <div
              className="text-20 grid items-center justify-center"
              aria-hidden={true}
            >
              <SkillIcon skillName={skill.name} />
            </div>
          </RGBText>

          {/* Label */}
          <RGBText
            parentBackgroundClassName="bg-(--theme-component-skill-background-color)"
            rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillLabel.createMatrix(
              { waterfallIndex: index },
            )}
            isUsingAlternativeColors={isHovered}
            preferredNormalFallbackColor="var(--theme-component-skill-label-text-color--normal)"
            preferredAlternativeFallbackColor="var(--theme-component-skill-label-text-color--hover)"
          >
            <h3 className="text-4-5 font-normal">{skill.label}</h3>
          </RGBText>
        </div>

        {/* Border */}
        <RGBBackground
          className="absolute top-0 right-0 bottom-0 left-0 z-1 overflow-hidden rounded-(--theme-border-radius)"
          rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillBorder.createMatrix(
            { waterfallIndex: index },
          )}
          isUsingAlternativeColors={isHovered}
          preferredNormalFallbackColor="var(--theme-component-skill-border-color--normal)"
          preferredAlternativeFallbackColor="var(--theme-component-skill-border-color--hover)"
        />

        {/* Blur Shadow */}
        <BlurShadow
          className="absolute top-0 right-0 bottom-0 left-0 z-0 grid rounded-(--theme-border-radius)"
          elevationStep={ElevationStep.SkillItem}
        >
          <RGBBackground
            rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillBorder.createMatrix(
              { waterfallIndex: index },
            )}
            isUsingAlternativeColors={isHovered}
            preferredNormalFallbackColor="var(--theme-component-skill-border-color--normal)"
            preferredAlternativeFallbackColor="var(--theme-component-skill-border-color--hover)"
          />
        </BlurShadow>
      </div>
    </li>
  );
}
