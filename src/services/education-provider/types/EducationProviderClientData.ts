import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

export interface EducationProviderClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: string;
  webPageUrl: string;
  locationId: string;
}
