import { type ThemeControllerConfig } from './ThemeControllerConfig.ts';

export interface ThemeContextActions {
  changeConfig: (newConfig: ThemeControllerConfig) => void;
}
