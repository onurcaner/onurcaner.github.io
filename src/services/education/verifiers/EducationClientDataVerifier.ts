import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { EducationClientDataSchema } from '../schemas/EducationClientDataSchema.ts';
import { type EducationClientData } from '../types/EducationClientData.ts';

export class EducationClientDataVerifier extends DataVerifier<EducationClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationClientData> {
    return EducationClientDataSchema.parseAsync(data);
  }
}
