import { type ReactElement } from 'react';

export function EducationSlashWorkExperienceLayout({
  EducationSlashWorkExperienceTitle,
  EducationProviderSlashCompanyName,
  EducationProviderSlashCompanyLocation,
  EducationSlashWorkExperienceDateRange,
  EducationGradeSlashWorkExperienceLevel,
  DescriptionListsList,
}: {
  EducationSlashWorkExperienceTitle: ReactElement;
  EducationProviderSlashCompanyName: ReactElement;
  EducationProviderSlashCompanyLocation: ReactElement;
  EducationSlashWorkExperienceDateRange: ReactElement;
  EducationGradeSlashWorkExperienceLevel: ReactElement;
  DescriptionListsList?: ReactElement;
}): ReactElement {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(max-content,1fr))] items-center">
      {/* Title */}
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start">
        {EducationSlashWorkExperienceTitle}
      </div>

      {/* Name */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 justify-self-start">
        {EducationProviderSlashCompanyName}
      </div>

      {/* Location */}
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
        {EducationProviderSlashCompanyLocation}
      </div>

      {/* Date Range */}
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end">
        {EducationSlashWorkExperienceDateRange}
      </div>

      {/* Grade */}
      <div className="col-span-full justify-self-start">
        {EducationGradeSlashWorkExperienceLevel}
      </div>

      {/* Lists */}
      {DescriptionListsList && (
        <div className="col-span-full mt-4">{DescriptionListsList}</div>
      )}
    </div>
  );
}
