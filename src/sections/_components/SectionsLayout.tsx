import { type ReactNode } from 'react';

import { SideNavigation } from '@/components/SideNavigation/SideNavigation.tsx';

export function SectionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-(--theme-component-section-background-color)">
      <div className="max-w-9xl mx-auto grid grid-cols-[1fr_max-content] gap-x-16 px-16">
        <div>{children}</div>
        <div className="py-20">
          <SideNavigation />
        </div>
      </div>
    </div>
  );
}
