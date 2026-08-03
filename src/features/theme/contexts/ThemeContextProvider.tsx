import { type ReactElement, type ReactNode, useState } from 'react';

import { TestThemeThemeControllerConfig } from '@/styling/themes/TestThemeThemeControllerConfig.ts';

import { type ThemeControllerConfig } from '../_types/ThemeControllerConfig.ts';
import { type ThemeControllerState } from '../_types/ThemeControllerState.ts';

import { ThemeContext } from './ThemeContext.tsx';

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
