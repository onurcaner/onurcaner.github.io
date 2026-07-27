import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';

export interface RGBControllerContextActions {
  changeRGBControllerConfig: (newConfig: RGBControllerConfig) => void;
}
