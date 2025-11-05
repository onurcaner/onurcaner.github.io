import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { HeroContentClientDataSchema } from '@/services/hero-content/schemas/HeroContentClientDataSchema.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';

export class HeroContentClientDataVerifier extends DataVerifier<HeroContentClientData> {
  protected async verifyOne(data: unknown): Promise<HeroContentClientData> {
    return HeroContentClientDataSchema.parseAsync(data);
  }
}
