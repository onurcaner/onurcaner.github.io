import { type ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface CompanyClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: string;
  webPageUrl: string;
  locationId: string;
}
