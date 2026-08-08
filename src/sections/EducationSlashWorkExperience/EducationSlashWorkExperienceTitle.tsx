import { type ReactElement, type ReactNode } from 'react';

export function EducationSlashWorkExperienceTitle({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <h3 className="text-4-5 font-semibold text-(--theme-component-education-and-work-experience-title-text-color)">
      {children}
    </h3>
  );
}
