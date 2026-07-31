import { useContext } from 'react';

import { type ScrollSpyContextState } from '@/features/scroll-spy/_types/ScrollSpyContextState.ts';
import { ScrollSpyContext } from '@/features/scroll-spy/context/ScrollSpyContext.tsx';

export function useScrollSpyContext(): ScrollSpyContextState {
  const context = useContext(ScrollSpyContext);
  if (!context) {
    throw new Error(
      'useScrollSpyContext() is called outside of <ScrollSpyContextProvider>',
    );
  }

  return context;
}
