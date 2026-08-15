import { type ReactElement } from 'react';

export function BlurShadow({
  children,
  elevationStep,
  className,
}: {
  children: ReactElement;
  elevationStep: number;
  className?: string;
}): ReactElement {
  return (
    <div
      className={className}
      aria-hidden={true}
      style={{
        filter: `blur(calc(${elevationStep.toString()} * var(--theme-component-blur-shadow-elevation-step))) opacity(var(--theme-component-blur-shadow-opacity))`,
      }}
    >
      {children}
    </div>
  );
}
