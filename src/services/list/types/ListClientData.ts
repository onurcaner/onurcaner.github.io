import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export interface ListClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  items: string[];
}
