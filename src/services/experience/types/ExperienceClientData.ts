import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { WorkExperienceCategory } from '../constants/WorkExperienceCategory.ts';

export interface WorkExperienceClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  associatedWorkExperienceCategories: WorkExperienceCategory[];
  companyId: string;
  startDate: Date;
  endDate: Date;
  level: string;
  descriptionListIds: string[];
}
