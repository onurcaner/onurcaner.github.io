import { type MotionValue } from 'motion';

import { SectionName } from '@/constants/SectionName.ts';

import { ScrollYDirection } from '../_constants/ScrollYDirection.ts';

export interface ScrollSpyContextState {
  pageScrollYMotionValue: MotionValue<number>;
  pageScrollYProgressMotionValue: MotionValue<number>;
  pageScrollYDirectionMotionValue: MotionValue<ScrollYDirection>;

  heroSectionScrollYProgressMotionValue: MotionValue<number>;
  skillsSectionScrollYProgressMotionValue: MotionValue<number>;
  educationSectionScrollYProgressMotionValue: MotionValue<number>;
  experienceSectionScrollYProgressMotionValue: MotionValue<number>;
  callToActionSectionScrollYProgressMotionValue: MotionValue<number>;

  activeSectionNameMotionValue: MotionValue<SectionName | null>;
}
