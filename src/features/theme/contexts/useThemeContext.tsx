import { useContext } from 'react';

import { type ThemeContextActions } from '../_types/ThemeContextActions.ts';
import { type ThemeContextState } from '../_types/ThemeContextState.ts';

import { ThemeContext } from './ThemeContext.tsx';

export function useThemeContext(): ThemeContextState & ThemeContextActions {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext() is called outside of <ThemeContextProvider>',
    );
  }

  return context;
}
