import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface CompanyServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  name: string;
  web_page_url: string;
  location_id: string;
}
