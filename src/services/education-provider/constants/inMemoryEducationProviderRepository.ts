import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export const inMemoryEducationProviderRepository: EducationProviderServerData[] =
  [
    // METU
    ...[
      {
        id: '1707fd26-4c50-42fe-9905-1a28660e96cb',
        content_language_code: ContentLanguageCode.English,
        name: 'Middle East Technical University',
        web_page_url: 'https://www.metu.edu.tr',
        location_id: 'ce342249-839c-4c85-832d-4a7016840ecb',
      },
      {
        id: '50e1a6eb-3b25-4c12-98f6-0917c9562aef',
        content_language_code: ContentLanguageCode.Turkish,
        name: 'Orta Doğu Teknik Üniversitesi',
        web_page_url: 'https://www.metu.edu.tr/tr',
        location_id: '10306675-ab6e-429d-b7c9-fedc09bf7877',
      },
    ],

    // RKAL
    ...[
      {
        id: '6afc4871-7312-42ac-8741-3bbaa417cf3c',
        content_language_code: ContentLanguageCode.English,
        name: 'Rahmi Kula Anadolu Lisesi',
        web_page_url: 'https://rahmikulaanadolulisesi.meb.k12.tr',
        location_id: 'fc39731e-ca28-4a0d-8108-8d71c606fa9c',
      },
      {
        id: '66fd87bf-dc99-4da0-86f5-e55ddcab6e83',
        content_language_code: ContentLanguageCode.Turkish,
        name: 'Rahmi Kula Anadolu Lisesi',
        web_page_url: 'https://rahmikulaanadolulisesi.meb.k12.tr',
        location_id: '22daed76-1e26-4a52-8649-a41b67295d30',
      },
    ],
  ];
