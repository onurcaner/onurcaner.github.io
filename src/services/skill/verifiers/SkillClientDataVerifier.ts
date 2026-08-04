import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { SkillClientDataSchema } from '../schemas/SkillClientDataSchema.ts';
import { type SkillClientData } from '../types/SkillClientData.ts';

export class SkillClientDataVerifier extends DataVerifier<SkillClientData> {
  protected override async _verifyOne(data: unknown): Promise<SkillClientData> {
    return SkillClientDataSchema.parseAsync(data);
  }
}
