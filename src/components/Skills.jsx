import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TiltContainer } from '../hooks/useTilt';

export const Skills = () => {
  const { t } = useLanguage();

  const frontendSkills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Svelte',
  ];

  const backendSkills = [
    'Django',
    'Node.js',
    'Python',
    'PostgreSQL',
    'SQL / SQLite',
    'MySQL',
  ];

  const toolsSkills = [
    'Git & GitHub',
    'VS Code',
    'Docker',
    'Figma',
    'Postman',
    'PyQt',
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title reveal">{t('skills_title')}</h2>
        <div className="skills-grid">
          <TiltContainer className="skill-category reveal" max={10} scale={1.03}>
            <h3>{t('skills_frontend')}</h3>
            <div className="skill-tags">
              {frontendSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </TiltContainer>

          <TiltContainer className="skill-category reveal" max={10} scale={1.03}>
            <h3>{t('skills_backend')}</h3>
            <div className="skill-tags">
              {backendSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </TiltContainer>

          <TiltContainer className="skill-category reveal" max={10} scale={1.03}>
            <h3>{t('skills_tools')}</h3>
            <div className="skill-tags">
              {toolsSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </TiltContainer>
        </div>
      </div>
    </section>
  );
};
