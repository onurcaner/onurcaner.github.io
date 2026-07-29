import { type ScrollMotionValues } from 'motion/react';

import { type ScrollSpyTargetName } from '@/features/scroll-spy/_constants/ScrollSpyTargetName.ts';

export type ScrollSpyMotionValues = Record<
  ScrollSpyTargetName,
  ScrollMotionValues
>;
