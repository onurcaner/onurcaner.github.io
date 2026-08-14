import { useMotionValueEvent } from 'motion/react';
import { type ReactElement } from 'react';

import { Footer } from '@/components/Footer.tsx';
import { Header } from '@/components/Header/Header.tsx';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';
import { CallToActionSection } from '@/sections/CallToActionSection/CallToActionSection.tsx';
import { EducationSection } from '@/sections/EducationSection/EducationSection.tsx';
import { ExperienceSection } from '@/sections/ExperienceSection/ExperienceSection.tsx';
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
        <ExperienceSection />
      </SectionsLayout>
      <CallToActionSection />
      <Footer />
    </>
  );
}
