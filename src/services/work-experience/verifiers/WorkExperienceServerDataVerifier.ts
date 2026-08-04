import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { WorkExperienceServerDataSchema } from '../schemas/WorkExperienceServerDataSchema.ts';
import { type WorkExperienceServerData } from '../types/WorkExperienceServerData.ts';

export class WorkExperienceServerDataVerifier extends DataVerifier<WorkExperienceServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<WorkExperienceServerData> {
    return WorkExperienceServerDataSchema.parseAsync(data);
  }
}
