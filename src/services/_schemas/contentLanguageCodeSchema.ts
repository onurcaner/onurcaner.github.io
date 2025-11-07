import { z } from 'zod';

import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';

export const contentLanguageCodeSchema = z.enum([
  ContentLanguageCode.English,
  ContentLanguageCode.Turkish,
]);
