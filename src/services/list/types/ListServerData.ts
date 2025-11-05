import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface ListServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  title: string;
  items: string[];
}
