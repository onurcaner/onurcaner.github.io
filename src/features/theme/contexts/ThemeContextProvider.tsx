import { type ReactElement, type ReactNode, useState } from 'react';

import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';
import type { ThemeControllerState } from '@/features/theme/_types/ThemeControllerState.ts';
import { ThemeContext } from '@/features/theme/contexts/ThemeContext.tsx';
import { TestThemeThemeControllerConfig } from '@/styling/themes/TestThemeThemeControllerConfig.ts';

export function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [themeControllerState, setThemeControllerState] =
    useState<ThemeControllerState>({
      config: new TestThemeThemeControllerConfig(),
    });

  const changeThemeControllerConfig = (
    newConfig: ThemeControllerConfig,
  ): void => {
    setThemeControllerState((state) => ({ ...state, config: newConfig }));
  };

  return (
    <ThemeContext
      value={{
        themeName: themeControllerState.config.themeName,
        themeSharpness: themeControllerState.config.themeSharpness,
        rgbControllerConfig: themeControllerState.config.rgbControllerConfig,
        rgbLedIndicesMatrixGenerators:
          themeControllerState.config.rgbLedIndicesMatrixGenerators,
        changeConfig: changeThemeControllerConfig,
      }}
    >
      {children}
    </ThemeContext>
  );
}
