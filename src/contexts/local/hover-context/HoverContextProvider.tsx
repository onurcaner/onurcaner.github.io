import { type ReactElement, type ReactNode, useState } from 'react';

import { HoverContext } from './HoverContext.tsx';

export function HoverContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContext
      value={{
        isHovered: isHovered,

        setIsHovered: setIsHovered,
        onPointerEnter: () => {
          setIsHovered(true);
        },
        onPointerLeave: () => {
          setIsHovered(false);
        },
      }}
    >
      {children}
    </HoverContext>
  );
}
