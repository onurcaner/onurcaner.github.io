import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { type LocationServerData } from '@/services/location/types/LocationServerData.ts';

export const inMemoryLocationRepository: LocationServerData[] = [
  // Ankara
  ...[
    {
      id: 'ce342249-839c-4c85-832d-4a7016840ecb',
      content_language_code: ContentLanguageCode.English,
      country_name: 'Turkey',
      country_code: 'tr',
      city_name: 'Ankara',
    },
    {
      id: '10306675-ab6e-429d-b7c9-fedc09bf7877',
      content_language_code: ContentLanguageCode.Turkish,
      country_name: 'Türkiye',
      country_code: 'tr',
      city_name: 'Ankara',
    },
  ],

  // Balıkesir
  ...[
    {
      id: 'fc39731e-ca28-4a0d-8108-8d71c606fa9c',
      content_language_code: ContentLanguageCode.English,
      country_name: 'Turkey',
      country_code: 'tr',
      city_name: 'Balıkesir',
    },
    {
      id: '22daed76-1e26-4a52-8649-a41b67295d30',
      content_language_code: ContentLanguageCode.Turkish,
      country_name: 'Türkiye',
      country_code: 'tr',
      city_name: 'Balıkesir',
    },
  ],
];
