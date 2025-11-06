import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { ExternalLinkClientDataSchema } from '@/services/external-link/schemas/ExternalLinkClientDataSchema.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';

export class ExternalLinkClientDataVerifier extends DataVerifier<ExternalLinkClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<ExternalLinkClientData> {
    return ExternalLinkClientDataSchema.parseAsync(data);
  }
}
