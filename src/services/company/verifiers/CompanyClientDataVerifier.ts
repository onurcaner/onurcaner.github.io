import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { CompanyClientDataSchema } from '@/services/company/schemas/CompanyClientDataSchema.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';

export class CompanyClientDataVerifier extends DataVerifier<CompanyClientData> {
  protected async verifyOne(data: unknown): Promise<CompanyClientData> {
    return CompanyClientDataSchema.parseAsync(data);
  }
}
