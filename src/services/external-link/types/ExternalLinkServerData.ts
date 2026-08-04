import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { ExternalLinkName } from '../constants/ExternalLinkName.ts';

export interface ExternalLinkServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  name: ExternalLinkName;
  label: string;
  url: string;
}
