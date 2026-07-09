import { createContext } from 'react';

import type { RGBControllerConfig } from '@/contexts/global/rgb-controller/RGBControllerConfig.ts';
import { type RGBLedState } from '@/contexts/global/rgb-controller/RGBLedState.ts';

export const RGBControllerContext = createContext<{
  normalRGBLedStates: RGBLedState[];
  alternativeRGBLedStates: RGBLedState[];
  reInitialize: (newConfig: RGBControllerConfig) => void;
} | null>(null);
