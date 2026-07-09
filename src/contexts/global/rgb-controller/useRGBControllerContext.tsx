import { useContext } from 'react';

import { RGBControllerContext } from '@/contexts/global/rgb-controller/RGBControllerContext.tsx';

export function useRGBControllerContext() {
  const context = useContext(RGBControllerContext);
  if (!context) {
    throw new Error(
      'useRGBControllerContext() is called outside of <RGBControllerContextProvider>',
    );
  }

  return context;
}
