import { createContext } from 'react';

import { type DomRefsContextState } from '@/contexts/global/dom-refs/types/DomRefsContextState.ts';

export const DomRefsContext = createContext<DomRefsContextState | null>(null);
