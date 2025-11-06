import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { WorkExperienceServerDataSchema } from '@/services/work-experience/schemas/WorkExperienceServerDataSchema.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';

export class WorkExperienceServerDataVerifier extends DataVerifier<WorkExperienceServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<WorkExperienceServerData> {
    return WorkExperienceServerDataSchema.parseAsync(data);
  }
}
