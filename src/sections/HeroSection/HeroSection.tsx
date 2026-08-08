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
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.heroSectionBorder.createMatrix({
      waterfallIndex: 0,
    });

  return (
    <div className="relative z-0">
      {/* Actual Component */}
      <div
        ref={heroSectionRef as RefObject<HTMLDivElement>}
        className="relative z-1 grid min-h-screen grid-rows-[max-content_1fr] bg-(--theme-component-hero-section-background-color)"
      >
        <HeroSectionFakeHeader />
        <div className="max-w-9xl mx-auto grid w-full justify-start self-center px-16 pt-20 pb-40">
          <HeroSectionTitle />
          <HeroSectionDescription />
        </div>
      </div>

      {/* Border */}
      <RGBBackground
        className="relative z-1 h-(--theme-border-thickness)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrix}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-hero-section-border-color)"
      />

      {/* Shadow */}
      <BlurShadow
        className="absolute top-0 right-0 bottom-0 left-0 z-0 grid"
        elevationStep={ElevationStep.HeroSection}
      >
        <RGBBackground
          rgbLedIndicesMatrix={rgbLedIndicesMatrix}
          isUsingAlternativeColors={false}
          preferredNormalFallbackColor="var(--theme-component-hero-section-background-color)"
        />
      </BlurShadow>
    </div>
  );
}
