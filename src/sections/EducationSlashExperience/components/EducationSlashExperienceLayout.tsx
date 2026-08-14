import { type ReactElement } from 'react';

export function EducationSlashExperienceLayout({
  EducationSlashExperienceTitle,
  EducationProviderSlashCompanyName,
  EducationProviderSlashCompanyLocation,
  EducationSlashExperienceDateRange,
  EducationGradeSlashExperienceLevel,
  DescriptionListsList,
}: {
  EducationSlashExperienceTitle: ReactElement;
  EducationProviderSlashCompanyName: ReactElement;
  EducationProviderSlashCompanyLocation: ReactElement;
  EducationSlashExperienceDateRange: ReactElement;
  EducationGradeSlashExperienceLevel: ReactElement;
  DescriptionListsList?: ReactElement;
}): ReactElement {
  return (
    <div className="grid grid-cols-[minmax(max-content,2fr)_minmax(max-content,1fr)] content-between items-center gap-x-16">
      {/* Title */}
      <div className="text-a col-start-1 col-end-2 row-start-1 row-end-2 text-left">
        {EducationSlashExperienceTitle}
      </div>

      {/* Name */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 text-left">
        {EducationProviderSlashCompanyName}
      </div>

      {/* Location */}
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 text-right">
        {EducationProviderSlashCompanyLocation}
      </div>

      {/* Date Range */}
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 text-right">
        {EducationSlashExperienceDateRange}
      </div>

      {/* Grade / Level */}
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 text-left">
        {EducationGradeSlashExperienceLevel}
      </div>

      {/* Lists */}
      {DescriptionListsList && (
        <div className="col-start-1 col-end-2 mt-4 text-left">
          {DescriptionListsList}
        </div>
      )}
    </div>
  );
}
