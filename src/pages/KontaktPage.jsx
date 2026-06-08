import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Initialize Turnstile widget
  useEffect(() => {
    const checkTurnstile = setInterval(() => {
      if (window.turnstile) {
        clearInterval(checkTurnstile);
        renderWidget();
      }
    }, 100);

    return () => {
      clearInterval(checkTurnstile);
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  const renderWidget = () => {
    if (!turnstileContainerRef.current) return;
    
    try {
      // Local dev & production key (localhost is whitelisted in this sitekey)
      const sitekey = '0x4AAAAAADg25ekk5m-1SFaq'; 
      
      const id = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: sitekey,
        callback: (token) => {
          setTurnstileToken(token);
        },
        'expired-callback': () => {
          setTurnstileToken('');
        },
        'error-callback': () => {
          setTurnstileToken('');
        }
      });
      widgetIdRef.current = id;
    } catch (e) {
      console.error('Turnstile render error:', e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Bitte bestätigen Sie das Sicherheits-CAPTCHA.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://friesescholzwebdesign.pages.dev/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          source: 'bestattungen-eberhardt',
          turnstileToken: turnstileToken,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Allgemeine Anfrage',
          message: ''
        });
        setTurnstileToken('');
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Beim Absenden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Es konnte keine Verbindung zum Server hergestellt werden. Bitte prüfen Sie Ihre Internetverbindung.');
    }
  };

  return (
    <div className="kontakt-page-wrapper section-padding section-dark-textured">
      <div className="container">
        
        {/* Header */}
        <div className="kontakt-header">
          <div className="section-tag">Kontakt</div>
          <h1 className="section-title">Wie können wir Ihnen <strong>helfen?</strong></h1>
          <p className="section-intro">
            Wir sind jederzeit für Sie da. Zögern Sie nicht, uns im Notfall anzurufen oder uns bei allgemeinen Fragen eine Nachricht zu senden.
          </p>
        </div>

        <div className="kontakt-grid">
          {/* Column 1: Info */}
          <div className="kontakt-info-col">
            <div className="info-card">
              <h2 className="info-card-title">Rufbereitschaft</h2>
              <p className="info-card-desc">
                Im akuten Trauerfall sind wir 24 Stunden am Tag für Sie erreichbar – an 365 Tagen im Jahr.
              </p>
              
              <div className="phone-numbers">
                <a href="tel:050371222" className="phone-link-card">
                  <div className="phone-icon-wrapper"><PhoneCall size={20} /></div>
                  <div className="phone-details">
                    <span className="phone-label">Münchehagen / Rehburg-Loccum</span>
                    <span className="phone-num">05037 - 1222</span>
                  </div>
                </a>
                
                <a href="tel:057612000" className="phone-link-card">
                  <div className="phone-icon-wrapper"><PhoneCall size={20} /></div>
                  <div className="phone-details">
                    <span className="phone-label">Stolzenau / Nienburg</span>
                    <span className="phone-num">05761 - 2000</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="info-card location-info">
              <h2 className="info-card-title">Unsere Standorte</h2>
              
              <div className="location-item">
                <MapPin className="location-icon" />
                <div className="location-text">
                  <strong>Stolzenau</strong>
                  <p>Lange Straße 5, 31592 Stolzenau</p>
                </div>
              </div>

              <div className="location-item">
                <MapPin className="location-icon" />
                <div className="location-text">
                  <strong>Rehburg-Loccum</strong>
                  <p>Bergmannstraße 20, 31547 Rehburg-Loccum</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="kontakt-form-col">
            <div className="form-card">
              <h2 className="form-card-title">Schreiben Sie uns</h2>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="status-box success"
                >
                  <CheckCircle2 className="status-icon" size={32} />
                  <div>
                    <h3>Nachricht gesendet!</h3>
                    <p>Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="kontakt-form">
                  {status === 'error' && (
                    <div className="status-box error">
                      <AlertCircle className="status-icon" size={20} />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="form-input" 
                        required 
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Telefonnummer</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        className="form-input" 
                        required 
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">E-Mail-Adresse</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      required 
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Betreff</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange} 
                      className="form-select"
                      disabled={status === 'loading'}
                    >
                      <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                      <option value="Vorsorge-Beratung">Bestattungsvorsorge</option>
                      <option value="Trauerfall-Meldung">Trauerfall melden</option>
                      <option value="Gedenkportal / Digitales">Gedenkseiten & Portal</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Ihre Nachricht</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      className="form-textarea" 
                      required 
                      disabled={status === 'loading'}
                    ></textarea>
                  </div>

                  {/* Cloudflare Turnstile Container */}
                  <div className="captcha-container">
                    <div ref={turnstileContainerRef} id="turnstile-widget"></div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary form-submit-btn" 
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
                    <Send size={18} className="btn-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .kontakt-page-wrapper {
          padding-top: 150px;
          background-color: var(--eb-dark-bg);
          font-family: var(--font-sans);
        }

        .kontakt-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .kontakt-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 50px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .kontakt-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .info-card {
          background-color: var(--eb-dark-card);
          border: 1px solid var(--eb-border-dark);
          border-radius: 16px;
          padding: 40px;
          margin-bottom: 30px;
        }

        .info-card-title {
          font-size: 1.6rem;
          color: var(--eb-text-white);
          margin-bottom: 15px;
        }

        .info-card-desc {
          color: var(--eb-text-muted-light);
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .phone-numbers {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .phone-link-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(133, 163, 31, 0.05);
          border: 1px solid var(--eb-border-green);
          border-radius: 12px;
          padding: 20px;
          transition: var(--transition-smooth);
        }

        .phone-link-card:hover {
          background: rgba(133, 163, 31, 0.12);
          transform: translateY(-2px);
          border-color: var(--eb-green);
        }

        .phone-icon-wrapper {
          width: 48px;
          height: 48px;
          background: var(--eb-green);
          color: var(--eb-dark-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .phone-details {
          display: flex;
          flex-direction: column;
        }

        .phone-label {
          font-size: 0.85rem;
          color: var(--eb-text-muted-light);
          opacity: 0.8;
        }

        .phone-num {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--eb-text-white);
          margin-top: 2px;
        }

        /* Locations */
        .location-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .location-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .location-icon {
          color: var(--eb-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .location-text strong {
          color: var(--eb-text-white);
          font-size: 1.1rem;
          display: block;
          margin-bottom: 5px;
        }

        .location-text p {
          color: var(--eb-text-muted-light);
          line-height: 1.4;
        }

        /* Form Card */
        .form-card {
          background-color: #ffffff;
          color: var(--eb-text-dark);
          border-radius: 16px;
          padding: 50px 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 576px) {
          .form-card {
            padding: 30px 20px;
          }
        }

        .form-card-title {
          font-size: 2rem;
          color: var(--eb-green);
          margin-bottom: 30px;
          font-weight: 700;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .kontakt-form .form-label {
          color: var(--eb-text-muted);
        }

        .kontakt-form .form-input,
        .kontakt-form .form-textarea,
        .kontakt-form .form-select {
          border-color: rgba(0, 0, 0, 0.1);
          color: var(--eb-text-dark);
          background-color: rgba(0, 0, 0, 0.02);
        }

        .kontakt-form .form-input:focus,
        .kontakt-form .form-textarea:focus,
        .kontakt-form .form-select:focus {
          border-color: var(--eb-green);
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(133, 163, 31, 0.1);
        }

        .captcha-container {
          margin: 25px 0;
          display: flex;
          justify-content: flex-start;
        }

        .form-submit-btn {
          width: 100%;
          border-radius: 12px;
          padding: 18px;
        }

        /* Status Box */
        .status-box {
          display: flex;
          gap: 15px;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 25px;
          align-items: flex-start;
          line-height: 1.5;
        }

        .status-box.success {
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
        }

        .status-box.success .status-icon {
          color: #15803d;
          flex-shrink: 0;
        }

        .status-box.success h3 {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 5px;
        }

        .status-box.error {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
        }

        .status-box.error .status-icon {
          color: #b91c1c;
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
};

export default KontaktPage;
