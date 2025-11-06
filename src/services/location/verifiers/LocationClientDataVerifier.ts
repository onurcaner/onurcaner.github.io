import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';
import { LocationClientDataSchema } from '@/services/location/schemas/LocationClientDataSchema.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';

export class LocationClientDataVerifier extends DataVerifier<LocationClientData> {
  protected override async _verifyOne(
    data: unknown,
  ): Promise<LocationClientData> {
    return LocationClientDataSchema.parseAsync(data);
  }
}
