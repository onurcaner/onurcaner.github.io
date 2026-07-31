import { createContext } from 'react';

import { type ThemeContextActions } from '@/features/theme/_types/ThemeContextActions.ts';
import { type ThemeContextState } from '@/features/theme/_types/ThemeContextState.ts';

export const ThemeContext = createContext<
  (ThemeContextState & ThemeContextActions) | null
>(null);
