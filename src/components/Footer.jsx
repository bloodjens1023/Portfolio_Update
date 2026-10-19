import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          &copy; <span id="current-year">{currentYear}</span> {t('footer_rights')}
        </p>
        <p className="footer-sub">{t('footer_sub')}</p>
      </div>
    </footer>
  );
};
