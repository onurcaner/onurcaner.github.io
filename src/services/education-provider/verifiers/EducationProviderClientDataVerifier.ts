import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { EducationProviderClientDataSchema } from '@/services/education-provider/schemas/EducationProviderClientDataSchema.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';

export class EducationProviderClientDataVerifier extends DataVerifier<EducationProviderClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationProviderClientData> {
    return EducationProviderClientDataSchema.parseAsync(data);
  }
}
