import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';

export const inMemoryWorkExperienceRepository: WorkExperienceServerData[] = [
  // ASELSAN
  ...[
    {
      id: '5c4e610e-a2d9-48cb-bb5a-7e79e29602ec',
      content_language_code: ContentLanguageCode.English,
      title: 'Embedded Software Engineering Intern',
      associated_work_experience_categories: [
        WorkExperienceCategory.SoftwareDevelopment,
      ],
      company_id: 'd67750e2-a4bc-4d3a-8af1-59d2406852be',
      start_date: new Date('2021-08').toISOString(),
      end_date: new Date('2021-09').toISOString(),
      description_list_ids: ['2ab029ed-019d-47ec-934d-092a63e7df3d'],
    },
    {
      id: '23d1e4bd-11ad-49d7-86d5-b58c7614f840',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Gömülü Yazılım Mühendisliği Stajyeri',
      associated_work_experience_categories: [
        WorkExperienceCategory.SoftwareDevelopment,
      ],
      company_id: '800f0d7b-849f-4859-91b8-4547cde6f5b6',
      start_date: new Date('2021-08').toISOString(),
      end_date: new Date('2021-09').toISOString(),
      description_list_ids: ['578c0200-6db2-4931-b443-e5078346e552'],
    },
  ],

  // Plan-S
  ...[
    {
      id: '2106042a-2812-42f9-bfc7-4e1aa0174465',
      content_language_code: ContentLanguageCode.English,
      title: 'Embedded Software Engineering Intern',
      associated_work_experience_categories: [
        WorkExperienceCategory.SoftwareDevelopment,
      ],
      company_id: '9c9e50be-0d28-4fce-9edd-27f11bfc8771',
      start_date: new Date('2022-07').toISOString(),
      end_date: new Date('2022-08').toISOString(),
      description_list_ids: ['9f9e3127-24f2-45f4-a073-bc1ea4910823'],
    },
    {
      id: '5bd935e6-0885-4644-bc24-7febfcde22b9',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Gömülü Yazılım Mühendisliği Stajyeri',
      associated_work_experience_categories: [
        WorkExperienceCategory.SoftwareDevelopment,
      ],
      company_id: 'a6440340-d227-4c99-9a93-e976b2d78cb8',
      start_date: new Date('2022-07').toISOString(),
      end_date: new Date('2022-08').toISOString(),
      description_list_ids: ['3bb00bd8-37d2-41ca-b6e5-70a824204650'],
    },
  ],
];
