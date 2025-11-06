import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export const inMemoryCallToActionContentRepository: CallToActionContentServerData[] =
  [
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
