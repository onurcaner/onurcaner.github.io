import { type ReactElement } from 'react';

import { Developer } from '@/components/Developer.tsx';
import { useElementsRefContext } from '@/contexts/global/ref/useElementsRefContext.tsx';

export function Header(): ReactElement {
  const { headerRef } = useElementsRefContext();

  return (
    <header
      ref={headerRef}
      className="border-b-theme fixed top-0 right-0 left-0 grid justify-items-center border-(--component-header-border-color) bg-(--component-header-background-color)"
    >
      <div className="max-w-8xl flex w-full items-center justify-between px-16 py-10">
        <Developer />
        <div>MENU</div>
      </div>
    </header>
  );
}
