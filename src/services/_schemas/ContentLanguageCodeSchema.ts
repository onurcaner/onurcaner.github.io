import { z } from 'zod';

import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export const ContentLanguageCodeSchema = z.enum([
  ContentLanguageCode.English,
  ContentLanguageCode.Turkish,
]);
