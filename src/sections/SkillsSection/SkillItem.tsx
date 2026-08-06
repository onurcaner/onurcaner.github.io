import { type ReactElement, useState } from 'react';

import { SkillIconAsset } from '@/assets/icons/SkillIconAsset.tsx';
import { BlurShadow } from '@/components/BlurShadow.tsx';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import type { RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

export function SkillItem({
  skillData,
  borderRGBLedIndicesMatrix,
  iconRGBLedIndicesMatrix,
  labelRGBLedIndicesMatrix,
}: {
  skillData: SkillClientData;
  borderRGBLedIndicesMatrix: RGBLedIndex[][];
  iconRGBLedIndicesMatrix: RGBLedIndex[][];
  labelRGBLedIndicesMatrix: RGBLedIndex[][];
}): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <div className="relative z-0 p-(--theme-border-thickness)">
        {/* Card */}
        <div
          className="relative z-2 grid justify-items-center gap-y-5 overflow-hidden rounded-(--theme-border-radius) bg-(--theme-component-skill-background-color) px-16 py-20"
          onPointerEnter={setIsHovered.bind(null, true)}
          onPointerLeave={setIsHovered.bind(null, false)}
        >
          {/* Icon */}
          <RGBText
            parentBackgroundClassName="bg-(--theme-component-skill-background-color)"
            rgbLedIndicesMatrix={iconRGBLedIndicesMatrix}
            isUsingAlternativeColors={isHovered}
            preferredNormalFallbackColor="var(--theme-component-skill-icon-color--normal)"
            preferredAlternativeFallbackColor="var(--theme-component-skill-icon-color--hover)"
          >
            <div className="text-16 grid items-center justify-center">
              <SkillIconAsset skillName={skillData.name} />
            </div>
          </RGBText>

          {/* Label */}
          <RGBText
            parentBackgroundClassName="bg-(--theme-component-skill-background-color)"
            rgbLedIndicesMatrix={labelRGBLedIndicesMatrix}
            isUsingAlternativeColors={isHovered}
            preferredNormalFallbackColor="var(--theme-component-skill-label-text-color--normal)"
            preferredAlternativeFallbackColor="var(--theme-component-skill-label-text-color--hover)"
          >
            <h3 className="text-4-5 font-medium">{skillData.label}</h3>
          </RGBText>
        </div>

        {/* Border */}
        <RGBBackground
          className="absolute top-0 right-0 bottom-0 left-0 z-1 overflow-hidden rounded-(--theme-border-radius)"
          rgbLedIndicesMatrix={borderRGBLedIndicesMatrix}
          isUsingAlternativeColors={isHovered}
          preferredNormalFallbackColor="var(--theme-component-skill-border-color--normal)"
          preferredAlternativeFallbackColor="--theme-component-skill-border-color--hover"
        />

        {/* Blur Shadow */}
        <BlurShadow
          className="absolute top-0 right-0 bottom-0 left-0 z-0 grid rounded-(--theme-border-radius)"
          elevationStep={ElevationStep.SkillItem}
        >
          <RGBBackground
            rgbLedIndicesMatrix={borderRGBLedIndicesMatrix}
            isUsingAlternativeColors={isHovered}
            preferredNormalFallbackColor="var(--theme-component-skill-border-color--normal)"
            preferredAlternativeFallbackColor="--theme-component-skill-border-color--hover"
          />
        </BlurShadow>
      </div>
    </li>
  );
}
