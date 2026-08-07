import { type ReactElement, type ReactNode } from 'react';

import type { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';

export function SectionHeading({
  children,
  iconRGBLedIndicesMatrix,
  textRGBLedIndicesMatrix,
  iconName,
}: {
  children: ReactNode;
  iconRGBLedIndicesMatrix: RGBLedIndex[][];
  textRGBLedIndicesMatrix: RGBLedIndex[][];
  iconName: IconName;
}): ReactElement {
  return (
    <div className="mb-10 flex items-center gap-x-4">
      {/* Icon */}
      <RGBText
        rgbLedIndicesMatrix={iconRGBLedIndicesMatrix}
        isUsingAlternativeColors={false}
        parentBackgroundClassName="bg-(--theme-component-section-background-color)"
        preferredNormalFallbackColor="var(--theme-component-section-heading-icon-color)"
      >
        <div className="text-8">
          <UIIcon iconName={iconName} />
        </div>
      </RGBText>

      {/* Text */}
      <RGBText
        rgbLedIndicesMatrix={textRGBLedIndicesMatrix}
        isUsingAlternativeColors={false}
        parentBackgroundClassName="bg-(--theme-component-section-background-color)"
        preferredNormalFallbackColor="var(--theme-component-section-heading-text-color)"
      >
        <h2 className="text-7 font-bold uppercase">{children}</h2>
      </RGBText>
    </div>
  );
}
