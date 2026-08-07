import { type RGBControllerConfig } from '@/features/rgb/_types/RGBControllerConfig.ts';

import { type ThemeName } from '../_constants/ThemeName.ts';
import { type ThemeSharpness } from '../_constants/ThemeSharpness.ts';

import { type RGBLedIndicesMatrixCreators } from './RGBLedIndicesMatrixCreators.ts';

export interface ThemeContextState {
  themeName: ThemeName; /* For display purposes */
  themeSharpness: ThemeSharpness; /* For selecting icons */
  rgbControllerConfig: RGBControllerConfig; /* Bridge needs it */
  rgbLedIndicesMatrixCreators: RGBLedIndicesMatrixCreators;
}
