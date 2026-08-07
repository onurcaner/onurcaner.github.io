import { type ReactNode } from 'react';

export function SectionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-(--theme-component-section-background-color)">
      <div className="max-w-9xl mx-auto grid grid-cols-[1fr_max-content] gap-x-16 px-16">
        <div>{children}</div>
        <div className="my-20 h-full">
          <div className="text-4 sticky top-1/2 rounded-(--theme-border-radius) bg-neutral-800 px-16 py-20 font-medium text-neutral-300">
            <div>Skills</div>
            <div>Education</div>
            <div>Work Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
