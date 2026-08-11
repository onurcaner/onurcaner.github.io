import { useContext } from 'react';

import { RGBBlurContext } from './RGBBlurContext.tsx';

export function useRGBBlurContext() {
  const context = useContext(RGBBlurContext);
  if (!context) {
    throw new Error(
      'useRGBBlurContext() is called outside of <RGBBlurContextProvider>',
    );
  }

  return context;
}
