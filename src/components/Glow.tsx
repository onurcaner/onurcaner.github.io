import { type ReactElement } from 'react';

export function Glow({ children }: { children: ReactElement }): ReactElement {
  return (
    <div className="relative z-0 grid grid-cols-1 grid-rows-1">
      <div className="z-0 col-span-full row-span-full opacity-100">
        {children}
      </div>
      <div className="z-10 col-span-full row-span-full opacity-40 blur-xs">
        {children}
      </div>
      <div className="z-20 col-span-full row-span-full opacity-20 blur-sm">
        {children}
      </div>
      <div className="z-30 col-span-full row-span-full opacity-10 blur-xs">
        {children}
      </div>
    </div>
  );
}
