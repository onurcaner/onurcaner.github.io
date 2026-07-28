import { createContext } from 'react';

import { type ThemeControllerContextActions } from '@/features/theme/_types/ThemeControllerContextActions.ts';
import { type ThemeControllerContextState } from '@/features/theme/_types/ThemeControllerContextState.ts';

export const ThemeControllerContext = createContext<
  (ThemeControllerContextState & ThemeControllerContextActions) | null
>(null);
