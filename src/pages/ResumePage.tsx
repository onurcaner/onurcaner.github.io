import { type ReactElement } from 'react';

import { useCallToActionContentQuery } from '@/contexts/remote/call-to-action-content/useCallToActionContentQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function ResumePage(): ReactElement {
  const { language } = useLanguageContext();
  const data = useCallToActionContentQuery({ contentLanguageCode: language });

  return <div>{JSON.stringify(data, undefined, 2)}</div>;
}
