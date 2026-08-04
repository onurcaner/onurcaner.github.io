import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { ListServerDataSchema } from '../schemas/ListServerDataSchema.ts';
import { type ListServerData } from '../types/ListServerData.ts';

export class ListServerDataVerifier extends DataVerifier<ListServerData> {
  protected override async _verifyOne(data: unknown): Promise<ListServerData> {
    return ListServerDataSchema.parseAsync(data);
  }
}
