import { type ReactElement, type ReactNode, useMemo, useState } from 'react';

import { RGBBlurContext } from '@/features/rgb/contexts/RGBBlurContext.tsx';

export function RGBBlurContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  // Hooks - Local State
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // Hooks - Derived State
  const length = useMemo(() => Math.min(width, height), [height, width]);

  return (
    <RGBBlurContext
      value={{
        length: length,
        recordBoxDimensions: ({ canIgnore, height, width }) => {
          if (canIgnore) return;
          setWidth(width);
          setHeight(height);
        },
      }}
    >
      {children}
    </RGBBlurContext>
  );
}
