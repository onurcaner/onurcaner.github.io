import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';

export class WorkExperienceServerDataTransformer extends DataTransformer<
  WorkExperienceServerData,
  WorkExperienceClientData
> {
  protected override async _transformOne(
    data: WorkExperienceServerData,
  ): Promise<WorkExperienceClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      associatedWorkExperienceCategories:
        data.associated_work_experience_categories,
      companyId: data.company_id,
      startDate: new Date(data.start_date),
      endDate: new Date(data.end_date),
      descriptionListIds: data.description_list_ids,
    });
  }
}
