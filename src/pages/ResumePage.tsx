import { type ReactElement } from 'react';

import { Header } from '@/components/Header/Header.tsx';
import { EducationSection } from '@/sections/EducationSection/EducationSection.tsx';
import { HeroSection } from '@/sections/HeroSection/HeroSection.tsx';
import { SkillsSection } from '@/sections/SkillsSection/SkillsSection.tsx';
import { SectionsLayout } from '@/sections/_components/SectionsLayout.tsx';

export function ResumePage(): ReactElement {
  return (
    <>
      <Header />
      <HeroSection />
      <SectionsLayout>
        <SkillsSection />
        <EducationSection />

        <div className="h-[200vh]" />
      </SectionsLayout>
    </>
  );
}
