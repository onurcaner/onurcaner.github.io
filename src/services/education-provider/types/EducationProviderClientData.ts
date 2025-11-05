import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface EducationProviderClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: string;
  webPageUrl: string;
  locationId: string;
}
