import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { ExperienceCategory } from '../constants/ExperienceCategory.ts';

export interface ExperienceClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  associatedExperienceCategories: ExperienceCategory[];
  companyId: string;
  startDate: Date;
  endDate: Date;
  level: string;
  descriptionListIds: string[];
}
