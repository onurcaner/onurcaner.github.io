import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export interface CallToActionContentClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  description: string;
}
