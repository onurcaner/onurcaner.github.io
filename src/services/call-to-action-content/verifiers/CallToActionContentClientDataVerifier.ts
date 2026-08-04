import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { CallToActionContentClientDataSchema } from '../schemas/CallToActionContentClientDataSchema.ts';
import { type CallToActionContentClientData } from '../types/CallToActionContentClientData.ts';

export class CallToActionContentClientDataVerifier extends DataVerifier<CallToActionContentClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<CallToActionContentClientData> {
    return CallToActionContentClientDataSchema.parseAsync(data);
  }
}
