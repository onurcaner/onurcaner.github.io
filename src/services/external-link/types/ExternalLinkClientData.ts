import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { ExternalLinkName } from '@/services/external-link/constants/ExternalLinkName.ts';

export interface ExternalLinkClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: ExternalLinkName;
  label: string;
  url: string;
}
