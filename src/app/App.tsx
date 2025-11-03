import { type ReactElement, useEffect } from 'react';

import '@/css/tailwindcss.css';
import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { CallToActionContentDataQueryModel } from '@/services/call-to-action-content/models/CallToActionContentDataQueryModel.ts';

export function App(): ReactElement {
  useEffect(() => {
    void new CallToActionContentDataQueryModel()
      .query({
        contentLanguageCode: ContentLanguageCode.English,
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <></>;
}
