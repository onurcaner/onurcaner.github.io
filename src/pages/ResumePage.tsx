import { type ReactElement } from 'react';

import { useCallToActionContentDataQuery } from '@/contexts/remote/call-to-action-content/useCallToActionContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function ResumePage(): ReactElement {
  const { language } = useLanguageContext();
  const data = useCallToActionContentDataQuery({
    contentLanguageCode: language,
  });

  return <div>{JSON.stringify(data, undefined, 2)}</div>;
}
