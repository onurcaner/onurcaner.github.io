import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { EducationServerDataSchema } from '@/services/education/schemas/EducationServerDataSchema.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';

export class EducationServerDataVerifier extends DataVerifier<EducationServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationServerData> {
    return EducationServerDataSchema.parseAsync(data);
  }
}
