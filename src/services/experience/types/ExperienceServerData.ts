import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { ExperienceCategory } from '../constants/ExperienceCategory.ts';

export interface ExperienceServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  title: string;
  associated_experience_categories: ExperienceCategory[];
  company_id: string;
  start_date: string;
  end_date: string;
  level: string;
  description_list_ids: string[];
}
