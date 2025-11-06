import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export interface LocationClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  countryName: string;
  countryCode: string;
  cityName: string;
}
