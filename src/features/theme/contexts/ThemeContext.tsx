import { createContext } from 'react';

import { type ThemeContextActions } from '../_types/ThemeContextActions.ts';
import { type ThemeContextState } from '../_types/ThemeContextState.ts';

export const ThemeContext = createContext<
  (ThemeContextState & ThemeContextActions) | null
>(null);
