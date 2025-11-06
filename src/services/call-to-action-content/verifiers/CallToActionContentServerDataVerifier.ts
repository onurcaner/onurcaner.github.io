import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { CallToActionContentServerDataSchema } from '@/services/call-to-action-content/schemas/CallToActionContentServerDataSchema.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export class CallToActionContentServerDataVerifier extends DataVerifier<CallToActionContentServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<CallToActionContentServerData> {
    return await CallToActionContentServerDataSchema.parseAsync(data);
  }
}
