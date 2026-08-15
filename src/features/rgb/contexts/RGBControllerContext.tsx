import { createContext } from 'react';

import { type RGBControllerContextState } from '../_types/RGBControllerContextState.ts';

export const RGBControllerContext =
  createContext<RGBControllerContextState | null>(null);
