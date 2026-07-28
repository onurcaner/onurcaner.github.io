import { type ThemeControllerConfig } from '@/features/theme/_types/ThemeControllerConfig.ts';

export interface ThemeControllerContextActions {
  changeConfig: (newConfig: ThemeControllerConfig) => void;
}
