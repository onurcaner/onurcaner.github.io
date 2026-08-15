import { useMotionValueEvent, useScroll } from 'motion/react';
import { type ReactElement } from 'react';

import { BlurShadow } from '@/components/BlurShadow.tsx';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { CallToActionSectionDescription } from './CallToActionSectionDescription.tsx';
import { CallToActionSectionTitle } from './CallToActionSectionTitle.tsx';

export function CallToActionSection(): ReactElement {
  // Hooks - Elevated States
  const { callToActionSectionRef } = useDomRefsContext();
  const { callToActionSectionScrollYProgressMotionValue } =
    useScrollSpyContext();

  // Motion Hooks - Scroll Subscription
  const { scrollYProgress: scrollYProgressMotionValue } = useScroll({
    target: callToActionSectionRef,
    offset: ['start end', 'end start'],
    axis: 'y',
  });
  useMotionValueEvent(
    scrollYProgressMotionValue,
    'change',
    (scrollYProgress) => {
      callToActionSectionScrollYProgressMotionValue.set(scrollYProgress);
    },
  );

  return (
    <section
      className="relative py-(--theme-border-thickness)"
      ref={callToActionSectionRef}
    >
      <CallToActionContentLayer />
      <CallToActionBorderLayer />
      <CallToActionBlurShadowLayer />
    </section>
  );
}

function CallToActionContentLayer(): ReactElement {
  return (
    <div className="relative z-2 my-auto grid min-h-[75vh] bg-(--theme-component-call-to-action-section-background-color)">
      <div className="max-w-9xl mx-auto grid w-full justify-start self-center px-16 py-40">
        <CallToActionSectionTitle />
        <CallToActionSectionDescription />
      </div>
    </div>
  );
}

function CallToActionBorderLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1 grid"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.callToActionSectionBorderBlock.createMatrix()}
      preferredNormalFallbackColor="var(--theme-component-call-to-action-section-border-color)"
    />
  );
}

function CallToActionBlurShadowLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-1/2 left-0 z-0 grid"
      elevationStep={ElevationStep.CallToActionSection}
    >
      <RGBBackground
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.callToActionSectionBorderBlock.createMatrix()}
        preferredNormalFallbackColor="var(--theme-component-call-to-action-section-background-color)"
      />
    </BlurShadow>
  );
}
