import { createContext } from 'react';

import { type DomRefsContextState } from '../types/DomRefsContextState.ts';

export const DomRefsContext = createContext<DomRefsContextState | null>(null);
