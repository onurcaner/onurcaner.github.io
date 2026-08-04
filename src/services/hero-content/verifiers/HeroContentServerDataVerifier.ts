import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { HeroContentServerDataSchema } from '../schemas/HeroContentServerDataSchema.ts';
import { type HeroContentServerData } from '../types/HeroContentServerData.ts';

export class HeroContentServerDataVerifier extends DataVerifier<HeroContentServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<HeroContentServerData> {
    return HeroContentServerDataSchema.parseAsync(data);
  }
}
