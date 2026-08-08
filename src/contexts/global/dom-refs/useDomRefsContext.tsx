import { useContext } from 'react';

import { DomRefsContext } from './DomRefsContext.tsx';
import { type _DomRefsContextState } from './_DomRefsContextState.ts';

export function useDomRefsContext(): _DomRefsContextState {
  const context = useContext(DomRefsContext);
  if (!context) {
    throw new Error(
      'useDomRefsContext() is called outside of <DomRefsContextProvider>',
    );
  }

  return context;
}
