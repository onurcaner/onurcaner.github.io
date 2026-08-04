import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

export interface HeroContentClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  description: string;
}
