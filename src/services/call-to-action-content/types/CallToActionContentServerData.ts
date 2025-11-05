import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface CallToActionContentServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  title: string;
  description: string;
}
