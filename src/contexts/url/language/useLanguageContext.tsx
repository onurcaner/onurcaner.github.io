import { LanguageSearchValue } from '@/router/constants/LanguageSearchValue.ts';
import { SearchKey } from '@/router/constants/SearchKey.ts';
import { useSearchValue } from '@/router/hooks/useSearchValue.tsx';

type LanguageContextHook = () => {
  language: LanguageSearchValue;
  changeLanguage: (newValue: LanguageSearchValue) => void;
};

export function useLanguageContext(): ReturnType<LanguageContextHook> {
  const [language, changeLanguage] = useSearchValue<LanguageSearchValue>({
    key: SearchKey.Language,
    defaultValue: LanguageSearchValue.English,
    replace: true,
  });

  return {
    language: language,
    changeLanguage: changeLanguage,
  };
}
