import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { CallToActionContentClientDataSchema } from '@/services/call-to-action-content/schemas/CallToActionContentClientDataSchema.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';

export class CallToActionContentClientDataVerifier extends DataVerifier<CallToActionContentClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<CallToActionContentClientData> {
    return await CallToActionContentClientDataSchema.parseAsync(data);
  }
}
