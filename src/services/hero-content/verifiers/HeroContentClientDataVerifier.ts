import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { HeroContentClientDataSchema } from '../schemas/HeroContentClientDataSchema.ts';
import { type HeroContentClientData } from '../types/HeroContentClientData.ts';

export class HeroContentClientDataVerifier extends DataVerifier<HeroContentClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<HeroContentClientData> {
    return HeroContentClientDataSchema.parseAsync(data);
  }
}
