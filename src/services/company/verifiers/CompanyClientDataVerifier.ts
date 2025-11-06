import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { CompanyClientDataSchema } from '@/services/company/schemas/CompanyClientDataSchema.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';

export class CompanyClientDataVerifier extends DataVerifier<CompanyClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<CompanyClientData> {
    return CompanyClientDataSchema.parseAsync(data);
  }
}
