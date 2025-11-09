import { type ReactElement } from 'react';

import { Developer } from '@/components/Developer.tsx';

export function Header(): ReactElement {
  return (
    <div className="border-b-theme border-neutral-850 grid justify-items-center bg-neutral-900">
      <div className="max-w-10xl flex w-full items-center justify-between px-8 py-10">
        <Developer />
        <div>MENU</div>
      </div>
    </div>
  );
}
