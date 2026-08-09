import {
  type CSSProperties,
  type RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

export function useRectSize(
  ref: RefObject<HTMLElement | null>,
): Pick<CSSProperties, 'width' | 'height'> {
  const [width, setWidth] = useState<CSSProperties['width']>(undefined);
  const [height, setHeight] = useState<CSSProperties['height']>(undefined);

  const refreshStates = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setWidth(rect.width);
    setHeight(rect.height);
  }, [ref]);

  useEffect(refreshStates, [refreshStates]);

  useEffect(() => {
    const handleResize = refreshStates;
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [refreshStates]);

  return { width, height };
}
