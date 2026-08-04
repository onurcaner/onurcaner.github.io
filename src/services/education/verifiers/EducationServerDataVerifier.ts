import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { EducationServerDataSchema } from '../schemas/EducationServerDataSchema.ts';
import { type EducationServerData } from '../types/EducationServerData.ts';

export class EducationServerDataVerifier extends DataVerifier<EducationServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationServerData> {
    return EducationServerDataSchema.parseAsync(data);
  }
}
