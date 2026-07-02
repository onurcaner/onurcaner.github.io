import { type RefObject, createContext } from 'react';

export const ElementsRefContext = createContext<{
  headerRef: RefObject<HTMLElement | null>;
  heroSectionRef: RefObject<HTMLElement | null>;
} | null>(null);
