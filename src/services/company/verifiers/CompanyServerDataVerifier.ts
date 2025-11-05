import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { CompanyServerDataSchema } from '@/services/company/schemas/CompanyServerDataSchema.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export class CompanyServerDataVerifier extends DataVerifier<CompanyServerData> {
  public async verifyOne(data: unknown): Promise<CompanyServerData> {
    return CompanyServerDataSchema.parseAsync(data);
  }
}
