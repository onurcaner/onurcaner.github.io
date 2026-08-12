import { type ReactElement, type RefObject } from 'react';

import { BlurShadow } from '@/components/BlurShadow.tsx';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { HeroSectionDescription } from './HeroSectionDescription.tsx';
import { HeroSectionFakeHeader } from './HeroSectionFakeHeader.tsx';
import { HeroSectionTitle } from './HeroSectionTitle.tsx';

export function HeroSection(): ReactElement {
  const { heroSectionRef } = useDomRefsContext();

  return (
    <div
      className="relative z-0 pb-(--theme-border-thickness)"
      ref={heroSectionRef as RefObject<HTMLDivElement>}
    >
      <HeroContentLayer />
      <HeroBorderLayer />
      <HeroBlurShadowLayer />
    </div>
  );
}

function HeroContentLayer(): ReactElement {
  return (
    <div className="relative z-2 grid min-h-screen grid-rows-[max-content_1fr] bg-(--theme-component-hero-section-background-color)">
      <HeroSectionFakeHeader />
      <div className="max-w-9xl mx-auto grid w-full justify-start self-center px-16 pt-20 pb-40">
        <HeroSectionTitle />
        <HeroSectionDescription />
      </div>
    </div>
  );
}

function HeroBorderLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionBorderBottom.createMatrix()}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-hero-section-border-color)"
    />
  );
}

function HeroBlurShadowLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-0 left-0 z-0 grid"
      elevationStep={ElevationStep.HeroSection}
    >
      <RGBBackground
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionBorderBottom.createMatrix()}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-hero-section-background-color)"
      />
    </BlurShadow>
  );
}
