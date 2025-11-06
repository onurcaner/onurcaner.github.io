import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { SkillServerDataSchema } from '@/services/skill/schemas/SkillServerDataSchema.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';

export class SkillServerDataVerifier extends DataVerifier<SkillServerData> {
  protected override async _verifyOne(data: unknown): Promise<SkillServerData> {
    return SkillServerDataSchema.parseAsync(data);
  }
}
