import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { CompanyClientDataSchema } from '../schemas/CompanyClientDataSchema.ts';
import { type CompanyClientData } from '../types/CompanyClientData.ts';

export class CompanyClientDataVerifier extends DataVerifier<CompanyClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<CompanyClientData> {
    return CompanyClientDataSchema.parseAsync(data);
  }
}
