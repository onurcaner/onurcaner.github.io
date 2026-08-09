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
    searchParams.set(key, newValue);
    if (searchParams.get(key) === defaultValue) {
      searchParams.delete(key);
    }

    setSearchParams(searchParams, { replace });
  };

  return [searchValue, changeValue] as const;
}
