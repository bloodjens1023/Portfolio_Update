import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
    if (translations[lang]?.page_title) {
      document.title = translations[lang].page_title;
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (key) => {
    return translations[lang]?.[key] ?? translations.fr?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
