import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { DeveloperServerDataSchema } from '@/services/developer/schemas/DeveloperServerDataSchema.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';

export class DeveloperServerDataVerifier extends DataVerifier<DeveloperServerData> {
  protected async verifyOne(data: unknown): Promise<DeveloperServerData> {
    return DeveloperServerDataSchema.parseAsync(data);
  }
}
