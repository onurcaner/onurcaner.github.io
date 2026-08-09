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
      templateMatrix: [
        Array.from({ length: 72 }).map((_, i) => i),
        Array.from({ length: 72 }).map((_, i) => i + 72),
      ],
      waterfallLength: 144,
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
      templateMatrix: [Array.from({ length: 72 }).map((_, i) => i)],
      waterfallLength: 72,
    }),
    heroSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      ],
      waterfallLength: 72,
    }),
    heroSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      ],
      waterfallLength: 72,
    }),

    sectionHeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1]],
      waterfallLength: 144,
    }),
    sectionHeadingTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[2, 3, 4, 5, 6, 7]],
      waterfallLength: 144,
    }),

    skillBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [3, 4, 5, 6, 7, 8, 9],
        [2, null, null, null, null, null, 10],
        [1, null, null, null, null, null, 11],
        [0, null, null, null, null, null, 12],
        [1, null, null, null, null, null, 11],
        [2, null, null, null, null, null, 10],
        [3, 4, 5, 6, 7, 8, 9],
      ],
      waterfallLength: 13,
    }),
    skillIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[5, 6, 7]],
      waterfallLength: 13,
    }),
    skillLabel: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[5, 6, 7]],
      waterfallLength: 13,
    }),

    educationSlashWorkExperienceTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
      waterfallLength: 12,
    }),
    educationProviderSlashCompanyName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]],
      waterfallLength: 12,
    }),
    educationSlashWorkExperienceDateRange: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[24, 25, 26, 27, 28, 29]],
      waterfallLength: 6,
    }),
    educationProviderSlashCompanyLocation: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[30, 31, 32, 33, 34, 35]],
      waterfallLength: 6,
    }),
    educationGradeSlashWorkExperienceLevel: new BasicRGBLedIndicesMatrixCreator(
      {
        templateMatrix: [[36, 37, 38, 39, 40, 41]],
        waterfallLength: 6,
      },
    ),
    educationSlashWorkExperienceDescriptionListTitle:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
        waterfallLength: 12,
      }),
    educationSlashWorkExperienceDescriptionListItemIcon:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [[0]],
        waterfallLength: 1,
      }),
    educationSlashWorkExperienceDescriptionListItemText:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
        waterfallLength: 11,
      }),
  };
}
