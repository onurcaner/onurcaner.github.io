import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { ExternalLinkName } from '@/services/external-link/constants/ExternalLinkName.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export const inMemoryExternalLinkRepository: ExternalLinkServerData[] = [
  // GitHub
  ...[
    {
      id: 'c7891091-853b-4f26-97fc-a9417fd5e957',
      content_language_code: ContentLanguageCode.English,
      name: ExternalLinkName.GitHub,
      label: 'GitHub',
      url: 'https://github.com/onurcaner',
    },
    {
      id: '503ff213-1dfc-4a9f-9fa2-37e9482e92b0',
      content_language_code: ContentLanguageCode.Turkish,
      name: ExternalLinkName.GitHub,
      label: 'GitHub',
      url: 'https://github.com/onurcaner',
    },
  ],

  // LinkedIn
  ...[
    {
      id: 'b03aa963-dd6e-4b9a-a679-8d4ef0ceb676',
      content_language_code: ContentLanguageCode.English,
      name: ExternalLinkName.LinkedIn,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/onur-caner-81925a1a4',
    },
    {
      id: '3ee3ccbe-2a03-405b-9c28-8fbf7bd200fe',
      content_language_code: ContentLanguageCode.Turkish,
      name: ExternalLinkName.LinkedIn,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/onur-caner-81925a1a4',
    },
  ],

  // Personal page
  ...[
    {
      id: '6c151f5f-9583-4a21-96f2-dcfb62186a73',
      content_language_code: ContentLanguageCode.English,
      name: ExternalLinkName.PersonalPage,
      label: 'Personal page',
      url: 'https://onurcaner.github.io',
    },
    {
      id: '8d4a497e-5642-4f83-b713-5e06f3bc0a22',
      content_language_code: ContentLanguageCode.Turkish,
      name: ExternalLinkName.PersonalPage,
      label: 'Kişisel sayfa',
      url: 'https://onurcaner.github.io',
    },
  ],
];
