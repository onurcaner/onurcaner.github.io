import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { ExternalLinkServerDataSchema } from '../schemas/ExternalLinkServerDataSchema.ts';
import { type ExternalLinkServerData } from '../types/ExternalLinkServerData.ts';

export class ExternalLinkServerDataVerifier extends DataVerifier<ExternalLinkServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<ExternalLinkServerData> {
    return ExternalLinkServerDataSchema.parseAsync(data);
  }
}
