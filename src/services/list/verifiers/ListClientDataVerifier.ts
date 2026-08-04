import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { ListClientDataSchema } from '../schemas/ListClientDataSchema.ts';
import { type ListClientData } from '../types/ListClientData.ts';

export class ListClientDataVerifier extends DataVerifier<ListClientData> {
  protected override async _verifyOne(data: unknown): Promise<ListClientData> {
    return ListClientDataSchema.parseAsync(data);
  }
}
