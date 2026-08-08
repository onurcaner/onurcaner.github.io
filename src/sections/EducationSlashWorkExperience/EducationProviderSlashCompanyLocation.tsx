import { type ReactElement, type ReactNode } from 'react';

export function EducationProviderSlashCompanyLocation({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <p className="text-4-5 font-normal text-(--theme-component-education-provider-and-company-location-text-color)">
      {children}
    </p>
  );
}
