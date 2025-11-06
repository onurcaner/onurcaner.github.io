import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { EducationClientDataSchema } from '@/services/education/schemas/EducationClientDataSchema.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export class EducationClientDataVerifier extends DataVerifier<EducationClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationClientData> {
    return EducationClientDataSchema.parseAsync(data);
  }
}
