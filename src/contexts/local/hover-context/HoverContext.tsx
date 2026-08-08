import { createContext } from 'react';

import { type _HoverContextActions } from './_HoverContextActions.ts';
import { type _HoverContextState } from './_HoverContextState.ts';

export const HoverContext = createContext<
  (_HoverContextState & _HoverContextActions) | null
>(null);
