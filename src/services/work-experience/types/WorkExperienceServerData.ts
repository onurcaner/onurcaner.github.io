import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';

export interface WorkExperienceServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  title: string;
  associated_work_experience_categories: WorkExperienceCategory[];
  company_id: string;
  start_date: string;
  end_date: string;
  description_list_ids: string[];
}
