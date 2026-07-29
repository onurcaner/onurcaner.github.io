import { LinearMatrixDirection } from '@/features/rgb/_types/LinearMatrixDirection.ts';
import { LinearRGBLedIndicesMatrixGenerator } from '@/features/rgb/utils/matrix-generators/LinearRGBLedIndicesMatrixGenerator.ts';
import { ThemeName } from '@/features/theme/_constants/ThemeName.ts';
import { ThemeSharpness } from '@/features/theme/_constants/ThemeSharpness.ts';
import { type RGBLedIndicesMatricesMap } from '@/features/theme/_types/RGBLedIndicesMatricesMap.ts';
import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';
import { TestThemeRGBControllerConfig } from '@/styling/themes/TestThemeRGBControllerConfig.ts';

export class TestThemeThemeControllerConfig implements ThemeControllerConfig {
  public themeName = ThemeName.Test;
  public themeSharpness = ThemeSharpness.Neutral;
  public rgbControllerConfig = new TestThemeRGBControllerConfig();
  public rgbLedIndicesMatricesMap: RGBLedIndicesMatricesMap = {
    header: new LinearRGBLedIndicesMatrixGenerator({
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
      length: 8,
      boundaryIndex: 144,
      stackSize: 1,
      direction: LinearMatrixDirection.ToRight,
    }),
  };
}
