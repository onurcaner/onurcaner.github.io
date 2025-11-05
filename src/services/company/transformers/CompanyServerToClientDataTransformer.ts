import { DataTransformer } from '@/services/_base/transformers/DataTransformer.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export class CompanyServerToClientDataTransformer extends DataTransformer<
  CompanyServerData,
  CompanyClientData
> {
  protected async transformOne(
    data: CompanyServerData,
  ): Promise<CompanyClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      name: data.name,
      webPageUrl: data.web_page_url,
      locationId: data.location_id,
    });
  }
}
