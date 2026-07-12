import { type ReactElement } from 'react';

import { BlurShadow } from '@/components/BlurShadow.tsx';
import { Developer } from '@/components/Developer/Developer.tsx';
import { RGBBackground } from '@/components/RGB/RGBBackground.tsx';
import { useElementsRefContext } from '@/contexts/global/ref/useElementsRefContext.tsx';

export function Header(): ReactElement {
  const { headerRef } = useElementsRefContext();

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
          ledIndicesMatrix={[[0, 1, 2, 3, 4, 5, 6, 7]]}
          isUsingAlternative={true}
          className="relative z-1 h-(--theme-border-thickness)"
        />
        {/* Shadow */}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
          <div className="relative z-1 col-span-full row-span-full bg-(--component-header-background-color)" />
          <BlurShadow
            elevationStep={2}
            className="relative z-0 col-span-full row-span-full grid"
          >
            <RGBBackground
              ledIndicesMatrix={[[0, 1, 2, 3, 4, 5, 6, 7]]}
              isUsingAlternative={true}
            />
          </BlurShadow>
        </div>
      </div>
    </header>
  );
}
