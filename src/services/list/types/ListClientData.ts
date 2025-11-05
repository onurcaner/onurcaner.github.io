import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface ListClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  items: string[];
}
