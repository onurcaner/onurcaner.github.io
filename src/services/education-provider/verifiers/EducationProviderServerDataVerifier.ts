import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { EducationProviderServerDataSchema } from '@/services/education-provider/schemas/EducationProviderServerDataSchema.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export class EducationProviderServerDataVerifier extends DataVerifier<EducationProviderServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<EducationProviderServerData> {
    return EducationProviderServerDataSchema.parseAsync(data);
  }
}
