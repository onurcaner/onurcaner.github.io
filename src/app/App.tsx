import { type ReactElement, useEffect } from 'react';

import '@/css/tailwindcss.css';
import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { CallToActionContentDataFindOneQueryModel } from '@/services/call-to-action-content/models/CallToActionContentDataFindOneQueryModel.ts';

export function App(): ReactElement {
  useEffect(() => {
    void new CallToActionContentDataFindOneQueryModel()
      .query({
        contentLanguageCode: ContentLanguageCode.English,
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <></>;
}
