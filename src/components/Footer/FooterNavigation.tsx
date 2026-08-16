import { type ReactElement } from 'react';

import { SectionName } from '@/constants/SectionName.ts';

import { FooterNavigationItem } from './FooterNavigationItem.tsx';

export function FooterNavigation(): ReactElement {
  return (
    <nav>
      <ul className="grid gap-y-0 text-right">
        <FooterNavigationItem itemIndex={0} sectionName={SectionName.Skills}>
          Skills
        </FooterNavigationItem>
        <FooterNavigationItem itemIndex={1} sectionName={SectionName.Skills}>
          Education
        </FooterNavigationItem>
        <FooterNavigationItem itemIndex={2} sectionName={SectionName.Skills}>
          Experience
        </FooterNavigationItem>
      </ul>
    </nav>
  );
}
