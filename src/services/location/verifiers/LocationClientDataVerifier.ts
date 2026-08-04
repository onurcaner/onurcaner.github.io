import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { LocationClientDataSchema } from '../schemas/LocationClientDataSchema.ts';
import { type LocationClientData } from '../types/LocationClientData.ts';

export class LocationClientDataVerifier extends DataVerifier<LocationClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<LocationClientData> {
    return LocationClientDataSchema.parseAsync(data);
  }
}
