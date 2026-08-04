import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { CallToActionContentServerDataSchema } from '../schemas/CallToActionContentServerDataSchema.ts';
import { type CallToActionContentServerData } from '../types/CallToActionContentServerData.ts';

export class CallToActionContentServerDataVerifier extends DataVerifier<CallToActionContentServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<CallToActionContentServerData> {
    return CallToActionContentServerDataSchema.parseAsync(data);
  }
}
