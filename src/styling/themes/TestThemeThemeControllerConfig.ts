import { LinearMatrixDirection } from '@/features/rgb/_types/LinearMatrixDirection.ts';
import { LinearRGBLedIndicesMatrixGenerator } from '@/features/rgb/utils/matrix-generators/LinearRGBLedIndicesMatrixGenerator.ts';
import { ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatrixCreators } from '@/features/theme/_types/RGBLedIndicesMatrixCreators.ts';
import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';
import { BasicRGBLedIndicesMatrixCreator } from '@/features/theme/utils/BasicRGBLedIndicesMatrixCreator.ts';

import { TestThemeRGBControllerConfig } from './TestThemeRGBControllerConfig.ts';

export class TestThemeThemeControllerConfig implements ThemeControllerConfig {
  public themeName = ThemeName.Test;
  public themeSharpness = ThemeSharpness.Neutral;
  public rgbControllerConfig = new TestThemeRGBControllerConfig();
  public rgbLedIndicesMatrixCreators: RGBLedIndicesMatrixCreators = {
    headerBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: new LinearRGBLedIndicesMatrixGenerator({
        startIndex: 0,
        length: 72,
        boundaryIndex: 144,
        stackSize: 1,
        direction: LinearMatrixDirection.ToRight,
      }).generate(),
      waterfallLength: 72,
    }),
    developerName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1, 2, 3, 4, 5, 6, 7]],
      waterfallLength: 8,
    }),
    developerJobTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[8, 9, 10, 11, 12, 13, 14, 15]],
      waterfallLength: 8,
    }),

    heroSectionBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: new LinearRGBLedIndicesMatrixGenerator({
        startIndex: 72,
        length: 72,
        boundaryIndex: 144,
        stackSize: 1,
        direction: LinearMatrixDirection.ToRight,
      }).generate(),
      waterfallLength: 72,
    }),
    heroSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      ],
      waterfallLength: 12,
    }),
    heroSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      ],
      waterfallLength: 12,
    }),

    skillsSectionHeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1]],
      waterfallLength: 8,
    }),
    skillsSectionHeadingText: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[2, 3, 4, 5, 6, 7]],
      waterfallLength: 8,
    }),
    skillBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [3, 4, 5, 6, 7, 8],
        [2, null, null, null, null, 9],
        [1, null, null, null, null, 10],
        [0, null, null, null, null, 11],
        [1, null, null, null, null, 10],
        [2, null, null, null, null, 9],
        [3, 4, 5, 6, 7, 8],
      ],
      waterfallLength: 12,
    }),
    skillIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[5, 6, 7, 8]],
      waterfallLength: 12,
    }),
    skillLabel: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[5, 6, 7, 8]],
      waterfallLength: 12,
    }),

    educationSectionHeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1]],
      waterfallLength: 8,
    }),
    educationSectionHeadingText: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[2, 3, 4, 5, 6, 7]],
      waterfallLength: 8,
    }),
  };
}
