import type { MotionValue } from 'motion';
import { motion, useTransform } from 'motion/react';
import { type ReactElement } from 'react';

import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { ScrollYDirection } from '@/features/scroll-spy/_constants/ScrollYDirection.ts';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { BlurShadow } from '../BlurShadow.tsx';
import { Developer } from '../Developer/Developer.tsx';

export function Header(): ReactElement {
  // Hooks - Elevated State
  const {
    heroSectionScrollYProgressMotionValue,
    pageScrollYDirectionMotionValue,
  } = useScrollSpyContext();

  // Motion Hooks - Transformed Values
  const translateYMotionValue = useTransform(
    [heroSectionScrollYProgressMotionValue, pageScrollYDirectionMotionValue],
    (values: number[]): string => {
      const [heroSectionScrollYProgress, scrollYDirection] = values as [
        number,
        ScrollYDirection,
      ];
      if (scrollYDirection === ScrollYDirection.Up) return '0%';
      return heroSectionScrollYProgress === 1 ? '-100%' : '0%';
    },
  );
  const paddingBlockMotionValue = useTransform(
    heroSectionScrollYProgressMotionValue,
    [0, 1],
    ['2.5rem', '1.25rem'],
  );
  const borderThicknessMotionValue = useTransform(
    heroSectionScrollYProgressMotionValue,
    (heroScrollYProgress) =>
      heroScrollYProgress === 0 ? '0rem' : 'var(--theme-border-thickness)',
  ) as MotionValue<string>;

  return (
    <ActualHeader
      translateYMotionValue={translateYMotionValue}
      paddingBlockMotionValue={paddingBlockMotionValue}
      borderThicknessMotionValue={borderThicknessMotionValue}
    />
  );
}

function ActualHeader({
  paddingBlockMotionValue,
  borderThicknessMotionValue,
  translateYMotionValue,
}: {
  translateYMotionValue: MotionValue<string>;
  paddingBlockMotionValue: MotionValue<string>;
  borderThicknessMotionValue: MotionValue<string>;
}): ReactElement {
  // Hooks - Elevated States
  const { headerRef } = useDomRefsContext();

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 z-10 grid transition-transform duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
      style={{
        translateY: translateYMotionValue,
      }}
    >
      <div className="relative">
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
  // Motion Hooks - Derived State
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
        <Developer isHorizontal={true} />
        <div className="text-white">MENU</div>
      </motion.div>
    </div>
  );
}

function HeaderBorderLayer(): ReactElement {
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.headerBorderBlock.createMatrix()}
      preferredNormalFallbackColor="var(--theme-component-header-border-color)"
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

  // Motion Hooks - Derived States
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
          rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.headerBorderBlock.createMatrix()}
          preferredNormalFallbackColor="var(--theme-component-header-border-color)"
        />
      </BlurShadow>
    </motion.div>
  );
}
