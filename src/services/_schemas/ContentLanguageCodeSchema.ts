import { z } from 'zod';

import { ContentLanguageCode } from '../_constants/ContentLanguageCode.ts';

export const ContentLanguageCodeSchema = z.enum([
  ContentLanguageCode.English,
  ContentLanguageCode.Turkish,
]);
