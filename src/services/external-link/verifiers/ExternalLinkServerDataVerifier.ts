import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { ExternalLinkServerDataSchema } from '@/services/external-link/schemas/ExternalLinkServerDataSchema.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export class ExternalLinkServerDataVerifier extends DataVerifier<ExternalLinkServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<ExternalLinkServerData> {
    return ExternalLinkServerDataSchema.parseAsync(data);
  }
}
