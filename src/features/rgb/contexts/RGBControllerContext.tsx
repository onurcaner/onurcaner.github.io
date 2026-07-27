import { createContext } from 'react';

import { type RGBControllerContextActions } from '@/features/rgb/_types/RGBControllerContextActions.ts';

export const RGBControllerContext =
  createContext<RGBControllerContextActions | null>(null);
