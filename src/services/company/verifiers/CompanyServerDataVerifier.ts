import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { CompanyServerDataSchema } from '../schemas/CompanyServerDataSchema.ts';
import { type CompanyServerData } from '../types/CompanyServerData.ts';

export class CompanyServerDataVerifier extends DataVerifier<CompanyServerData> {
  public override async _verifyOne(data: unknown): Promise<CompanyServerData> {
    return CompanyServerDataSchema.parseAsync(data);
  }
}
