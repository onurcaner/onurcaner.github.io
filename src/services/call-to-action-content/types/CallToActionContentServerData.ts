import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export interface CallToActionContentServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  title: string;
  description: string;
}
