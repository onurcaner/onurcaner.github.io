import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

export interface DeveloperClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: string;
  jobTitle: string;
  externalLinkIds: string[];
  isOpenToWork: boolean;
}
