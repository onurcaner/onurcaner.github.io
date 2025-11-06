import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export class EducationProviderServerDataTransformer extends DataTransformer<
  EducationProviderServerData,
  EducationProviderClientData
> {
  protected override async _transformOne(
    data: EducationProviderServerData,
  ): Promise<EducationProviderClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      name: data.name,
      webPageUrl: data.web_page_url,
      locationId: data.location_id,
    });
  }
}
