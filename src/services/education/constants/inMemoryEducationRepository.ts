import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';

export const inMemoryEducationRepository: EducationServerData[] = [
  // High school education
  ...[
    {
      id: '7a08c5a7-05f2-4de8-94d9-d1178deb594e',
      content_language_code: ContentLanguageCode.English,
      title: 'High School Education',
      education_provider_id: '6afc4871-7312-42ac-8741-3bbaa417cf3c',
      start_date: new Date('2010-09').toISOString(),
      end_date: new Date('2014-06').toISOString(),
      grade_type: 'GPA',
      grade_value: '92.44%',
      description_list_ids: [],
    },
    {
      id: '692883ad-6f34-4541-8a37-03da98b6dae2',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Lise Eğitimi',
      education_provider_id: '66fd87bf-dc99-4da0-86f5-e55ddcab6e83',
      start_date: new Date('2010-09').toISOString(),
      end_date: new Date('2014-06').toISOString(),
      grade_type: 'Notu',
      grade_value: '%92.44',
      description_list_ids: [],
    },
  ],

  // Undergraduate degree
  ...[
    {
      id: 'd1e86a3e-512e-446d-80d4-49c3c572bd98',
      content_language_code: ContentLanguageCode.English,
      title: 'BSc in Electrical and Electronics Engineering',
      education_provider_id: '1707fd26-4c50-42fe-9905-1a28660e96cb',
      start_date: new Date('2014-09').toISOString(),
      end_date: new Date('2023-01').toISOString(),
      grade_type: 'CGPA',
      grade_value: '3.18/4.00',
      description_list_ids: [
        '5cb40565-829f-4564-b4c4-45bfde43cd4b',
        'a8c773ff-7172-4df0-a4c2-3c55ca21a0d8',
      ],
    },
    {
      id: '9c6ee2b2-6445-4244-a8b5-5d3aa799d04c',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Elektrik ve Elektronik Mühedisliği',
      education_provider_id: '50e1a6eb-3b25-4c12-98f6-0917c9562aef',
      start_date: new Date('2014-09').toISOString(),
      end_date: new Date('2023-01').toISOString(),
      grade_type: 'CGPA',
      grade_value: '3.18/4.00',
      description_list_ids: [
        '03a53cad-72ca-4ab2-94d9-14680efb4a53',
        '74da0e92-1354-41e3-abb8-34b02e69f29e',
      ],
    },
  ],
];
