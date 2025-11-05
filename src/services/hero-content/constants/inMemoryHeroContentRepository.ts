import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export const inMemoryHeroContentRepository: HeroContentServerData[] = [
  {
    id: '9e133884-0613-42fe-8174-317cf684b3ad',
    content_language_code: ContentLanguageCode.English,
    title: "Hello, I'm Onur Caner",
    description:
      'A Frontend Developer building web applications and websites with a focus on learning and growth. Eager to contribute to the success of innovative projects and grow within a dynamic development team.',
  },

  {
    id: '3a176b3d-95cf-40db-bc02-feee94aa9cc9',
    content_language_code: ContentLanguageCode.Turkish,
    title: 'Merhaba, ben Onur Caner',
    description:
      'Öğrenmeye ve gelişmeye odaklanarak web uygulamaları ve web siteleri yapan bir frontend geliştirici. Yenilikçi projelerin başarısına katkıda bulunmaya ve dinamik bir takım içinde gelişmeye istekli',
  },
];
