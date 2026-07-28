import { type RefObject, createContext } from 'react';

export const DomRefsContext = createContext<{
  headerRef: RefObject<HTMLElement | null>;
  heroSectionRef: RefObject<HTMLElement | null>;
} | null>(null);
