import { useContext } from 'react';

import { DomRefsContext } from '@/contexts/global/dom-refs/contexts/DomRefsContext.tsx';

export function useDomRefsContext() {
  const context = useContext(DomRefsContext);
  if (!context) {
    throw new Error(
      'useDomRefsContext() is called outside of <DomRefsContextProvider>',
    );
  }

  return context;
}
