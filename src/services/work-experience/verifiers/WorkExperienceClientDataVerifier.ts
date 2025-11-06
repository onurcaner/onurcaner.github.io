import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { WorkExperienceClientDataSchema } from '@/services/work-experience/schemas/WorkExperienceClientDataSchema.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

export class WorkExperienceClientDataVerifier extends DataVerifier<WorkExperienceClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<WorkExperienceClientData> {
    return WorkExperienceClientDataSchema.parseAsync(data);
  }
}
