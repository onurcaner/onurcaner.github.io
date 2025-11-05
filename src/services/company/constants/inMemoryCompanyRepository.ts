import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export const inMemoryCompanyRepository: CompanyServerData[] = [
  // ASELSAN
  ...[
    {
      id: 'd67750e2-a4bc-4d3a-8af1-59d2406852be',
      content_language_code: ContentLanguageCode.English,
      name: 'ASELSAN',
      web_page_url: 'https://www.aselsan.com/en',
      location_id: 'ce342249-839c-4c85-832d-4a7016840ecb',
    },
    {
      id: '800f0d7b-849f-4859-91b8-4547cde6f5b6',
      content_language_code: ContentLanguageCode.Turkish,
      name: 'ASELSAN',
      web_page_url: 'https://www.aselsan.com/tr',
      location_id: '10306675-ab6e-429d-b7c9-fedc09bf7877',
    },
  ],

  // Plan-S
  ...[
    {
      id: '9c9e50be-0d28-4fce-9edd-27f11bfc8771',
      content_language_code: ContentLanguageCode.English,
      name: 'Plan-S Satellite and Space Technologies',
      web_page_url: 'https://www.plan.space',
      location_id: 'ce342249-839c-4c85-832d-4a7016840ecb',
    },
    {
      id: 'a6440340-d227-4c99-9a93-e976b2d78cb8',
      content_language_code: ContentLanguageCode.Turkish,
      name: 'Plan-S Uydu ve Uzay Teknolojileri',
      web_page_url: 'https://www.plan.space',
      location_id: '10306675-ab6e-429d-b7c9-fedc09bf7877',
    },
  ],
];
