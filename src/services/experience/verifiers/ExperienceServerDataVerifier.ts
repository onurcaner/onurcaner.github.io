import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { ExperienceServerDataSchema } from '../schemas/ExperienceServerDataSchema.ts';
import { type ExperienceServerData } from '../types/ExperienceServerData.ts';

export class ExperienceServerDataVerifier extends DataVerifier<ExperienceServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<ExperienceServerData> {
    return ExperienceServerDataSchema.parseAsync(data);
  }
}
