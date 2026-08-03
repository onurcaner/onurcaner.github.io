import { useContext } from 'react';

import { RGBControllerContext } from './RGBControllerContext.tsx';

export function useRGBControllerContext(): object {
  const context = useContext(RGBControllerContext);
  if (!context) {
    throw new Error(
      'useRGBControllerContext() is called outside of <RGBControllerContextProvider>',
    );
  }

  return context;
}
