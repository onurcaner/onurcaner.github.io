import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';

export class EducationServerDataTransformer extends DataTransformer<
  EducationServerData,
  EducationClientData
> {
  protected override async _transformOne(
    data: EducationServerData,
  ): Promise<EducationClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      educationProviderId: data.education_provider_id,
      startDate: new Date(data.start_date),
      endDate: new Date(data.end_date),
      gradeType: data.grade_type,
      gradeValue: data.grade_value,
      descriptionListIds: data.description_list_ids,
    });
  }
}
