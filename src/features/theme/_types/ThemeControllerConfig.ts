import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type RGBLedIndicesMatrixCreators } from '@/features/theme/_types/RGBLedIndicesMatrixCreators.ts';

import { type ThemeName } from '../_constants/ThemeName.ts';
import { type ThemeSharpness } from '../_constants/ThemeSharpness.ts';

export interface ThemeControllerConfig {
  themeName: ThemeName; /* Rainbow ?? */
  themeSharpness: ThemeSharpness;
  rgbControllerConfig: RGBControllerConfig;
  rgbLedIndicesMatrixCreators: RGBLedIndicesMatrixCreators;
}
