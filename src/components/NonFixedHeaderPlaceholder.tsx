import { type ReactElement } from 'react';

import { useElementsRefContext } from '@/contexts/global/ref/useElementsRefContext.tsx';
import { useRectSize } from '@/hooks/useRectSize.tsx';

export function NonFixedHeaderPlaceholder(): ReactElement {
  const { headerRef } = useElementsRefContext();

  const { height: headerHeight } = useRectSize(headerRef);

  return <div style={{ height: headerHeight }} />;
}
