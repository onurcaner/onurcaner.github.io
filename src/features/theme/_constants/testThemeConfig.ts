import { testRGBControllerConfig } from '@/features/rgb/_constants/testRGBControllerConfig.ts';
import { ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';

export const testThemeConfig: ThemeControllerConfig = {
  themeName: ThemeName.Test,
  themeSharpness: ThemeSharpness.Neutral,
  rgbControllerConfig: testRGBControllerConfig,
  rgbLedIndicesMatricesMap: {
    header: {
      generate: () => [
        [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23,
        ],
      ],
    },
    developerName: { generate: () => [[0, 1, 2, 3, 4, 5]] },
  },
};
