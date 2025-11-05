import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { HeroContentServerDataSchema } from '@/services/hero-content/schemas/HeroContentServerDataSchema.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export class HeroContentServerDataVerifier extends DataVerifier<HeroContentServerData> {
  protected async verifyOne(data: unknown): Promise<HeroContentServerData> {
    return HeroContentServerDataSchema.parseAsync(data);
  }
}
