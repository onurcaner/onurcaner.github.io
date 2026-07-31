import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';
import { type ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { type ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatrixGenerators } from '@/features/theme/_types/RGBLedIndicesMatrixGenerators.ts';

export interface ThemeContextState {
  themeName: ThemeName; /* For display purposes */
  themeSharpness: ThemeSharpness; /* For selecting icons */
  rgbControllerConfig: RGBControllerConfig; /* Bridge needs it */
  rgbLedIndicesMatrixGenerators: RGBLedIndicesMatrixGenerators;
}
