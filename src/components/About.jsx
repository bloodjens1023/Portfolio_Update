import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TiltContainer } from '../hooks/useTilt';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title reveal">{t('about_title')}</h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p
              className="about-lead"
              dangerouslySetInnerHTML={{ __html: t('about_lead') }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t('about_p1') }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t('about_p2') }}
            />
            <div className="stats-grid">
              <TiltContainer className="stat-card" max={10} scale={1.03}>
                <span className="stat-number">{t('about_stat1_number')}</span>
                <span className="stat-label">{t('about_stat1_label')}</span>
              </TiltContainer>
              <TiltContainer className="stat-card" max={10} scale={1.03}>
                <span className="stat-number">{t('about_stat2_number')}</span>
                <span className="stat-label">{t('about_stat2_label')}</span>
              </TiltContainer>
              <TiltContainer className="stat-card" max={10} scale={1.03}>
                <span className="stat-number">{t('about_stat3_number')}</span>
                <span className="stat-label">{t('about_stat3_label')}</span>
              </TiltContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
