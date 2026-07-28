import { type ReactElement } from 'react';

import { BlurShadow } from '@/components/BlurShadow.tsx';
import { Developer } from '@/components/Developer/Developer.tsx';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { useThemeControllerContext } from '@/features/theme/contexts/useThemeControllerContext.ts';

export function Header(): ReactElement {
  const { headerRef } = useDomRefsContext();
  const { rgbLedIndicesMatricesMap } = useThemeControllerContext();

  const indicesMatrix = rgbLedIndicesMatricesMap.header.generate();

  return (
    <header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 grid bg-(--component-header-background-color)"
    >
      <div className="relative">
        {/* Contents */}
        <div className="max-w-8xl relative z-2 mx-auto flex items-center justify-between px-16 py-10">
          <Developer />
          <div className="text-white">MENU</div>
        </div>

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
    </header>
  );
}
