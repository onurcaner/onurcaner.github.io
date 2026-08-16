import { ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatrixCreators } from '@/features/theme/_types/RGBLedIndicesMatrixCreators.ts';
import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';
import { BasicRGBLedIndicesMatrixCreator } from '@/features/theme/utils/BasicRGBLedIndicesMatrixCreator.ts';

import { TestThemeRGBControllerConfig } from './TestThemeRGBControllerConfig.ts';

enum Option {
  BoundaryIndex = 96,
}

export class TestThemeThemeControllerConfig implements ThemeControllerConfig {
  public themeName = ThemeName.Test;
  public themeSharpness = ThemeSharpness.Neutral;
  public rgbControllerConfig = new TestThemeRGBControllerConfig();
  public rgbLedIndicesMatrixCreators: RGBLedIndicesMatrixCreators = {
    headerBorderBlock: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 96 }).map((_, i) => i % Option.BoundaryIndex),
      ],
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
        Array.from({ length: 48 }).map((_, i) => i % Option.BoundaryIndex),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 48) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 96) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 144,
      groupLength: 336,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map(
          (_, i) => (i + 144) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 192) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 240) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 288) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 192,
      groupLength: 336,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionPrimaryButton: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 16 }).map(
          (_, i) => (i + 288) % Option.BoundaryIndex,
        ),
        Array.from({ length: 16 }).map(
          (_, i) => (i + 304) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 32,
      groupLength: 64,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionSecondaryButtonBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 16 }).map(
          (_, i) => (i + 320) % Option.BoundaryIndex,
        ),
        Array.from({ length: 16 }).map(
          (_, i) => (i + 336) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 32,
      groupLength: 64,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionSecondaryButtonLeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 2 }).map(
          (_, i) => (i + 322) % Option.BoundaryIndex,
        ),
        Array.from({ length: 2 }).map(
          (_, i) => (i + 338) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 2,
      groupLength: 64,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionSecondaryButtonLabel: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 8 }).map(
          (_, i) => (i + 324) % Option.BoundaryIndex,
        ),
        Array.from({ length: 8 }).map(
          (_, i) => (i + 340) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 8,
      groupLength: 64,
      boundaryIndex: Option.BoundaryIndex,
    }),
    heroSectionSecondaryButtonTrailingIcon: new BasicRGBLedIndicesMatrixCreator(
      {
        templateMatrix: [
          Array.from({ length: 2 }).map(
            (_, i) => (i + 332) % Option.BoundaryIndex,
          ),
          Array.from({ length: 2 }).map(
            (_, i) => (i + 348) % Option.BoundaryIndex,
          ),
        ],
        selfLength: 2,
        groupLength: 64,
        boundaryIndex: Option.BoundaryIndex,
      },
    ),

    heroSectionBorderBottom: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 96 }).map((_, i) => i % Option.BoundaryIndex),
      ],
      selfLength: 96,
      groupLength: 336,
      boundaryIndex: Option.BoundaryIndex,
    }),

    sectionHeadingIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[0, 1]],
      selfLength: 2,
      groupLength: 72,
      boundaryIndex: Option.BoundaryIndex,
    }),
    sectionHeadingTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 72 }).map(
          (_, i) => (i + 2) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 70,
      groupLength: 72,
      boundaryIndex: Option.BoundaryIndex,
    }),

    sectionSideNavigationBorder: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
        [77, ...Array.from({ length: 10 }).map(() => null), 90],
        [76, ...Array.from({ length: 10 }).map(() => null), 91],
        [75, ...Array.from({ length: 10 }).map(() => null), 92],
        [74, ...Array.from({ length: 10 }).map(() => null), 93],
        [73, ...Array.from({ length: 10 }).map(() => null), 94],
        [72, ...Array.from({ length: 10 }).map(() => null), 95],
        [73, ...Array.from({ length: 10 }).map(() => null), 94],
        [74, ...Array.from({ length: 10 }).map(() => null), 93],
        [75, ...Array.from({ length: 10 }).map(() => null), 92],
        [76, ...Array.from({ length: 10 }).map(() => null), 91],
        [77, ...Array.from({ length: 10 }).map(() => null), 90],
        [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
      ],
      selfLength: 24,
      groupLength: 24,
      boundaryIndex: Option.BoundaryIndex,
    }),
    sectionSideNavigationLinkIcon: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[81]],
      selfLength: 1,
      groupLength: 24,
      boundaryIndex: Option.BoundaryIndex,
    }),
    sectionSideNavigationLinkText: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[82, 83, 84, 85, 86]],
      selfLength: 5,
      groupLength: 24,
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

    educationSlashExperienceTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i % Option.BoundaryIndex),
      ],
      selfLength: 48,
      groupLength: 168,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationProviderSlashCompanyName: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map(
          (_, i) => (48 + i) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 48,
      groupLength: 168,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationSlashExperienceDateRange: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 24 }).map(
          (_, i) => (72 + i) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 24,
      groupLength: 168,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationProviderSlashCompanyLocation: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 24 }).map(
          (_, i) => (96 + i) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 24,
      groupLength: 168,
      boundaryIndex: Option.BoundaryIndex,
    }),
    educationGradeSlashExperienceLevel: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map(
          (_, i) => (120 + i) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 48,
      groupLength: 168,
      boundaryIndex: Option.BoundaryIndex,
    }),

    educationSlashExperienceDescriptionListTitle:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [
          Array.from({ length: 24 }).map((_, i) => i % Option.BoundaryIndex),
        ],
        selfLength: 24,
        groupLength: 24,
        boundaryIndex: Option.BoundaryIndex,
      }),
    educationSlashExperienceDescriptionListItemIcon:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [[0]],
        selfLength: 1,
        groupLength: 24,
        boundaryIndex: Option.BoundaryIndex,
      }),
    educationSlashExperienceDescriptionListItemText:
      new BasicRGBLedIndicesMatrixCreator({
        templateMatrix: [
          Array.from({ length: 23 }).map(
            (_, i) => (1 + i) % Option.BoundaryIndex,
          ),
        ],
        selfLength: 23,
        groupLength: 24,
        boundaryIndex: Option.BoundaryIndex,
      }),

    callToActionSectionBorderBlock: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 96 }).map((_, i) => i % Option.BoundaryIndex),
      ],
      selfLength: 96,
      groupLength: 96,
      boundaryIndex: Option.BoundaryIndex,
    }),
    callToActionSectionTitle: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map((_, i) => i % Option.BoundaryIndex),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 48) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 96) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 144,
      groupLength: 336,
      boundaryIndex: Option.BoundaryIndex,
    }),
    callToActionSectionDescription: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [
        Array.from({ length: 48 }).map(
          (_, i) => (i + 144) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 192) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 240) % Option.BoundaryIndex,
        ),
        Array.from({ length: 48 }).map(
          (_, i) => (i + 288) % Option.BoundaryIndex,
        ),
      ],
      selfLength: 192,
      groupLength: 336,
      boundaryIndex: Option.BoundaryIndex,
    }),

    footerNavigationLink: new BasicRGBLedIndicesMatrixCreator({
      templateMatrix: [[90, 91, 92, 93, 94, 95]],
      selfLength: 6,
      groupLength: 6,
      boundaryIndex: Option.BoundaryIndex,
    }),
  };
}
