import { DataVerifier } from '../../_verifiers/DataVerifier.ts';

import { LocationServerDataSchema } from '../schemas/LocationServerDataSchema.ts';
import { type LocationServerData } from '../types/LocationServerData.ts';

export class LocationServerDataVerifier extends DataVerifier<LocationServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<LocationServerData> {
    return LocationServerDataSchema.parseAsync(data);
  }
}
