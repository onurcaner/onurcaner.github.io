import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { ExternalLinkClientDataSchema } from '../schemas/ExternalLinkClientDataSchema.ts';
import { type ExternalLinkClientData } from '../types/ExternalLinkClientData.ts';

export class ExternalLinkClientDataVerifier extends DataVerifier<ExternalLinkClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<ExternalLinkClientData> {
    return ExternalLinkClientDataSchema.parseAsync(data);
  }
}
