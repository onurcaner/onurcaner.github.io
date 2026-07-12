import { createContext } from 'react';

import { type RGBControllerConfig } from '@/contexts/global/rgb-controller/RGBControllerConfig.ts';

export const RGBControllerContext = createContext<{
  changeRGBControllerConfig: (newConfig: RGBControllerConfig) => void;
} | null>(null);
