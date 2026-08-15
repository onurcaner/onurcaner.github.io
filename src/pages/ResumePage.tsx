import { type ReactElement } from 'react';

import { Footer } from '@/components/Footer.tsx';
import { Header } from '@/components/Header/Header.tsx';
import { CallToActionSection } from '@/sections/CallToActionSection/CallToActionSection.tsx';
import { EducationSection } from '@/sections/EducationSection/EducationSection.tsx';
import { ExperienceSection } from '@/sections/ExperienceSection/ExperienceSection.tsx';
import { HeroSection } from '@/sections/HeroSection/HeroSection.tsx';
import { SkillsSection } from '@/sections/SkillsSection/SkillsSection.tsx';
import { SectionsLayout } from '@/sections/_components/SectionsLayout.tsx';

export function ResumePage(): ReactElement {
  return (
    <>
      <p className="text-8 fixed top-1/2 left-1/2 z-100 mt-16 -translate-1/2 rounded-(--theme-border-radius) bg-(--theme-component-hero-section-title-text-color) px-4 py-2 text-(--theme-component-hero-section-background-color)">
        This page is still under development. The contents might be outdated.
      </p>

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
