import { DataTransformer } from '../../_transformers/DataTransformer.ts';

import { type ExperienceClientData } from '../types/ExperienceClientData.ts';
import { type ExperienceServerData } from '../types/ExperienceServerData.ts';

export class ExperienceServerDataTransformer extends DataTransformer<
  ExperienceServerData,
  ExperienceClientData
> {
  protected override async _transformOne(
    data: ExperienceServerData,
  ): Promise<ExperienceClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      associatedExperienceCategories: data.associated_experience_categories,
      companyId: data.company_id,
      startDate: new Date(data.start_date),
      endDate: new Date(data.end_date),
      level: data.level,
      descriptionListIds: data.description_list_ids,
    });
  }
}
