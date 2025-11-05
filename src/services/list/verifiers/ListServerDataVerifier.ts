import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { ListServerDataSchema } from '@/services/list/schemas/ListServerDataSchema.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export class ListServerDataVerifier extends DataVerifier<ListServerData> {
  protected async verifyOne(data: unknown): Promise<ListServerData> {
    return ListServerDataSchema.parseAsync(data);
  }
}
