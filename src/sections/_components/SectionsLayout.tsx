import { type ReactNode } from 'react';

import { StickySectionNavigation } from '@/sections/_components/StickySectionNavigation.tsx';

export function SectionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-(--theme-component-section-background-color)">
      <div className="max-w-9xl mx-auto grid grid-cols-[1fr_max-content] gap-x-16 px-16">
        <div>{children}</div>
        <div>
          <StickySectionNavigation />
        </div>
      </div>
    </div>
  );
}
