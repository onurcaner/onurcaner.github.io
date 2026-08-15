import { useContext } from 'react';

import { type RGBControllerContextState } from '../_types/RGBControllerContextState.ts';

import { RGBControllerContext } from './RGBControllerContext.tsx';

export function useRGBControllerContext(): RGBControllerContextState {
  const context = useContext(RGBControllerContext);
  if (!context) {
    throw new Error(
      'useRGBControllerContext() is called outside of <RGBControllerContextProvider>',
    );
  }

  return context;
}
