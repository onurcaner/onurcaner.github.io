import { DataTransformer } from '../../_transformers/DataTransformer.ts';

import { type CompanyClientData } from '../types/CompanyClientData.ts';
import { type CompanyServerData } from '../types/CompanyServerData.ts';

export class CompanyServerDataTransformer extends DataTransformer<
  CompanyServerData,
  CompanyClientData
> {
  protected override async _transformOne(
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
