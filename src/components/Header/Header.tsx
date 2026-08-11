import type { MotionValue } from 'motion';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useVelocity,
} from 'motion/react';
import { type ReactElement } from 'react';

import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { BlurShadow } from '../BlurShadow.tsx';
import { Developer } from '../Developer/Developer.tsx';

enum ScrollDirection {
  Down = 1,
  Up,
}

export function Header(): ReactElement {
  return (
    <HoverContextProvider>
      <HeaderController />
    </HoverContextProvider>
  );
}

export function HeaderController(): ReactElement {
  // Hooks - Elevated State
  const { headerRef, heroSectionRef } = useDomRefsContext();

  // Hooks - Local State
  const { onPointerEnter, onPointerLeave } = useHoverContext();

  // Motion Hooks - Scroll
  const { scrollY: pageScrollMotionValue } = useScroll({ axis: 'y' });
  const { scrollYProgress: heroScrollYProgressMotionValue } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
    axis: 'y',
  });

  // Motion Hooks - Event
  const pageScrollVelocityMotionValue = useVelocity(pageScrollMotionValue);
  const scrollDirectionMotionValue = useMotionValue(ScrollDirection.Down);
  useMotionValueEvent(
    pageScrollVelocityMotionValue,
    'change',
    (latestVelocity) => {
      if (latestVelocity > 0)
        scrollDirectionMotionValue.set(ScrollDirection.Down);
      if (latestVelocity < 0)
        scrollDirectionMotionValue.set(ScrollDirection.Up);
    },
  );

  // Motion Hooks - Transformed Values
  const paddingBlockMotionValue = useTransform(
    heroScrollYProgressMotionValue,
    [0, 1],
    ['2.5rem', '1.25rem'],
  );
  const borderThicknessMotionValue = useTransform(
    heroScrollYProgressMotionValue,
    (heroScrollYProgress) =>
      heroScrollYProgress === 0 ? '0rem' : 'var(--theme-border-thickness)',
  ) as MotionValue<string>;
  const translateYMotionValue = useTransform(
    [heroScrollYProgressMotionValue, scrollDirectionMotionValue],
    ([scrollProgress, scrollDirection]: number[]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      if (scrollDirection === ScrollDirection.Up) return '0%';
      return scrollProgress === 1 ? '-100%' : '0%';
    },
  );

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 z-10 grid transition-transform duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
      style={{
        translateY: translateYMotionValue,
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="relative z-0">
        <HeaderContentLayer
          paddingBlockMotionValue={paddingBlockMotionValue}
          borderThicknessMotionValue={borderThicknessMotionValue}
        />
        <HeaderBorderLayer />
        <HeaderBlurShadowLayer
          borderThicknessMotionValue={borderThicknessMotionValue}
        />
      </div>
    </motion.header>
  );
}

function HeaderContentLayer({
  paddingBlockMotionValue,
  borderThicknessMotionValue,
}: {
  paddingBlockMotionValue: MotionValue<string>;
  borderThicknessMotionValue: MotionValue<string>;
}): ReactElement {
  const correctedPaddingBlockMotionValue = useTransform(
    [paddingBlockMotionValue, borderThicknessMotionValue],
    ([paddingBlock, borderThickness]: string[]) => {
      return `calc(${paddingBlock} - ${borderThickness} + var(--theme-border-thickness))`;
    },
  );

  return (
    <div className="relative z-2 bg-(--theme-component-header-background-color)">
      <motion.div
        className="max-w-9xl mx-auto flex w-full items-center justify-between px-16 transition-[padding,margin] duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
        style={{
          paddingBlock: correctedPaddingBlockMotionValue,
          marginBlock: borderThicknessMotionValue,
        }}
      >
        <Developer />
        <div className="text-white">MENU</div>
      </motion.div>
    </div>
  );
}

function HeaderBorderLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.headerBorder.createMatrix()}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-header-border-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-header-border-color--hover)"
    />
  );
}

function HeaderBlurShadowLayer({
  borderThicknessMotionValue,
}: {
  borderThicknessMotionValue: MotionValue<string>;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { isHovered } = useHoverContext();

  // Hooks - Local States
  const opacityMotionValue = useTransform(
    borderThicknessMotionValue,
    (borderThickness) => (borderThickness === '0rem' ? '0%' : '100%'),
  );

  return (
    <motion.div
      className="transition-opacity duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
      style={{
        opacity: opacityMotionValue,
      }}
    >
      <BlurShadow
        elevationStep={ElevationStep.Header}
        className="absolute top-0 right-0 bottom-0 left-0 z-0 grid"
      >
        <RGBBackground
          rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.headerBorder.createMatrix()}
          isUsingAlternativeColors={isHovered}
          preferredNormalFallbackColor="var(--theme-component-header-border-color--normal)"
          preferredAlternativeFallbackColor="var(--theme-component-header-border-color--hover)"
        />
      </BlurShadow>
    </motion.div>
  );
}
