import { DataTransformer } from '../../_transformers/DataTransformer.ts';

import { type LocationClientData } from '../types/LocationClientData.ts';
import { type LocationServerData } from '../types/LocationServerData.ts';

export class LocationServerDataTransformer extends DataTransformer<
  LocationServerData,
  LocationClientData
> {
  protected override async _transformOne(
    data: LocationServerData,
  ): Promise<LocationClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      countryName: data.country_name,
      countryCode: data.country_code,
      cityName: data.city_name,
    });
  }
}
