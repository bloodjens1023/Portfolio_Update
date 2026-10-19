import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TiltContainer } from '../hooks/useTilt';

export const Projects = () => {
  const { t } = useLanguage();

  const githubSvg = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="action-btn-svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title reveal">{t('projects_title')}</h2>
        <div className="projects-grid">
          {/* Projet 1 : CNI */}
          <TiltContainer className="project-card reveal" max={10} scale={1.02} as="article">
            <div className="project-img-wrapper">
              <img
                src="img/project-cni.jpg"
                alt={t('proj1_title')}
                className="project-img"
                loading="lazy"
              />
              <div className="project-img-overlay" />
              <span className="project-category-tag">Svelte • Django</span>
            </div>
            <div className="project-content">
              <h3>{t('proj1_title')}</h3>
              <p>{t('proj1_desc')}</p>
              <div className="project-tags">
                <span>Svelte</span>
                <span>Django</span>
                <span>SQLite</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://github.com/bloodjens1023/local_identite.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  {githubSvg}
                  <span>{t('proj_code_btn')}</span> &rarr;
                </a>
              </div>
            </div>
          </TiltContainer>

          {/* Projet 2 : Gestion Bibliothèque */}
          <TiltContainer className="project-card reveal" max={10} scale={1.02} as="article">
            <div className="project-img-wrapper">
              <img
                src="img/project-bibliotheque.jpg"
                alt={t('proj2_title')}
                className="project-img"
                loading="lazy"
              />
              <div className="project-img-overlay" />
              <span className="project-category-tag">Python • PyQt</span>
            </div>
            <div className="project-content">
              <h3>{t('proj2_title')}</h3>
              <p>{t('proj2_desc')}</p>
              <div className="project-tags">
                <span>Python</span>
                <span>PyQt</span>
                <span>MySQL</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://github.com/bloodjens1023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  {githubSvg}
                  <span>{t('proj_code_btn')}</span> &rarr;
                </a>
              </div>
            </div>
          </TiltContainer>

          {/* Projet 3 : Portfolio Personnel */}
          <TiltContainer className="project-card reveal" max={10} scale={1.02} as="article">
            <div className="project-img-wrapper">
              <img
                src="img/project-portfolio.jpg"
                alt={t('proj3_title')}
                className="project-img"
                loading="lazy"
              />
              <div className="project-img-overlay" />
              <span className="project-category-tag">React • TypeScript</span>
            </div>
            <div className="project-content">
              <h3>{t('proj3_title')}</h3>
              <p>{t('proj3_desc')}</p>
              <div className="project-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://github.com/bloodjens1023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  {githubSvg}
                  <span>{t('proj_code_btn')}</span> &rarr;
                </a>
              </div>
            </div>
          </TiltContainer>
        </div>
      </div>
    </section>
  );
};
