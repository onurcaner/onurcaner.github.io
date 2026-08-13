import { ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatrixCreators } from '@/features/theme/_types/RGBLedIndicesMatrixCreators.ts';
import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';
import { BasicRGBLedIndicesMatrixCreator } from '@/features/theme/utils/BasicRGBLedIndicesMatrixCreator.ts';

import { TestThemeRGBControllerConfig } from './TestThemeRGBControllerConfig.ts';

enum Option {
  BoundaryIndex = 288,
}

export class TestThemeThemeControllerConfig implements ThemeControllerConfig {
  public themeName = ThemeName.Test;
  public themeSharpness = ThemeSharpness.Neutral;
  public rgbControllerConfig = new TestThemeRGBControllerConfig();
  public rgbLedIndicesMatrixCreators: RGBLedIndicesMatrixCreators = {
    headerBorderBlock: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 96 }).map((_, i) => i)],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),

    developerName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1, 2, 3, 4, 5]],
      selfLength: 6,
      groupLength: 14,
      boundaryIndex: Option.BoundaryIndex,
    }),
    developerJobTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[6, 7, 8, 9, 10, 11, 12, 13]],
      selfLength: 8,
      groupLength: 14,
      boundaryIndex: Option.BoundaryIndex,
    }),

    heroSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 48) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 96,
      groupLength: 192,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map(
          (_, i) => (i + 96) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 144) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 192) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 144,
      groupLength: 192,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionBorderBottom: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 96 }).map(
          (_, i) => (i % 96) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),

    sectionHeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1]],
      selfLength: 2,
      groupLength: 72,
      boundaryIndex: Option.BoundaryIndex,
    }),
    sectionHeadingTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 34 }).map((_, i) => i + 2)],
      selfLength: 34,
      groupLength: 36,
      boundaryIndex: Option.BoundaryIndex,
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
      boundaryIndex: Option.BoundaryIndex,
    }),
    skillIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[9, 10, 11, 12, 13, 14]],
      selfLength: 6,
      groupLength: 24,
      boundaryIndex: Option.BoundaryIndex,
    }),
    skillLabel: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[9, 10, 11, 12, 13, 14]],
      selfLength: 6,
      groupLength: 24,
      boundaryIndex: Option.BoundaryIndex,
    }),

    educationSlashWorkExperienceTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 24 }).map((_, i) => i)],
      selfLength: 24,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationProviderSlashCompanyName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 24 }).map((_, i) => 24 + i)],
      selfLength: 24,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationSlashWorkExperienceDateRange: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 12 }).map((_, i) => 48 + i)],
      selfLength: 12,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationProviderSlashCompanyLocation: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 12 }).map((_, i) => 60 + i)],
      selfLength: 12,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationGradeSlashWorkExperienceLevel: new BasicRGBLedIndicesMatrixCreator(
      {
        templateMatrix: [Array.from({ length: 24 }).map((_, i) => 72 + i)],
        selfLength: 24,
        groupLength: 96,
        boundaryIndex: Option.BoundaryIndex,
      },
    ),

    educationSlashWorkExperienceDescriptionListTitle:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [Array.from({ length: 24 }).map((_, i) => i)],
        selfLength: 24,
        groupLength: 24,
        boundaryIndex: Option.BoundaryIndex,
      }),
    educationSlashWorkExperienceDescriptionListItemIcon:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [[0]],
        selfLength: 1,
        groupLength: 24,
        boundaryIndex: Option.BoundaryIndex,
      }),
    educationSlashWorkExperienceDescriptionListItemText:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [Array.from({ length: 23 }).map((_, i) => 1 + i)],
        selfLength: 23,
        groupLength: 24,
        boundaryIndex: Option.BoundaryIndex,
      }),

    callToActionSectionBorderBlock: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [Array.from({ length: 96 }).map((_, i) => i)],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),
    callToActionSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 48) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 96,
      groupLength: 192,
      boundaryIndex: Option.BoundaryIndex,
    }),
    callToActionSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map(
          (_, i) => (i + 96) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 144) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 192) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 144,
      groupLength: 192,
      boundaryIndex: Option.BoundaryIndex,
    }),
  };
}
