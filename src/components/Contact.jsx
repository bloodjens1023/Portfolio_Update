import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage(t('form_success'));
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    }, 800);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title reveal">{t('contact_title')}</h2>
        <p className="section-subtitle reveal">{t('contact_subtitle')}</p>

        <div className="contact-wrapper reveal">
          {/* Informations directes de contact avec icônes SVG uniformes */}
          <div className="contact-info-list">
            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg
                  className="contact-svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h4>{t('contact_email_title')}</h4>
                <a href="mailto:bloodjens32@gmail.com">bloodjens32@gmail.com</a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg
                  className="contact-svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4>{t('contact_phone_title')}</h4>
                <a href="tel:+261385459780">+261 38 54 597 80</a>
              </div>
            </div>

            {/* Localisation */}
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg
                  className="contact-svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>{t('contact_loc_title')}</h4>
                <p>
                  {t('contact_loc_desc')}
                  <br />
                  <small style={{ color: 'var(--text-secondary)' }}>
                    {t('contact_loc_sub')}
                  </small>
                </p>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg
                  className="contact-svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <h4>{t('contact_social_title')}</h4>
                <div className="contact-social-pills">
                  <a
                    href="https://github.com/bloodjens1023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="social-pill-svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.facebook.com/bloodjens1023/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="social-pill-svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('form_name_label')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form_name_ph')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('form_email_label')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('form_email_ph')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('form_message_label')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form_message_ph')}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('form_sending') : t('form_submit_btn')}
            </button>
            {statusMessage && (
              <div className="form-status success" style={{ display: 'block' }}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
