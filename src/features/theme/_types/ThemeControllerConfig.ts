import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { type ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatricesMap } from '@/features/theme/_types/RGBLedIndicesMatricesMap.ts';

export interface ThemeControllerConfig {
  themeName: ThemeName; /* Rainbow ?? */
  themeSharpness: ThemeSharpness;
  rgbControllerConfig: RGBControllerConfig;
  rgbLedIndicesMatricesMap: RGBLedIndicesMatricesMap;
}
