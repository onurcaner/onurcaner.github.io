import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';
import { ExternalLinkClientDataSchema } from '@/services/external-link/schemas/ExternalLinkClientDataSchema.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';

export class ExternalLinkClientDataVerifier extends DataVerifier<ExternalLinkClientData> {
  protected async verifyOne(data: unknown): Promise<ExternalLinkClientData> {
    return ExternalLinkClientDataSchema.parseAsync(data);
  }
}
