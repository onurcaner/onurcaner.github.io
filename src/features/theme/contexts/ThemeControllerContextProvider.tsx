import { type ReactElement, type ReactNode, useState } from 'react';

import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';
import { ThemeControllerContext } from '@/features/theme/contexts/ThemeControllerContext.ts';
import { TestThemeThemeControllerConfig } from '@/features/theme/themes/TestThemeThemeControllerConfig.ts';

export function ThemeControllerContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [themeControllerConfig, setThemeControllerConfig] =
    useState<ThemeControllerConfig>(() => new TestThemeThemeControllerConfig());

  const changeThemeControllerConfig = (
    newConfig: ThemeControllerConfig,
  ): void => {
    setThemeControllerConfig(newConfig);
  };

  return (
    <ThemeControllerContext
      value={{
        themeName: themeControllerConfig.themeName,
        themeSharpness: themeControllerConfig.themeSharpness,
        rgbControllerConfig: themeControllerConfig.rgbControllerConfig,
        rgbLedIndicesMatricesMap:
          themeControllerConfig.rgbLedIndicesMatricesMap,
        changeConfig: changeThemeControllerConfig,
      }}
    >
      {children}
    </ThemeControllerContext>
  );
}
