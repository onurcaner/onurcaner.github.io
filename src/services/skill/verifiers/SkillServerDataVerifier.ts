import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { SkillServerDataSchema } from '../schemas/SkillServerDataSchema.ts';
import { type SkillServerData } from '../types/SkillServerData.ts';

export class SkillServerDataVerifier extends DataVerifier<SkillServerData> {
  protected override async _verifyOne(data: unknown): Promise<SkillServerData> {
    return SkillServerDataSchema.parseAsync(data);
  }
}
