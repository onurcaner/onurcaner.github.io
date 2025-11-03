import type { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface LocationClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  countryName: string;
  countryCode: string;
  city: string;
}
