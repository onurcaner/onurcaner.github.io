import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export interface EducationServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  title: string;
  education_provider_id: string;
  start_date: string;
  end_date: string;
  grade_type: string;
  grade_value: string;
  description_list_ids: string[];
}
