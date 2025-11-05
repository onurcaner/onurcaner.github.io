import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface LocationServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  country_name: string;
  country_code: string;
  city_name: string;
}
