import type { ReactElement } from 'react';

import { useEducationProviderDataQuery } from '@/contexts/remote/education-provider/useEducationProviderDataQuery.tsx';
import { useLocationDataQuery } from '@/contexts/remote/location/useLocationDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import type { EducationClientData } from '@/services/education/types/EducationClientData.ts';

export function EducationItem({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  const { language } = useLanguageContext();

  const educationProvider = useEducationProviderDataQuery({
    id: education.educationProviderId,
  });
  const location = useLocationDataQuery({
    id: educationProvider.locationId,
  });

  return (
    <li className="grid grid-cols-[repeat(2,minmax(max-content,1fr))] items-center text-white">
      {/* Education Title */}
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start">
        <h3 className="text-4-5 font-semibold text-(--theme-component-education-title-text-color)">
          {education.title}
        </h3>
      </div>

      {/* Education Provider */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 justify-self-start">
        <h4 className="text-4-5 font-normal text-(--theme-component-education-provider-text-color)">
          {educationProvider.name}
        </h4>
      </div>

      {/* Education Location */}
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
        <p className="text-4-5 font-normal text-(--theme-component-education-location-text-color)">
          {location.cityName}, {location.countryName}
        </p>
      </div>

      {/* Education Date Range */}
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end">
        <p className="text-4-5 font-semibold text-(--theme-component-education-date-text-color)">
          {new Intl.DateTimeFormat(language, {
            year: 'numeric',
            month: '2-digit',
          }).format(education.startDate)}{' '}
          -{' '}
          {new Intl.DateTimeFormat(language, {
            year: 'numeric',
            month: '2-digit',
          }).format(education.endDate)}
        </p>
      </div>

      {/* Grade */}
      <div className="col-start-1 col-end-3 row-start-3 row-end-4">
        <p className="text-4-5 font-extralight text-(--theme-component-education-grade-text-color)">
          {education.gradeType}: {education.gradeValue}
        </p>
      </div>

      {/*  */}
    </li>
  );
}
