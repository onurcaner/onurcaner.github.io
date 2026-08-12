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
    headerBorderBlock: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 96 }).map((_, i) => i)],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: 144,
    }),

    developerName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1, 2, 3, 4, 5]],
      selfLength: 6,
      groupLength: 14,
      boundaryIndex: 144,
    }),
    developerJobTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[6, 7, 8, 9, 10, 11, 12, 13]],
      selfLength: 8,
      groupLength: 14,
      boundaryIndex: 144,
    }),

    heroSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i),
        Array.from({ length: 48 }).map((_, i) => i + 48),
      ],
      selfLength: 96,
      groupLength: 192,
      boundaryIndex: 144,
    }),
    heroSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i + 96),
        Array.from({ length: 48 }).map((_, i) => i + 144),
        Array.from({ length: 48 }).map((_, i) => i + 192),
      ],
      selfLength: 144,
      groupLength: 192,
      boundaryIndex: 144,
    }),
    heroSectionBorderBottom: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 96 }).map((_, i) => i)],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: 144,
    }),

    sectionHeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1]],
      selfLength: 2,
      groupLength: 72,
      boundaryIndex: 144,
    }),
    sectionHeadingTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 34 }).map((_, i) => i + 2)],
      selfLength: 34,
      groupLength: 36,
      boundaryIndex: 144,
    }),

    skillBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        [5, ...Array.from({ length: 10 }).map(() => null), 18],
        [4, ...Array.from({ length: 10 }).map(() => null), 19],
        [3, ...Array.from({ length: 10 }).map(() => null), 20],
        [2, ...Array.from({ length: 10 }).map(() => null), 21],
        [1, ...Array.from({ length: 10 }).map(() => null), 22],
        [0, ...Array.from({ length: 10 }).map(() => null), 23],
        [1, ...Array.from({ length: 10 }).map(() => null), 22],
        [2, ...Array.from({ length: 10 }).map(() => null), 21],
        [3, ...Array.from({ length: 10 }).map(() => null), 20],
        [4, ...Array.from({ length: 10 }).map(() => null), 19],
        [5, ...Array.from({ length: 10 }).map(() => null), 18],
        [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      ],
      selfLength: 24,
      groupLength: 24,
      boundaryIndex: 144,
    }),
    skillIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[9, 10, 11, 12, 13, 14]],
      selfLength: 6,
      groupLength: 24,
      boundaryIndex: 144,
    }),
    skillLabel: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[9, 10, 11, 12, 13, 14]],
      selfLength: 6,
      groupLength: 24,
      boundaryIndex: 144,
    }),

    educationSlashWorkExperienceTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 24 }).map((_, i) => i)],
      selfLength: 24,
      groupLength: 96,
      boundaryIndex: 144,
    }),
    educationProviderSlashCompanyName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 24 }).map((_, i) => 24 + i)],
      selfLength: 24,
      groupLength: 96,
      boundaryIndex: 144,
    }),
    educationSlashWorkExperienceDateRange: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 12 }).map((_, i) => 48 + i)],
      selfLength: 12,
      groupLength: 96,
      boundaryIndex: 144,
    }),
    educationProviderSlashCompanyLocation: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 12 }).map((_, i) => 60 + i)],
      selfLength: 12,
      groupLength: 96,
      boundaryIndex: 144,
    }),
    educationGradeSlashWorkExperienceLevel: new BasicRGBLedIndicesMatrixCreator(
      {
        templateMatrix: [Array.from({ length: 24 }).map((_, i) => 72 + i)],
        selfLength: 24,
        groupLength: 96,
        boundaryIndex: 144,
      },
    ),

    educationSlashWorkExperienceDescriptionListTitle:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [Array.from({ length: 24 }).map((_, i) => i)],
        selfLength: 24,
        groupLength: 24,
        boundaryIndex: 144,
      }),
    educationSlashWorkExperienceDescriptionListItemIcon:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [[0]],
        selfLength: 1,
        groupLength: 24,
        boundaryIndex: 144,
      }),
    educationSlashWorkExperienceDescriptionListItemText:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [Array.from({ length: 23 }).map((_, i) => 1 + i)],
        selfLength: 23,
        groupLength: 24,
        boundaryIndex: 144,
      }),

    callToActionSectionBorderBlock: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 96 }).map((_, i) => i)],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: 144,
    }),
    callToActionSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i),
        Array.from({ length: 48 }).map((_, i) => i + 48),
      ],
      selfLength: 96,
      groupLength: 192,
      boundaryIndex: 144,
    }),
    callToActionSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i + 96),
        Array.from({ length: 48 }).map((_, i) => i + 144),
        Array.from({ length: 48 }).map((_, i) => i + 192),
      ],
      selfLength: 144,
      groupLength: 192,
      boundaryIndex: 144,
    }),
  };
}
