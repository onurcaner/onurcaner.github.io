import { type ReactElement } from 'react';

import { Header } from '@/components/Header.tsx';
import { HeroSection } from '@/components/HeroSection.tsx';

export function ResumePage(): ReactElement {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="h-screen bg-red-200" />
    </>
  );
}
