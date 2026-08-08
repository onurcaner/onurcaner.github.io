import { createContext } from 'react';

import { type _DomRefsContextState } from './_DomRefsContextState.ts';

export const DomRefsContext = createContext<_DomRefsContextState | null>(null);
