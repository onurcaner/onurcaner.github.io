import { type ReactElement } from 'react';

export function HeroSectionFakeHeader(): ReactElement {
  return (
    <div className="h-[calc(var(--theme-border-thickness)+5rem+2rem)] w-full" />
  );
}
