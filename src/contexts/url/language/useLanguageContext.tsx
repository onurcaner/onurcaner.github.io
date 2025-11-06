import { LanguageSearchValue } from '@/router/constants/LanguageSearchValue.ts';
import { SearchKey } from '@/router/constants/SearchKey.ts';
import { useSearchValue } from '@/router/hooks/useSearchValue.tsx';

export function useLanguageContext() {
  const { value: language, changeValue: changeLanguage } =
    useSearchValue<LanguageSearchValue>({
      key: SearchKey.Language,
      defaultValue: LanguageSearchValue.English,
      replace: true,
    });

  return { language, changeLanguage } as const;
}
