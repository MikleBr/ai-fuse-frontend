// Зачатки мультиязычности

import { useCallback } from "react";

type TranslationConfig = {
  ru: Record<string, string>;
  en: Record<string, string>;
  // Пока похуй на остальные языки
};

// Такой конфиг имеет next-i18n. Потом добавлю
const globalConfig: TranslationConfig = {
  ru: {},
  en: {},
};

export function useTranslation(config?: TranslationConfig) {
  const currentLang: 'ru' | 'en' = "ru"; // Это потом доделаю когда либу подсосем
  const t = useCallback(
    (key: string) =>
      config?.[currentLang]?.[key] || globalConfig?.[currentLang]?.[key] || key,
    [config, currentLang]
  );

  return {
    t,
    // Тут еще прокинуть нужно global конфиг от i18n
  };
}
