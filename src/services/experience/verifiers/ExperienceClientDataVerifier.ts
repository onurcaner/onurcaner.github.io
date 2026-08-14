import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { ExperienceClientDataSchema } from '../schemas/ExperienceClientDataSchema.ts';
import { type ExperienceClientData } from '../types/ExperienceClientData.ts';

export class ExperienceClientDataVerifier extends DataVerifier<ExperienceClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<ExperienceClientData> {
    return ExperienceClientDataSchema.parseAsync(data);
  }
}
