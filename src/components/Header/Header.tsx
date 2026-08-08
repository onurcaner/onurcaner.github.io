import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useVelocity,
} from 'motion/react';
import { type ReactElement, useState } from 'react';

import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { BlurShadow } from '../BlurShadow.tsx';
import { Developer } from '../Developer/Developer.tsx';

enum ScrollDirection {
  Down = 1,
  Up,
}

export function Header(): ReactElement {
  // Elevated State
  const { headerRef, heroSectionRef } = useDomRefsContext();
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  // Local State
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerEnter = (): void => {
    setIsHovered(true);
  };
  const handlePointerLeave = (): void => {
    setIsHovered(false);
  };

  // Scroll Spy
  const { scrollY: pageScrollMotionValue } = useScroll({ axis: 'y' });
  const { scrollYProgress: heroScrollYProgressMotionValue } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
    axis: 'y',
  });
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

  const translateYMotionValue = useTransform(
    [heroScrollYProgressMotionValue, scrollDirectionMotionValue],
    ([scrollProgress, scrollDirection]: number[]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      if (scrollDirection === ScrollDirection.Up) return '0%';
      return scrollProgress === 1 ? '-100%' : '0%';
    },
  );
  const paddingBlockMotionValue = useTransform(
    heroScrollYProgressMotionValue,
    [0, 1],
    ['2.5rem', '1.25rem'],
  );

  const indicesMatrix = rgbLedIndicesMatrixCreators.headerBorder.createMatrix({
    waterfallIndex: 0,
  });

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 z-10 grid bg-(--theme-component-header-background-color) transition-transform duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
      style={{
        translateY: translateYMotionValue,
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="relative z-0">
        {/* Contents */}
        <motion.div
          className="max-w-9xl relative z-2 mx-auto flex items-center justify-between px-16 transition-[padding] duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
          style={{
            paddingBlock: paddingBlockMotionValue,
          }}
        >
          <Developer />
          <div className="text-white">MENU</div>
        </motion.div>

        {/* Border */}
        <RGBBackground
          className="relative z-1 h-(--theme-border-thickness)"
          rgbLedIndicesMatrix={indicesMatrix}
          isUsingAlternativeColors={isHovered}
          preferredNormalFallbackColor="var(--theme-component-header-border-color--normal)"
          preferredAlternativeFallbackColor="var(--theme-component-header-border-color--hover)"
        />

        {/* Shadow */}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
          <div className="relative z-1 col-span-full row-span-full bg-(--theme-component-header-background-color)" />
          <BlurShadow
            elevationStep={ElevationStep.Header}
            className="relative z-0 col-span-full row-span-full grid"
          >
            <RGBBackground
              rgbLedIndicesMatrix={indicesMatrix}
              isUsingAlternativeColors={isHovered}
              preferredNormalFallbackColor="var(--theme-component-header-border-color--normal)"
              preferredAlternativeFallbackColor="var(--theme-component-header-border-color--hover)"
            />
          </BlurShadow>
        </div>
      </div>
    </motion.header>
  );
}
