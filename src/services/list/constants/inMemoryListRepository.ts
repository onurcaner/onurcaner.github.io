import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export const inMemoryListRepository: ListServerData[] = [
  // Education -> Undergraduate degree
  ...[
    {
      id: '5cb40565-829f-4564-b4c4-45bfde43cd4b',
      content_language_code: ContentLanguageCode.English,
      title: 'Specialization in Computers Area',
      items: [
        'EE441 Data Structures',
        'EE442 Operating Systems',
        'EE444 Introduction to Computer Networks',
        'EE445 Computer Architecture I',
        'EE446 Computer Architecture II',
        'EE447 Introduction to Microprocessors',
      ],
    },
    {
      id: '03a53cad-72ca-4ab2-94d9-14680efb4a53',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Bilgisayarlar Alanında Yoğunlaşma',
      items: [
        'EE441 Veri Yapıları',
        'EE442 İşletim Sistemleri',
        'EE444 Bilgisayar Ağlarına Giriş',
        'EE445 Bilgisayar Mimarisi I',
        'EE446 Bilgisayar Mimarisi II',
        'EE447 Mikroişlemilere Giriş',
      ],
    },
    {
      id: 'a8c773ff-7172-4df0-a4c2-3c55ca21a0d8',
      content_language_code: ContentLanguageCode.English,
      title: 'Projects',
      items: [
        'Intelligent Agriculture at Home (EE493 - EE494)',
        'FPGA Based Point of Sale Terminal (EE314)',
        'Wireless Fire Detection System (EE214)',
        'Analog Air Conditioner System (EE213)',
      ],
    },
    {
      id: '74da0e92-1354-41e3-abb8-34b02e69f29e',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Projeler',
      items: [
        'Evde Akıllı Tarım (EE493 - EE494)',
        'FPGA Tabanlı Satış Noktası Terminali (EE314)',
        'Kablosuz Yangın Algılama Sistemi (EE214)',
        'Analog Klima Sistemi (EE213)',
      ],
    },
  ],

  // Work experience -> ASELSAN
  ...[
    {
      id: '2ab029ed-019d-47ec-934d-092a63e7df3d',
      content_language_code: ContentLanguageCode.English,
      title: 'Embedded Software Engineering',
      items: ['C Programming', 'MPLAB X IDE', 'BLDC Motors'],
    },
    {
      id: '578c0200-6db2-4931-b443-e5078346e552',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Gömülü Yazılım Mühendisliği',
      items: ['C Programlama', 'MPLAB X IDE', 'BLDC Motorları'],
    },
  ],

  // Work experience -> Plan-S
  ...[
    {
      id: '9f9e3127-24f2-45f4-a073-bc1ea4910823',
      content_language_code: ContentLanguageCode.English,
      title: 'Embedded Software Engineering',
      items: [
        'C Programming',
        'STM32CubeMX',
        'File Systems',
        'FreeRTOS',
        'Git',
      ],
    },
    {
      id: '3bb00bd8-37d2-41ca-b6e5-70a824204650',
      content_language_code: ContentLanguageCode.Turkish,
      title: 'Gömülü Yazılım Mühendisliği',
      items: [
        'C Programlama',
        'STM32CubeMX',
        'Dosya Sistemleri',
        'FreeRTOS',
        'Git',
      ],
    },
  ],
];
