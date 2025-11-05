import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { EducationServerDataSchema } from '@/services/education/schemas/EducationServerDataSchema.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';

export class EducationServerDataVerifier extends DataVerifier<EducationServerData> {
  protected async verifyOne(data: unknown): Promise<EducationServerData> {
    return EducationServerDataSchema.parseAsync(data);
  }
}
