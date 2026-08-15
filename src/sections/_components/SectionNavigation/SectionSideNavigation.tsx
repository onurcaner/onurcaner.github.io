import { useMotionValueEvent } from 'motion/react';
import { type ReactElement, useRef, useState } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { BlurShadow } from '@/components/BlurShadow.tsx';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { SectionName } from '@/constants/SectionName.ts';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { useRectSize } from '@/hooks/useRectSize.tsx';

import { SectionNavigationItem } from './SectionNavigationItem.tsx';

export function SectionSideNavigation(): ReactElement {
  return (
    <HoverContextProvider>
      <ActualSectionSideNavigation />
    </HoverContextProvider>
  );
}

function ActualSectionSideNavigation(): ReactElement {
  // Hooks - Elevated States
  const { activeSectionNameMotionValue } = useScrollSpyContext();
  const { onPointerEnter, onPointerLeave } = useHoverContext();

  // Hooks - Local States
  const navRef = useRef<HTMLElement>(null);
  const { height } = useRectSize(navRef);
  const [activeSectionName, setActiveSectionName] =
    useState<SectionName | null>(null);

  // Motion Hooks - Elevated to Local State Synchronisation
  useMotionValueEvent(
    activeSectionNameMotionValue,
    'change',
    (activeSectionName) => {
      setActiveSectionName(activeSectionName);
    },
  );

  return (
    <nav
      ref={navRef}
      className="sticky top-1/2 z-0 -translate-y-1/2"
      style={{
        marginTop: typeof height === 'number' ? height / 2 : undefined,
        marginBottom: typeof height === 'number' ? -height / 2 : undefined,
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="relative p-(--theme-border-thickness)">
        <SectionSideNavigationContentLayer
          activeSectionName={activeSectionName}
        />
        <SectionSideNavigationBorderLayer />
        <SectionSideNavigationBlurShadowLayer />
      </div>
    </nav>
  );
}

function SectionSideNavigationContentLayer({
  activeSectionName,
}: {
  activeSectionName: SectionName | null;
}): ReactElement {
  return (
    <ul className="relative z-2 m-auto grid rounded-(--theme-border-radius) bg-(--theme-component-menu-background-color) px-16 py-20">
      <SectionNavigationItem
        itemIndex={0}
        iconName={IconName.Box}
        label="Skills"
        isActive={activeSectionName === SectionName.Skills}
      />
      <SectionNavigationItem
        itemIndex={0}
        iconName={IconName.GraduationCap}
        label="Education"
        isActive={activeSectionName === SectionName.Education}
      />
      <SectionNavigationItem
        itemIndex={0}
        iconName={IconName.BriefCase}
        label="Experience"
        isActive={activeSectionName === SectionName.Experience}
      />
    </ul>
  );
}

function SectionSideNavigationBorderLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1 overflow-hidden rounded-(--theme-border-radius)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.sectionSideNavigationBorder.createMatrix()}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-menu-border-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-menu-border-color--hover)"
    />
  );
}

function SectionSideNavigationBlurShadowLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-0 left-0 z-0 grid rounded-(--theme-border-radius)"
      elevationStep={ElevationStep.Menu}
    >
      <RGBBackground
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.sectionSideNavigationBorder.createMatrix()}
        isUsingAlternativeColors={isHovered}
        preferredNormalFallbackColor="var(--theme-component-menu-border-color--normal)"
        preferredAlternativeFallbackColor="var(--theme-component-menu-border-color--hover)"
      />
    </BlurShadow>
  );
}
