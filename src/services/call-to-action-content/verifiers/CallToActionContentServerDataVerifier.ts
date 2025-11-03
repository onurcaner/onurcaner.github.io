import { type DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { CallToActionContentServerDataSchema } from '@/services/call-to-action-content/schemas/CallToActionContentServerDataSchema.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export class CallToActionContentServerDataVerifier
  implements DataVerifier<CallToActionContentServerData>
{
  public async verify(data: unknown): Promise<CallToActionContentServerData> {
    return await CallToActionContentServerDataSchema.parseAsync(data);
  }
}
