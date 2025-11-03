import { type ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { type ExternalLinkName } from '@/services/external-link/constants/ExternalLinkName.ts';

export interface ExternalLinkClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: ExternalLinkName;
  label: string;
  url: string;
}
