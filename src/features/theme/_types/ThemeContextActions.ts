import { type ThemeControllerConfig } from './ThemeControllerConfig.ts';

export interface ThemeContextActions {
  changeThemeControllerConfig: (newConfig: ThemeControllerConfig) => void;
}
