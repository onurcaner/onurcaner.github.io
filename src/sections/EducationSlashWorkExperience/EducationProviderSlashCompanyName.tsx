import { type ReactElement, type ReactNode } from 'react';

export function EducationProviderSlashCompanyName({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <h4 className="text-4-5 font-normal text-(--theme-component-education-provider-and-company-name-text-color)">
      {children}
    </h4>
  );
}
