import React, { memo, useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import {
  LanguageSelector,
  LanguageButton,
  FlagIcon
} from './styles';

const languages = [
  { 
    code: 'pt', 
    country: 'BR',
    name: 'Português'
  },
  { 
    code: 'en', 
    country: 'US',
    name: 'English'
  }
];

const LanguageSelectorComponent = memo(() => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Carregar idioma salvo apenas após montagem
    const savedLanguage = localStorage.getItem('i18nextLng') || 'pt';
    setCurrentLanguage(savedLanguage);
  }, []);

  const changeLanguage = (locale: string) => {
    setCurrentLanguage(locale);
    localStorage.setItem('i18nextLng', locale);
    
    // Disparar evento personalizado para avisar as páginas
    const event = new CustomEvent('languageChanged', { detail: locale });
    window.dispatchEvent(event);
  };

  return (
    <LanguageSelector>
      {languages.map((language) => (
        <LanguageButton
          key={language.code}
          $active={mounted ? currentLanguage === language.code : language.code === 'pt'}
          onClick={() => changeLanguage(language.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={language.name}
        >
          <FlagIcon>
            <ReactCountryFlag
              countryCode={language.country}
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
              }}
              title={language.name}
            />
          </FlagIcon>
        </LanguageButton>
      ))}
    </LanguageSelector>
  );
});

LanguageSelectorComponent.displayName = 'LanguageSelector';

export default LanguageSelectorComponent;