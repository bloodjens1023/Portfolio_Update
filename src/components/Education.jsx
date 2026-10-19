import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TiltContainer } from '../hooks/useTilt';

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title reveal">{t('edu_title')}</h2>
        <p className="section-subtitle reveal">{t('edu_subtitle')}</p>
        <div className="timeline-grid">
          {/* Master 2 ITU */}
          <TiltContainer className="timeline-card reveal" max={10} scale={1.02}>
            <div
              className="timeline-badge current"
              dangerouslySetInnerHTML={{ __html: t('edu_badge_m2') }}
            />
            <h3>
              {t('edu_m2_title_text')}{' '}
              <span className="timeline-tag">{t('edu_m2_tag')}</span>
            </h3>
            <p
              className="timeline-institution"
              dangerouslySetInnerHTML={{ __html: t('edu_m2_inst') }}
            />
            <p className="timeline-desc">{t('edu_m2_desc')}</p>
          </TiltContainer>

          {/* Master 1 ITU */}
          <TiltContainer className="timeline-card reveal" max={10} scale={1.02}>
            <div
              className="timeline-badge success"
              dangerouslySetInnerHTML={{ __html: t('edu_badge_m1') }}
            />
            <h3>
              {t('edu_m1_title_text')}{' '}
              <span className="timeline-tag">{t('edu_m1_tag')}</span>
            </h3>
            <p
              className="timeline-institution"
              dangerouslySetInnerHTML={{ __html: t('edu_m1_inst') }}
            />
            <p className="timeline-desc">{t('edu_m1_desc')}</p>
          </TiltContainer>

          {/* Licence ESMIA */}
          <TiltContainer className="timeline-card reveal" max={10} scale={1.02}>
            <div className="timeline-badge">{t('edu_badge_licence')}</div>
            <h3>
              {t('edu_licence_title_text')}{' '}
              <span className="timeline-tag">{t('edu_licence_tag')}</span>
            </h3>
            <p
              className="timeline-institution"
              dangerouslySetInnerHTML={{ __html: t('edu_licence_inst') }}
            />
            <p className="timeline-desc">{t('edu_licence_desc')}</p>
          </TiltContainer>

          {/* Baccalauréat */}
          <TiltContainer className="timeline-card reveal" max={10} scale={1.02}>
            <div className="timeline-badge">{t('edu_badge_bac')}</div>
            <h3>{t('edu_bac_title')}</h3>
            <p
              className="timeline-institution"
              dangerouslySetInnerHTML={{ __html: t('edu_bac_inst') }}
            />
            <p className="timeline-desc">{t('edu_bac_desc')}</p>
          </TiltContainer>
        </div>
      </div>
    </section>
  );
};
