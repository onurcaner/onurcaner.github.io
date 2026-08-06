import { LinearMatrixDirection } from '@/features/rgb/_types/LinearMatrixDirection.ts';
import { LinearRGBLedIndicesMatrixGenerator } from '@/features/rgb/utils/matrix-generators/LinearRGBLedIndicesMatrixGenerator.ts';
import { ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatrixGenerators } from '@/features/theme/_types/RGBLedIndicesMatrixGenerators.ts';
import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';

import { TestThemeRGBControllerConfig } from './TestThemeRGBControllerConfig.ts';

export class TestThemeThemeControllerConfig implements ThemeControllerConfig {
  public themeName = ThemeName.Test;
  public themeSharpness = ThemeSharpness.Neutral;
  public rgbControllerConfig = new TestThemeRGBControllerConfig();
  public rgbLedIndicesMatrixGenerators: RGBLedIndicesMatrixGenerators = {
    headerBorder: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 72,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    developerName: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 6,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    developerJobTitle: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 6,
      length: 6,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),

    heroSectionBorder: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 72,
      length: 72,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    heroSectionTitle: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 36,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    heroSectionDescription: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 36,
      length: 36,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),

    skillsSectionHeading: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 8,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    skillBorder: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 4,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    skillIcon: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 4,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
    skillLabel: new LinearRGBLedIndicesMatrixGenerator({
      startIndex: 0,
      length: 4,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
  };
}
