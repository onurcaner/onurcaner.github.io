import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { SkillCategory } from '@/services/skill/constants/SkillCategory.ts';
import { SkillName } from '@/services/skill/constants/SkillName.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';

export const inMemorySkillRepository: SkillServerData[] = [
  // CSS
  ...[
    {
      id: '8daab5f3-dd77-4960-aac9-0c4ce184abae',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.CSS,
      label: 'CSS',
      associated_skill_categories: [SkillCategory.Frontend],
    },
    {
      id: '6b09937e-8661-402d-84a0-70533af16ef8',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.CSS,
      label: 'CSS',
      associated_skill_categories: [SkillCategory.Frontend],
    },
  ],

  // Git
  ...[
    {
      id: '28139e4e-2e0d-48b8-9bf3-228a28d7de75',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.Git,
      label: 'Git',
      associated_skill_categories: [
        SkillCategory.Backend,
        SkillCategory.Frontend,
      ],
    },
    {
      id: '055035e8-f598-4276-befd-7b0fd86d95cb',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.Git,
      label: 'Git',
      associated_skill_categories: [
        SkillCategory.Backend,
        SkillCategory.Frontend,
      ],
    },
  ],

  // HTML
  ...[
    {
      id: '5cae6fea-c454-4821-b16b-9104a52dec5e',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.HTML,
      label: 'HTML',
      associated_skill_categories: [SkillCategory.Frontend],
    },
    {
      id: '4b9bbb5a-b206-4946-b633-d4c46d67a65f',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.HTML,
      label: 'HTML',
      associated_skill_categories: [SkillCategory.Frontend],
    },
  ],

  // JavaScript
  ...[
    {
      id: '1fae250f-bb8e-410d-81ca-8788aaf009ae',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.JavaScript,
      label: 'JavaScript',
      associated_skill_categories: [
        SkillCategory.Backend,
        SkillCategory.Frontend,
      ],
    },
    {
      id: 'a989e0d0-52c8-4752-8b4e-7742a8eaf8e9',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.JavaScript,
      label: 'JavaScript',
      associated_skill_categories: [
        SkillCategory.Backend,
        SkillCategory.Frontend,
      ],
    },
  ],

  // Next.js
  ...[
    {
      id: '934b5a25-001d-42a6-aca5-2b74fe8c8096',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.NextJs,
      label: 'Next.js',
      associated_skill_categories: [SkillCategory.Frontend],
    },
    {
      id: 'b07bc461-7f65-48cc-94a5-fa45bfddde08',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.NextJs,
      label: 'Next.js',
      associated_skill_categories: [SkillCategory.Frontend],
    },
  ],

  // React
  ...[
    {
      id: 'fb2df666-6e04-491e-9143-ea2317b47738',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.React,
      label: 'React',
      associated_skill_categories: [SkillCategory.Frontend],
    },
    {
      id: '7190c53a-5a12-4a69-9620-b98e000c0246',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.React,
      label: 'React',
      associated_skill_categories: [SkillCategory.Frontend],
    },
  ],

  // SASS
  ...[
    {
      id: '0145fc5a-a8ed-40ed-ba81-82af3ce73ac3',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.SASS,
      label: 'SASS',
      associated_skill_categories: [SkillCategory.Frontend],
    },
    {
      id: '2d40e10f-69a9-4a7d-933c-49c05e98ee40',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.SASS,
      label: 'SASS',
      associated_skill_categories: [SkillCategory.Frontend],
    },
  ],

  // Tailwind CSS
  ...[
    {
      id: 'd4e3ca07-fa40-4499-928a-bcb7e41100d8',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.TailwindCSS,
      label: 'Tailwind CSS',
      associated_skill_categories: [SkillCategory.Frontend],
    },
    {
      id: 'ea8a1cf1-1d77-456a-b605-a1942f99c339',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.TailwindCSS,
      label: 'Tailwind CSS',
      associated_skill_categories: [SkillCategory.Frontend],
    },
  ],

  // TypeScript
  ...[
    {
      id: '0e025d42-768f-4e70-bfb3-844235133e5e',
      content_language_code: ContentLanguageCode.English,
      name: SkillName.TypeScript,
      label: 'TypeScript',
      associated_skill_categories: [
        SkillCategory.Backend,
        SkillCategory.Frontend,
      ],
    },
    {
      id: 'd2b15478-b9c1-4d06-ae73-377e84d820b3',
      content_language_code: ContentLanguageCode.Turkish,
      name: SkillName.TypeScript,
      label: 'TypeScript',
      associated_skill_categories: [
        SkillCategory.Backend,
        SkillCategory.Frontend,
      ],
    },
  ],
];
