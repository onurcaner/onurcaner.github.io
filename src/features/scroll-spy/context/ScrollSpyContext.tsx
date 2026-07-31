import { createContext } from 'react';

import { type ScrollSpyContextState } from '@/features/scroll-spy/_types/ScrollSpyContextState.ts';

export const ScrollSpyContext = createContext<ScrollSpyContextState | null>(
  null,
);
