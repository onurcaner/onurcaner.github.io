import { type DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { CallToActionContentClientDataSchema } from '@/services/call-to-action-content/schemas/CallToActionContentClientDataSchema.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';

export class CallToActionContentClientDataVerifier
  implements DataVerifier<CallToActionContentClientData>
{
  public async verify(data: unknown): Promise<CallToActionContentClientData> {
    return await CallToActionContentClientDataSchema.parseAsync(data);
  }
}
