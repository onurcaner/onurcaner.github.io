import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { CallToActionContentServerDataSchema } from '@/services/call-to-action-content/schemas/CallToActionContentServerDataSchema.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export class CallToActionContentServerDataVerifier extends DataVerifier<CallToActionContentServerData> {
  protected async verifyOne(
    data: unknown,
  ): Promise<CallToActionContentServerData> {
    return await CallToActionContentServerDataSchema.parseAsync(data);
  }
}
