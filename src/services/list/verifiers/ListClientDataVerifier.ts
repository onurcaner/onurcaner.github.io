import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { ListClientDataSchema } from '@/services/list/schemas/ListClientDataSchema.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';

export class ListClientDataVerifier extends DataVerifier<ListClientData> {
  protected override async _verifyOne(data: unknown): Promise<ListClientData> {
    return ListClientDataSchema.parseAsync(data);
  }
}
