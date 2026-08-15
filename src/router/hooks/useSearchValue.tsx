import { useSearchParams } from 'react-router';

export function useSearchValue<TValue extends string>({
  key,
  defaultValue,
  replace = false,
}: {
  key: string;
  defaultValue: TValue;
  replace?: boolean;
}): [TValue, (newValue: TValue) => void] {
  // Hooks - Elevated State
  const [searchParams, setSearchParams] = useSearchParams();

  // Derived States and Actions
  const searchValue = (searchParams.get(key) ?? defaultValue) as TValue;
  const changeValue = (newValue: TValue): void => {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set(key, newValue);
    if (nextSearchParams.get(key) === defaultValue) {
      nextSearchParams.delete(key);
    }

    setSearchParams(nextSearchParams, { replace });
  };

  return [searchValue, changeValue] as const;
}
