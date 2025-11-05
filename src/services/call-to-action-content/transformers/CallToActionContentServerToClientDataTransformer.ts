import { DataTransformer } from '@/services/_base/transformers/DataTransformer.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export class CallToActionContentServerToClientDataTransformer extends DataTransformer<
  CallToActionContentServerData,
  CallToActionContentClientData
> {
  protected async transformOne(
    data: CallToActionContentServerData,
  ): Promise<CallToActionContentClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      description: data.description,
    });
  }
}
