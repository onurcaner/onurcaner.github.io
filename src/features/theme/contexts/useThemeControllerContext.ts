import { useContext } from 'react';

import { ThemeControllerContext } from '@/features/theme/contexts/ThemeControllerContext.ts';

export function useThemeControllerContext() {
  const context = useContext(ThemeControllerContext);
  if (!context) {
    throw new Error(
      'useThemeControllerContext() is called outside of <ThemeControllerContextProvider>',
    );
  }

  return context;
}
