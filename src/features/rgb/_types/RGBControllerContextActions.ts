import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';

export interface RGBControllerContextActions {
  changeConfig: (newConfig: RGBControllerConfig) => void;
}
