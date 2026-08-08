import { useContext } from 'react';

import { HoverContext } from './HoverContext.tsx';
import { type _HoverContextActions } from './_HoverContextActions.ts';
import { type _HoverContextState } from './_HoverContextState.ts';

export function useHoverContext(): _HoverContextState & _HoverContextActions {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error(
      'useHoverContext() is called outside of <HoverContextProvider>',
    );
  }

  return context;
}
