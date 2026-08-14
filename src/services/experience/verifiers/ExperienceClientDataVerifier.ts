import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { WorkExperienceClientDataSchema } from '../schemas/WorkExperienceClientDataSchema.ts';
import { type WorkExperienceClientData } from '../types/WorkExperienceClientData.ts';

export class WorkExperienceClientDataVerifier extends DataVerifier<WorkExperienceClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<WorkExperienceClientData> {
    return WorkExperienceClientDataSchema.parseAsync(data);
  }
}
