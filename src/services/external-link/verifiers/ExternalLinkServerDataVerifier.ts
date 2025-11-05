import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { ExternalLinkServerDataSchema } from '@/services/external-link/schemas/ExternalLinkServerDataSchema.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export class ExternalLinkServerDataVerifier extends DataVerifier<ExternalLinkServerData> {
  protected async verifyOne(data: unknown): Promise<ExternalLinkServerData> {
    return ExternalLinkServerDataSchema.parseAsync(data);
  }
}
