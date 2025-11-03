import { z } from 'zod';

import { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export const ContentLanguageCodeSchema = z.enum([
  ContentLanguageCode.English,
  ContentLanguageCode.Turkish,
]);
