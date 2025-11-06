import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export interface HeroContentClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  description: string;
}
