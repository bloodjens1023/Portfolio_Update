import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav">
        {/* Section Gauche : Logo et Liens en grille */}
        <div className="nav-left">
          <a href="#hero" className="nav-cell nav-logo-cell" onClick={closeMobileMenu}>
            <span className="logo-symbol">✦</span>
            <span className="logo-title">
              Jenny<span className="logo-accent">.dev</span>
            </span>
          </a>
          <div className={`nav-links-wrapper ${mobileMenuOpen ? 'open' : ''}`} id="nav-menu">
            <a href="#about" className="nav-cell nav-item-link" onClick={closeMobileMenu}>
              <span className="hud-pill">{t('nav_about')}</span>
            </a>
            <a href="#education" className="nav-cell nav-item-link" onClick={closeMobileMenu}>
              <span className="hud-pill">{t('nav_education')}</span>
            </a>
            <a href="#skills" className="nav-cell nav-item-link" onClick={closeMobileMenu}>
              <span className="hud-pill">{t('nav_skills')}</span>
            </a>
            <a href="#projects" className="nav-cell nav-item-link" onClick={closeMobileMenu}>
              <span className="hud-pill">{t('nav_projects')}</span>
            </a>
            <a href="#contact" className="nav-cell nav-item-link" onClick={closeMobileMenu}>
              <span className="hud-pill">{t('nav_contact')}</span>
            </a>
          </div>
        </div>

        {/* Section Droite : Réseaux, Thème, Langue & Bouton d'action */}
        <div className="nav-right">
          <a
            href="https://github.com/bloodjens1023"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cell nav-icon-cell"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon-svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>

          <button
            type="button"
            className="nav-cell nav-icon-cell theme-toggle-btn"
            id="theme-toggle"
            aria-label="Changer de thème"
            title="Changer de thème"
            onClick={toggleTheme}
          >
            <span id="theme-icon">{theme === 'light' ? '☀️' : '🌙'}</span>
          </button>

          <button
            type="button"
            className="nav-cell nav-icon-cell lang-toggle-btn"
            id="lang-toggle"
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            onClick={toggleLanguage}
          >
            <span id="lang-indicator">{lang === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          <a href="#contact" className="nav-cell nav-action-btn" onClick={closeMobileMenu}>
            <span>{t('nav_cta')}</span>
          </a>

          <button
            type="button"
            className="nav-cell nav-icon-cell nav-hamburger-btn"
            id="nav-toggle"
            aria-label="Menu mobile"
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};
