import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { ExternalLinkName } from '../constants/ExternalLinkName.ts';

export interface ExternalLinkClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: ExternalLinkName;
  label: string;
  url: string;
}
