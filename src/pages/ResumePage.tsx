import { type ReactElement } from 'react';

import { Footer } from '@/components/Footer.tsx';
import { Header } from '@/components/Header/Header.tsx';
import { CallToActionSection } from '@/sections/CallToActionSection/CallToActionSection.tsx';
import { EducationSection } from '@/sections/EducationSection/EducationSection.tsx';
import { HeroSection } from '@/sections/HeroSection/HeroSection.tsx';
import { SkillsSection } from '@/sections/SkillsSection/SkillsSection.tsx';
import { WorkExperienceSection } from '@/sections/WorkExperienceSection/WorkExperienceSection.tsx';
import { SectionsLayout } from '@/sections/_components/SectionsLayout.tsx';

export function ResumePage(): ReactElement {
  return (
    <>
      <Header />
      <HeroSection />
      <SectionsLayout>
        <SkillsSection />
        <EducationSection />
        <WorkExperienceSection />
      </SectionsLayout>
      <CallToActionSection />
      <Footer />
    </>
  );
}
