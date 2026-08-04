import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { EducationProviderServerDataSchema } from '../schemas/EducationProviderServerDataSchema.ts';
import { type EducationProviderServerData } from '../types/EducationProviderServerData.ts';

export class EducationProviderServerDataVerifier extends DataVerifier<EducationProviderServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationProviderServerData> {
    return EducationProviderServerDataSchema.parseAsync(data);
  }
}
