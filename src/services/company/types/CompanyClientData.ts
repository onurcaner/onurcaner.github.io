import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

export interface CompanyClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: string;
  webPageUrl: string;
  locationId: string;
}
