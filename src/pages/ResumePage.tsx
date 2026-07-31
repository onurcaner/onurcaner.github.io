import { type ReactElement } from 'react';

import { Header } from '@/components/Header/Header.tsx';
import { HeroSection } from '@/components/HeroSection.tsx';

export function ResumePage(): ReactElement {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="h-[200vh] bg-red-200" />
    </>
  );
}
