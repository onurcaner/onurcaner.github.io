import type { RefObject } from 'react';

export interface DomRefsContextState {
  headerRef: RefObject<HTMLElement | null>;
  heroSectionRef: RefObject<HTMLElement | null>;
}
