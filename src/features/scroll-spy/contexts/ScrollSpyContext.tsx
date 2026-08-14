import { createContext } from 'react';

import { type ScrollSpyContextState } from '../_types/ScrollSpyContextState.ts';

export const ScrollSpyContext = createContext<ScrollSpyContextState | null>(
  null,
);
