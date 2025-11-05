import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { EducationProviderServerDataSchema } from '@/services/education-provider/schemas/EducationProviderServerDataSchema.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export class EducationProviderServerDataVerifier extends DataVerifier<EducationProviderServerData> {
  protected async verifyOne(
    data: unknown,
  ): Promise<EducationProviderServerData> {
    return EducationProviderServerDataSchema.parseAsync(data);
  }
}
