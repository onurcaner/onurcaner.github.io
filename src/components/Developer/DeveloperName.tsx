import type { ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function DeveloperName(): ReactElement {
  const [language] = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });

  return (
    <p className="text-4 font-semibold text-(--component-developer-name-text-color) uppercase">
      {developer.name}
    </p>
  );
}
