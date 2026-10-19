import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">{t('hero_badge')}</span>
          <h1 className="hero-title">
            {t('hero_title_prefix')} <span className="highlight">{t('hero_name')}</span>
          </h1>
          <p
            className="hero-subtitle"
            dangerouslySetInnerHTML={{ __html: t('hero_subtitle') }}
          />
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              {t('hero_btn_projects')}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t('hero_btn_contact')}
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/bloodjens1023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/bloodjens1023/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a href="mailto:bloodjens32@gmail.com" aria-label="Email">
              Email
            </a>
            <a href="tel:+261385459780" aria-label="Téléphone">
              +261 38 54 597 80
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="profile-showcase">
            {/* Lueur d'aura tournante en arrière-plan */}
            <div className="profile-glow-ring" />

            {/* Conteneur principal de la photo stylisée */}
            <div className="profile-card">
              <div className="profile-border-gradient">
                <div className="profile-inner-frame">
                  <img
                    src="img/photo.jpg"
                    alt="Jenny Fandresena"
                    className="profile-photo-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Badges flottants technologiques interactifs */}
              <div className="floating-badge badge-top-right">
                <span className="badge-icon">⚡</span>
                <span>{t('badge_fullstack')}</span>
              </div>
              <div className="floating-badge badge-bottom-left">
                <span className="badge-pulse-dot" />
                <span dangerouslySetInnerHTML={{ __html: t('badge_m2') }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
