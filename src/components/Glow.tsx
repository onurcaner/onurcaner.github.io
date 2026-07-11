import { type ReactElement } from 'react';

export function Glow({
  children,
  elevationStep,
}: {
  children: ReactElement;
  elevationStep: number;
}): ReactElement {
  return (
    <div className="relative grid h-full w-full">
      <div className="relative z-2 col-span-full row-span-full bg-neutral-900" />
      {/*<div className="relative z-1 col-span-full row-span-full">{children}</div>*/}
      <div
        className="relative z-0 col-span-full row-span-full opacity-40 blur-xs"
        aria-hidden={true}
        style={{
          filter: `blur(calc(${elevationStep.toString()} * var(--theme-elevation-step)))`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
// <div className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-white mix-blend-multiply blur-sm" />;