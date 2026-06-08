import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesOptions = [
  "Ausführliche Beratung inklusive Kostenvoranschlag",
  "Organisation und Durchführung von Trauerfeiern",
  "In- und Auslandsüberführungen",
  "Hygienische und kosmetische Versorgung der Verstorbenen",
  "Trauerrednern, Floristen und Musikern",
  "Steinmetzen und Grabpflegediensten",
  "Traueranzeigen und Danksagungen",
  "Beurkundung des Sterbefalls",
  "An- und Abmeldungen bei Versicherungen, Rententrägern, Ämtern und Dienstleistern",
  "Unterstützung bei Formalitäten und Anträgen"
];

const KontaktPage = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Initialize Turnstile widget when reaching step 2
  useEffect(() => {
    if (step === 2 && status !== 'success') {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkTurnstile);
          renderWidget();
        }
      }, 100);

      return () => {
        clearInterval(checkTurnstile);
        if (window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.remove(widgetIdRef.current);
            widgetIdRef.current = null;
          } catch (e) {
            console.error('Turnstile removal error:', e);
          }
        }
      };
    }
  }, [step, status]);

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

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (selectedServices.length === 0) {
      setStatus('error');
      setErrorMessage('Bitte wählen Sie mindestens eine Leistung aus, bei der wir Sie unterstützen können.');
      return;
    }
    setStatus('idle');
    setErrorMessage('');
    setStep(2);
  };

  const prevStep = () => {
    setStatus('idle');
    setErrorMessage('');
    setStep(1);
    setTurnstileToken('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Bitte bestätigen Sie das Sicherheits-CAPTCHA.');
      return;
    }

    setStatus('loading');

    // Format selected services as message body intro
    const servicesList = selectedServices.map(s => `- ${s}`).join('\n');
    const formattedMessage = `Gewünschte Unterstützung:\n${servicesList}\n\nAnmerkungen:\n${formData.message || 'Keine Anmerkungen hinterlassen.'}`;

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
          subject: 'Dienstleistungsanfrage (Kontaktformular)',
          message: formattedMessage
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setSelectedServices([]);
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
            Wählen Sie im ersten Schritt die gewünschten Leistungen aus und senden Sie uns Ihre Daten. Wir melden uns umgehend bei Ihnen.
          </p>
        </div>

        {/* Centered Form Wrapper */}
        <div className="kontakt-form-centered">
          <div className="form-card">
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="status-box success"
              >
                <CheckCircle2 className="status-icon" size={40} />
                <div>
                  <h3>Nachricht erfolgreich gesendet!</h3>
                  <p>Vielen Dank für Ihr Vertrauen. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setStep(1);
                    }}
                    className="btn-primary mt-20"
                  >
                    Neues Formular starten
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* Step Indicators */}
                <div className="step-indicator">
                  <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
                    <span>1</span>
                    <label>Leistungen</label>
                  </div>
                  <div className="step-line-connector">
                    <div className={`step-line-progress ${step === 2 ? 'active' : ''}`}></div>
                  </div>
                  <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
                    <span>2</span>
                    <label>Ihre Daten</label>
                  </div>
                </div>

                {status === 'error' && (
                  <div className="status-box error">
                    <AlertCircle className="status-icon" size={20} />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="step-title">Mit welcher Leistung können wir Ihnen helfen?</h2>
                      
                      <div className="services-checkbox-grid">
                        {servicesOptions.map((service, idx) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <div 
                              key={idx}
                              className={`service-checkbox-card ${isSelected ? 'selected' : ''}`}
                              onClick={() => handleServiceToggle(service)}
                            >
                              <div className="checkbox-box">
                                {isSelected && <Check size={14} className="check-icon" />}
                              </div>
                              <span className="checkbox-label-text">{service}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="form-action-footer right-align">
                        <button 
                          onClick={nextStep}
                          className="btn-primary"
                        >
                          Weiter
                          <ArrowRight size={18} className="btn-icon" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="back-navigation">
                        <button onClick={prevStep} className="btn-back">
                          <ArrowLeft size={16} />
                          Zurück zur Leistungsauswahl
                        </button>
                      </div>

                      <h2 className="step-title">Ihre Kontaktdaten</h2>

                      <form onSubmit={handleSubmit} className="kontakt-form">
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">Name *</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              placeholder="Bitte tragen Sie Ihren Namen ein"
                              value={formData.name} 
                              onChange={handleInputChange} 
                              className="form-input" 
                              required 
                              disabled={status === 'loading'}
                            />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">Telefonnummer *</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              placeholder="Bitte tragen Sie Ihre Telefonnummer ein"
                              value={formData.phone} 
                              onChange={handleInputChange} 
                              className="form-input" 
                              required 
                              disabled={status === 'loading'}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="email" className="form-label">E-Mail-Adresse *</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Bitte tragen Sie Ihre E-Mail ein"
                            value={formData.email} 
                            onChange={handleInputChange} 
                            className="form-input" 
                            required 
                            disabled={status === 'loading'}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="message" className="form-label">Anmerkungen</label>
                          <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Bitte Wünsche oder Anmerkungen eintragen"
                            value={formData.message} 
                            onChange={handleInputChange} 
                            className="form-textarea" 
                            disabled={status === 'loading'}
                          ></textarea>
                        </div>

                        {/* Cloudflare Turnstile Container */}
                        <div className="captcha-container">
                          <div ref={turnstileContainerRef} id="turnstile-widget"></div>
                        </div>

                        <div className="form-action-footer split-align">
                          <button 
                            type="button" 
                            onClick={prevStep}
                            className="btn-secondary"
                            disabled={status === 'loading'}
                          >
                            Zurück
                          </button>
                          
                          <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={status === 'loading'}
                          >
                            {status === 'loading' ? 'Wird gesendet...' : 'Absenden'}
                            <Send size={18} className="btn-icon" />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

          </div>
        </div>

        {/* Emergency Info section below */}
        <div className="kontakt-emergency-section">
          <div className="emergency-grid">
            
            {/* Phone block */}
            <div className="emergency-card">
              <h3 className="card-title">24h Rufbereitschaft</h3>
              <p className="card-desc">
                Im akuten Trauerfall sind wir 24 Stunden am Tag persönlich für Sie erreichbar – an 365 Tagen im Jahr.
              </p>
              <div className="card-phones">
                <a href="tel:050371222" className="phone-badge">
                  <span className="location">Münchehagen</span>
                  <span className="number">05037 - 1222</span>
                </a>
                <a href="tel:057612000" className="phone-badge">
                  <span className="location">Stolzenau</span>
                  <span className="number">05761 - 2000</span>
                </a>
              </div>
            </div>

            {/* Standorte block */}
            <div className="emergency-card">
              <h3 className="card-title">Unsere Standorte</h3>
              <div className="standorte-list">
                <div className="standort-item">
                  <MapPin size={18} className="pin-icon" />
                  <div>
                    <strong>Stolzenau</strong>
                    <p>Lange Straße 5, 31592 Stolzenau</p>
                  </div>
                </div>
                <div className="standort-item">
                  <MapPin size={18} className="pin-icon" />
                  <div>
                    <strong>Rehburg-Loccum</strong>
                    <p>Bergmannstraße 20, 31547 Rehburg-Loccum</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .kontakt-page-wrapper {
          padding-top: 150px;
          background-color: var(--eb-dark-bg);
          font-family: var(--font-sans);
          min-height: 100vh;
        }

        .kontakt-header {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .kontakt-form-centered {
          max-width: 820px;
          margin: 0 auto 80px auto;
          width: 100%;
        }

        .form-card {
          background-color: #ffffff;
          color: var(--eb-text-dark);
          border-radius: 20px;
          padding: 45px 50px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          border-top: 6px solid var(--eb-green);
          position: relative;
        }

        @media (max-width: 768px) {
          .form-card {
            padding: 30px 20px;
          }
        }

        .step-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--eb-text-dark);
          margin-bottom: 30px;
          line-height: 1.3;
        }

        /* Step Indicators */
        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          position: relative;
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }

        .step-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f3f4f6;
          border: 2px solid #e5e7eb;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .step-dot.active {
          background: var(--eb-green);
          border-color: var(--eb-green);
          color: #ffffff;
          box-shadow: 0 0 0 4px rgba(133, 163, 31, 0.2);
        }

        .step-dot label {
          position: absolute;
          top: calc(100% + 8px);
          font-size: 0.8rem;
          font-weight: 600;
          color: #6b7280;
          white-space: nowrap;
        }

        .step-dot.active label {
          color: var(--eb-green);
        }

        .step-line-connector {
          flex-grow: 1;
          height: 3px;
          background: #e5e7eb;
          margin: 0 -5px;
          position: relative;
          z-index: 1;
        }

        .step-line-progress {
          width: 0%;
          height: 100%;
          background: var(--eb-green);
          transition: width 0.4s ease;
        }

        .step-line-progress.active {
          width: 100%;
        }

        /* Checkbox list cards */
        .services-checkbox-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 35px;
        }

        .service-checkbox-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          background-color: #fafafa;
          user-select: none;
        }

        .service-checkbox-card:hover {
          background-color: rgba(133, 163, 31, 0.04);
          border-color: rgba(133, 163, 31, 0.3);
        }

        .service-checkbox-card.selected {
          border-color: var(--eb-green);
          background-color: rgba(133, 163, 31, 0.08);
        }

        .checkbox-box {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 2px solid #cbd5e1;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .service-checkbox-card.selected .checkbox-box {
          border-color: var(--eb-green);
          background: var(--eb-green);
        }

        .check-icon {
          color: #ffffff;
        }

        .checkbox-label-text {
          font-size: 1.05rem;
          color: var(--eb-text-dark);
          font-weight: 500;
          line-height: 1.4;
        }

        .service-checkbox-card.selected .checkbox-label-text {
          color: var(--eb-green-hover);
          font-weight: 600;
        }

        /* Back Navigation */
        .back-navigation {
          margin-bottom: 25px;
        }

        .btn-back {
          background: none;
          border: none;
          color: #6b7280;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          padding: 0;
        }

        .btn-back:hover {
          color: var(--eb-green);
        }

        /* Form Footer layout */
        .form-action-footer {
          display: flex;
          margin-top: 30px;
        }

        .form-action-footer.right-align {
          justify-content: flex-end;
        }

        .form-action-footer.split-align {
          justify-content: space-between;
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

        .kontakt-form .form-group {
          margin-bottom: 22px;
        }

        .kontakt-form .form-label {
          color: var(--eb-text-muted);
          font-weight: 600;
        }

        .kontakt-form .form-input,
        .kontakt-form .form-textarea {
          border-color: rgba(0, 0, 0, 0.12);
          color: var(--eb-text-dark);
          background-color: rgba(0, 0, 0, 0.01);
          border-radius: 10px;
        }

        .kontakt-form .form-input::placeholder,
        .kontakt-form .form-textarea::placeholder {
          color: #9ca3af;
        }

        .kontakt-form .form-input:focus,
        .kontakt-form .form-textarea:focus {
          border-color: var(--eb-green);
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(133, 163, 31, 0.1);
        }

        .captcha-container {
          margin: 25px 0;
        }

        /* Success/Error blocks */
        .status-box {
          display: flex;
          gap: 20px;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 25px;
          align-items: flex-start;
          line-height: 1.6;
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
          font-size: 1.25rem;
          margin-bottom: 8px;
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

        .mt-20 {
          margin-top: 20px;
        }

        /* Emergency details grid below */
        .kontakt-emergency-section {
          max-width: 820px;
          margin: 0 auto;
          width: 100%;
        }

        .emergency-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
        }

        @media (max-width: 768px) {
          .emergency-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .emergency-card {
          background-color: var(--eb-dark-card);
          border: 1px solid var(--eb-border-dark);
          border-radius: 16px;
          padding: 35px;
        }

        .emergency-card .card-title {
          font-size: 1.4rem;
          font-family: var(--font-serif);
          color: var(--eb-text-white);
          margin-bottom: 12px;
        }

        .emergency-card .card-desc {
          color: var(--eb-text-muted-light);
          margin-bottom: 25px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .card-phones {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .phone-badge {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(133, 163, 31, 0.05);
          border: 1px solid var(--eb-border-green);
          padding: 14px 20px;
          border-radius: 10px;
          transition: all 0.3s;
        }

        .phone-badge:hover {
          background: rgba(133, 163, 31, 0.12);
          border-color: var(--eb-green);
          transform: translateY(-2px);
        }

        .phone-badge .location {
          font-size: 0.85rem;
          color: var(--eb-text-muted-light);
        }

        .phone-badge .number {
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--eb-text-white);
        }

        /* Standorte items */
        .standorte-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .standort-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .standort-item .pin-icon {
          color: var(--eb-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .standort-item strong {
          color: var(--eb-text-white);
          font-size: 1.05rem;
          display: block;
          margin-bottom: 4px;
        }

        .standort-item p {
          color: var(--eb-text-muted-light);
          font-size: 0.95rem;
          line-height: 1.4;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default KontaktPage;
