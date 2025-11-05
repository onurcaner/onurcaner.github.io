import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface CallToActionContentClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  description: string;
}
