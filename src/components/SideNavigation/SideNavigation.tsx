import { type ReactElement, useRef } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { SectionName } from '@/constants/SectionName.ts';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { useRectSize } from '@/hooks/useRectSize.tsx';

import { BlurShadow } from '../BlurShadow.tsx';

import { SideNavigationItem } from './SideNavigationItem.tsx';

export function SideNavigation(): ReactElement {
  return (
    <HoverContextProvider>
      <ActualSideNavigation />
    </HoverContextProvider>
  );
}

function ActualSideNavigation(): ReactElement {
  // Hooks - Elevated States
  const { onPointerEnter, onPointerLeave } = useHoverContext();

  // Hooks - Local States
  const navRef = useRef<HTMLElement>(null);
  const { height } = useRectSize(navRef);

  return (
    <nav
      ref={navRef}
      className="sticky top-1/2 z-1 -translate-y-1/2"
      style={{
        marginTop: typeof height === 'number' ? height / 2 : undefined,
        marginBottom: typeof height === 'number' ? -height / 2 : undefined,
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="relative p-(--theme-border-thickness)">
        <SideNavigationContentLayer />
        <SideNavigationBorderLayer />
        <SideNavigationBlurShadowLayer />
      </div>
    </nav>
  );
}

function SideNavigationContentLayer(): ReactElement {
  return (
    <ul className="relative z-2 m-auto grid gap-y-0.5 rounded-(--theme-border-radius) bg-(--theme-component-menu-background-color) px-16 py-20">
      <SideNavigationItem
        itemIndex={0}
        sectionName={SectionName.Skills}
        iconName={IconName.Box}
      >
        Skills
      </SideNavigationItem>
      <SideNavigationItem
        itemIndex={0}
        sectionName={SectionName.Education}
        iconName={IconName.GraduationCap}
      >
        Education
      </SideNavigationItem>
      <SideNavigationItem
        itemIndex={0}
        sectionName={SectionName.Experience}
        iconName={IconName.BriefCase}
      >
        Experience
      </SideNavigationItem>
    </ul>
  );
}

function SideNavigationBorderLayer(): ReactElement {
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

function SideNavigationBlurShadowLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-0 left-0 z-0 grid overflow-hidden rounded-(--theme-border-radius)"
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
