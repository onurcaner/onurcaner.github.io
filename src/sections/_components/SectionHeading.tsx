import { type ReactElement, type ReactNode } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

export function SectionHeading({
  children,
  iconName,
  className,
  index = 0,
}: {
  children: ReactNode;
  iconName: IconName;
  className?: string;
  index?: number;
}): ReactElement {
  return (
    <div
      className={new ClassNameJoiner().join(
        'relative z-0 mb-10 grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-x-4',
        className,
      )}
    >
      <SectionIcon iconName={iconName} index={index} />
      <SectionTitle index={index}>{children}</SectionTitle>
    </div>
  );
}

function SectionIcon({
  iconName,
  index,
}: {
  iconName: IconName;
  index: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.sectionHeadingIcon.createMatrix({
      waterfallCount: index,
    });

  return (
    <RGBText
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      parentBackgroundColor="var(--theme-component-section-background-color)"
      preferredNormalFallbackColor="var(--theme-component-section-heading-icon-color)"
    >
      <div className="text-8 px-0.5" aria-hidden={true}>
        <UIIcon iconName={iconName} />
      </div>
    </RGBText>
  );
}

function SectionTitle({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.sectionHeadingTitle.createMatrix({
      waterfallCount: index,
    });

  return (
    <RGBText
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      parentBackgroundColor="var(--theme-component-section-background-color)"
      preferredNormalFallbackColor="var(--theme-component-section-heading-text-color)"
    >
      <h2 className="text-7 font-bold uppercase">{children}</h2>
    </RGBText>
  );
}
