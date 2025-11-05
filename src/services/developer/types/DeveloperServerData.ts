import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface DeveloperServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  name: string;
  job_title: string;
  external_link_ids: string[];
  is_open_to_work: boolean;
}
