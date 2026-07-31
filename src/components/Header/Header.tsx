import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useVelocity,
} from 'motion/react';
import { type ReactElement } from 'react';

import { useDomRefsContext } from '@/contexts/global/dom-refs/contexts/useDomRefsContext.tsx';
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
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

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

  rgbLedIndicesMatrixGenerators.header.reset();
  const indicesMatrix = rgbLedIndicesMatrixGenerators.header.generate();

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 grid bg-(--component-header-background-color) transition-transform duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
      style={{
        translateY: translateYMotionValue,
      }}
    >
      <div className="relative">
        {/* Contents */}
        <motion.div
          className="max-w-8xl relative z-2 mx-auto flex items-center justify-between px-16 transition-[padding] duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)"
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
          indicesMatrix={indicesMatrix}
          isUsingAlternative={false}
          preferredNormalFallbackColor="var(--component-header-normal-border-color)"
          preferredAlternativeFallbackColor="var(--component-header-normal-border-color)"
        />

        {/* Shadow */}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
          <div className="relative z-1 col-span-full row-span-full bg-(--component-header-background-color)" />
          <BlurShadow
            elevationStep={1}
            className="relative z-0 col-span-full row-span-full grid"
          >
            <RGBBackground
              indicesMatrix={indicesMatrix}
              isUsingAlternative={false}
              preferredNormalFallbackColor="var(--component-header-normal-border-color)"
              preferredAlternativeFallbackColor="var(--component-header-normal-border-color)"
            />
          </BlurShadow>
        </div>
      </div>
    </motion.header>
  );
}
