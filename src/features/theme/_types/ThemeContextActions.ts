import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';

export interface ThemeContextActions {
  changeConfig: (newConfig: ThemeControllerConfig) => void;
}
