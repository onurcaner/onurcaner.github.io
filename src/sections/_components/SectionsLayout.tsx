import { type ReactNode } from 'react';

export function SectionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-(--theme-component-section-background-color)">
      <div className="max-w-8xl mx-auto grid grid-cols-[1fr_max-content] gap-x-16 px-16">
        <div>{children}</div>
        <div className="my-20 h-full bg-pink-200">
          <div className="sticky top-1/2 text-pink-900">Hash Brown</div>
        </div>
      </div>
    </div>
  );
}
