import React from 'react';
import { useTranslation } from 'react-i18next';

// Exemplo de como usar as traduções nos componentes
export const ExampleTranslatedComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.greeting')} {t('home.name')}</h1>
      <h2>{t('home.title')}</h2>
      <p>{t('home.description')}</p>
      <button>{t('home.contactButton')}</button>
      <button>{t('home.projectsButton')}</button>
    </div>
  );
};

// Para usar em qualquer componente:
// const { t } = useTranslation();
// <p>{t('navigation.home')}</p>
// <button>{t('common.submit')}</button>