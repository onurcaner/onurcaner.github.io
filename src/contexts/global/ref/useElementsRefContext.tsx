import { useContext } from 'react';

import { ElementsRefContext } from '@/contexts/global/ref/ElementsRefContext.tsx';

export function useElementsRefContext() {
  const context = useContext(ElementsRefContext);
  if (!context) {
    throw new Error(
      'useElementsRefContext() is called outside of <ElementsRefContextProvider>',
    );
  }

  return context;
}
