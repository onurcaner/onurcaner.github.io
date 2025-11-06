import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { SkillClientDataSchema } from '@/services/skill/schemas/SkillClientDataSchema.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

export class SkillClientDataVerifier extends DataVerifier<SkillClientData> {
  protected override async _verifyOne(data: unknown): Promise<SkillClientData> {
    return SkillClientDataSchema.parseAsync(data);
  }
}
