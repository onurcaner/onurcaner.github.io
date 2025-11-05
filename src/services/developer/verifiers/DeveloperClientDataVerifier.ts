import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { DeveloperClientDataSchema } from '@/services/developer/schemas/DeveloperClientDataSchema.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';

export class DeveloperClientDataVerifier extends DataVerifier<DeveloperClientData> {
  protected async verifyOne(data: unknown): Promise<DeveloperClientData> {
    return DeveloperClientDataSchema.parseAsync(data);
  }
}
