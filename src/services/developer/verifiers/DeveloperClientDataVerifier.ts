import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { DeveloperClientDataSchema } from '../schemas/DeveloperClientDataSchema.ts';
import { type DeveloperClientData } from '../types/DeveloperClientData.ts';

export class DeveloperClientDataVerifier extends DataVerifier<DeveloperClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<DeveloperClientData> {
    return DeveloperClientDataSchema.parseAsync(data);
  }
}
