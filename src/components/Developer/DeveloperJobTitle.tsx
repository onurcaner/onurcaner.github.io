import type { ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function DeveloperJobTitle(): ReactElement {
  const [language] = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });

  return (
    <p className="text-4 font-normal text-(--component-developer-job-title-text-color) capitalize">
      {developer.jobTitle}
    </p>
  );
}
