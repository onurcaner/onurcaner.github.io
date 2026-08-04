import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { EducationProviderClientDataSchema } from '../schemas/EducationProviderClientDataSchema.ts';
import { type EducationProviderClientData } from '../types/EducationProviderClientData.ts';

export class EducationProviderClientDataVerifier extends DataVerifier<EducationProviderClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationProviderClientData> {
    return EducationProviderClientDataSchema.parseAsync(data);
  }
}
