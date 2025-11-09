import type { ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function DeveloperName(): ReactElement {
  const [language] = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });

  return (
    <p className="text-1000rem text-neutral-350 leading-none font-medium uppercase">
      {developer.name}
    </p>
  );
}
