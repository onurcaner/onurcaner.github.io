import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { DeveloperServerDataSchema } from '../schemas/DeveloperServerDataSchema.ts';
import { type DeveloperServerData } from '../types/DeveloperServerData.ts';

export class DeveloperServerDataVerifier extends DataVerifier<DeveloperServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<DeveloperServerData> {
    return DeveloperServerDataSchema.parseAsync(data);
  }
}
