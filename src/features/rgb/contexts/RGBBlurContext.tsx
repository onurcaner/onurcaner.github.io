import { createContext } from 'react';

export const RGBBlurContext = createContext<{
  length: number;
  recordBoxDimensions: (dimensions: {
    canIgnore: boolean;
    width: number;
    height: number;
  }) => void;
} | null>(null);
