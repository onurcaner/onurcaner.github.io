import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { LocationServerDataSchema } from '@/services/location/schemas/LocationServerDataSchema.ts';
import { type LocationServerData } from '@/services/location/types/LocationServerData.ts';

export class LocationServerDataVerifier extends DataVerifier<LocationServerData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<LocationServerData> {
    return LocationServerDataSchema.parseAsync(data);
  }
}
