import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useClientTranslation = () => {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Carregar idioma salvo apenas no cliente
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Durante SSR, usar valores padrão em português
  const safeT = (key: string, fallback?: string) => {
    if (!isClient && fallback) {
      return fallback;
    }
    return t(key);
  };

  return { t: safeT, i18n, isClient };
};