import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { ListClientDataSchema } from '@/services/list/schemas/ListClientDataSchema.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';

export class ListClientDataVerifier extends DataVerifier<ListClientData> {
  protected async verifyOne(data: unknown): Promise<ListClientData> {
    return ListClientDataSchema.parseAsync(data);
  }
}
