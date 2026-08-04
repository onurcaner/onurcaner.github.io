import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';
import { type InMemoryRepository } from '../../_types/InMemoryRepository.ts';

import { type CallToActionContentServerData } from '../types/CallToActionContentServerData.ts';

export class InMemoryCallToActionContentRepository implements InMemoryRepository<CallToActionContentServerData> {
  public get repository(): CallToActionContentServerData[] {
    return [
      {
        id: 'be707ca0-6b9b-4334-b7e4-b03b68207542',
        content_language_code: ContentLanguageCode.English,
        title: "I'm open to work",
        description:
          "Eager to contribute to cutting-edge projects. Available for remote positions and long-term commitments. Let's achieve great things together.",
      },

      {
        id: '07d881fe-0405-4614-aafe-43414a8a731e',
        content_language_code: ContentLanguageCode.Turkish,
        title: 'Çalışmaya açığım',
        description:
          'Son teknoloji projelere katkıda bulunmaya istekli. Uzaktan çalışmaya ve uzun vadeli pozisyonlarda çalışmaya hazır. Hadi birlikte büyük işler başaralım.',
      },
    ];
  }
}
