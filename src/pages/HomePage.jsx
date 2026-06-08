import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  ChevronDown, 
  MapPin, 
  PhoneCall, 
  Heart, 
  Check, 
  BookOpen, 
  Flame,
  Calendar,
  Lock,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  FileText,
  Clock,
  Briefcase
} from 'lucide-react';

// Framer Motion presets
const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease } 
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-modern">
        {/* Background Video */}
        <div className="hero-video-overlay"></div>
        <video 
          className="hero-video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source 
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/website-datein/Eberhardt%20Bestattung/elementbau_Clip.mp4" 
            type="video/mp4" 
          />
          {/* Fallback to Pexels original source if R2 is not uploaded yet */}
          <source 
            src="https://videos.pexels.com/video-files/12417948/12417948-hd_1920_1080_24fps.mp4" 
            type="video/mp4" 
          />
        </video>

        <div className="container hero-container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-content"
          >
            <div className="modern-badge">
              <div className="badge-dot"></div>
              <span className="badge-text">Einfühlsame Begleitung im Trauerfall</span>
            </div>
            
            <h1 className="headline">
              Wir sind für <span className="nowrap">Sie da,</span><br className="hide-mobile" />
              wenn die Zeit des <span class="highlight">Erinnerns</span> beginnt.
            </h1>
            
            <p className="description">
              In dieser schweren Zeit begleiten wir Sie persönlich, respektvoll und zuverlässig – von Anfang an.
            </p>

            <div className="cta-wrapper">
              <div className="availability">
                <div className="pulse-dot"></div>
                24 Stunden für Sie erreichbar
              </div>

              <div className="button-group">
                <div className="dropdown-wrapper" tabIndex="0">
                  <button className="btn-primary">
                    <Phone className="btn-icon-svg" />
                    Jetzt anrufen
                    <ChevronDown className="chevron-icon" />
                  </button>
                  <div className="dropdown-content">
                    <a href="tel:050371222">
                      <span className="location">Münchehagen</span>
                      05037 - 1222
                    </a>
                    <a href="tel:057612000">
                      <span className="location">Stolzenau</span>
                      05761 - 2000
                    </a>
                  </div>
                </div>

                <Link to="/kontakt" className="btn-secondary">Kontaktieren</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. RATGEBER SECTION (WAS IST ZU TUN?) */}
      <section className="guide-outer-section" id="ratgeber">
        {/* Background Image Overlay */}
        <div className="section-bg-image-overlay"></div>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="guide-header"
          >
            <div className="section-tag">Im Trauerfall</div>
            <h2 className="guide-title">Was ist zu tun?</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="guide-grid"
          >
            {/* Step Card */}
            <motion.div variants={fadeUp} className="guide-box">
              <h3 className="box-title">Die ersten Schritte</h3>
              
              <div className="step-item">
                <span className="step-num">01</span>
                <div className="step-content">
                  <strong className="step-num-title">Arzt verständigen</strong>
                  <p className="step-text">Hausarzt oder Bereitschaftsdienst anrufen.</p>
                </div>
              </div>

              <div className="step-item">
                <span className="step-num">02</span>
                <div className="step-content">
                  <strong className="step-num-title">Danach uns kontaktieren</strong>
                  <p className="step-text">Wir sind Tag und Nacht für Sie erreichbar.</p>
                </div>
              </div>

              <div className="step-note">
                Wir erklären Ihnen alles Weitere in Ruhe und übernehmen die Organisation.
              </div>
            </motion.div>

            {/* Document Card */}
            <motion.div variants={fadeUp} className="guide-box">
              <h3 className="box-title">Wichtige Unterlagen</h3>
              <ul className="doc-list">
                <li>
                  <span className="doc-icon"><Check size={14} /></span>
                  Personalausweis
                </li>
                <li>
                  <span className="doc-icon"><Check size={14} /></span>
                  Geburts- oder Heiratsurkunde
                </li>
                <li>
                  <span className="doc-icon"><Check size={14} /></span>
                  Todesbescheinigung
                </li>
                <li>
                  <span className="doc-icon"><Check size={14} /></span>
                  Rentennummer
                </li>
                <li>
                  <span className="doc-icon"><Check size={14} /></span>
                  Versicherungspolicen
                </li>
                <li>
                  <span className="doc-icon"><Check size={14} /></span>
                  Vorsorgeunterlagen (falls vorhanden)
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Soforthilfe CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="abschluss-cta"
          >
            <div className="abschluss-inner">
              <div className="abschluss-icon">
                <PhoneCall size={30} />
              </div>
              <p className="abschluss-label">Im Trauerfall</p>
              <h3 className="abschluss-title">Soforthilfe – ein Anruf genügt.</h3>
              <p className="abschluss-text">
                Ein Trauerfall stellt alles auf den Kopf.<br />
                Wir sind <strong>24 Stunden</strong> für Sie erreichbar und begleiten Sie behutsam durch die nächsten Schritte.
              </p>
              <div className="abschluss-actions">
                <div className="dropdown-wrapper" tabIndex="0">
                  <button className="btn-orange-solid">
                    <PhoneCall size={18} />
                    Jetzt anrufen
                    <ChevronDown size={14} className="chevron-icon" />
                  </button>
                  <div className="dropdown-content">
                    <a href="tel:050371222">
                      <span className="location">Münchehagen</span>
                      05037 - 1222
                    </a>
                    <a href="tel:057612000">
                      <span className="location">Stolzenau</span>
                      05761 - 2000
                    </a>
                  </div>
                </div>
                <a 
                  href="https://mein-kunden.center/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-orange-outline"
                >
                  Zum Kundenportal
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LEISTUNGEN SECTION */}
      <section className="services-section-premium" id="leistungen">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="services-header"
          >
            <div className="section-tag">Unsere Leistungen</div>
            <h2 className="services-title">
              Umfassende Unterstützung <br /><strong>aus einer Hand.</strong>
            </h2>
            <p className="services-intro">
              Wir übernehmen auf Wunsch sämtliche organisatorischen Aufgaben, damit Sie Raum für das Wesentliche haben.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="category-grid"
          >
            {/* Box 1 */}
            <motion.div variants={fadeUp} className="category-card">
              <h3 className="block-title">Organisation & Beratung</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="premium-icon"><HelpCircle size={20} /></div>
                  <p className="service-text">Persönliche <b>Beratung</b> mit Kostentransparenz.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><Calendar size={20} /></div>
                  <p className="service-text">Terminabsprachen mit <b>Kirchen & Friedhöfen</b>.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><FileText size={20} /></div>
                  <p className="service-text"><b>Behördengänge</b> & Abmeldungen.</p>
                </li>
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={fadeUp} className="category-card">
              <h3 className="block-title">Abschiednahme & Feier</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="premium-icon"><Heart size={20} /></div>
                  <p className="service-text">Organisation von <b>Trauerfeiern & Beisetzungen</b> deutschlandweit.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><Clock size={20} /></div>
                  <p className="service-text">Vermittlung von <b>Rednern, Musikern & Floristen</b>.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><FileText size={20} /></div>
                  <p className="service-text">Gestaltung & Druck von <b>Traueranzeigen</b>.</p>
                </li>
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div variants={fadeUp} className="category-card">
              <h3 className="block-title">Versorgung & Logistik</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="premium-icon"><Heart size={20} /></div>
                  <p className="service-text">Hygienische und kosmetische <b>Versorgung</b>.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><MapPin size={20} /></div>
                  <p className="service-text">In- und Auslands<b>überführungen</b>.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><Briefcase size={20} /></div>
                  <p className="service-text">Särge, Urnen, Bestattungswäsche & <b>Zubehör</b>.</p>
                </li>
              </ul>
            </motion.div>

            {/* Box 4 */}
            <motion.div variants={fadeUp} className="category-card">
              <h3 className="block-title">Formalitäten & Finanzen</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="premium-icon"><FileText size={20} /></div>
                  <p className="service-text">Unterstützung bei <b>Versicherungen</b> & Rententrägern.</p>
                </li>
                <li className="service-item">
                  <div className="premium-icon"><Briefcase size={20} /></div>
                  <p className="service-text">Antrag auf <b>Rentenvorschuss</b>.</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="services-outro">
            <p className="outro-text">Wir stehen Ihnen bei jedem Schritt zur Seite.</p>
          </div>
        </div>
      </section>

      {/* 4. BESTATTUNGSARTEN SECTION */}
      <section className="burial-section" id="bestattungen">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="burial-header"
          >
            <div className="section-tag">Bestattungsarten & Ruhestätten</div>
            <h2 className="burial-title">Die passende Form des Abschieds</h2>
            <p className="burial-intro">
              Jeder Mensch ist einzigartig – genauso individuell darf auch der Abschied sein.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="arch-grid"
          >
            <motion.div variants={fadeUp} className="arch-card">
              <div className="arch-icon"><Heart size={30} /></div>
              <h3 className="arch-title">Erdbestattung</h3>
              <p className="arch-text">Klassische Beisetzung im Wahl- oder Reihengrab auf dem Friedhof.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="arch-card">
              <div className="arch-icon"><Flame size={30} /></div>
              <h3 className="arch-title">Feuerbestattung</h3>
              <p className="arch-text">Urnenbeisetzung auf dem Friedhof oder in einer Urnenwand.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="arch-card">
              <div className="arch-icon"><CompassIcon size={30} /></div>
              <h3 className="arch-title">Seebestattung</h3>
              <p className="arch-text">Würdevolle Beisetzung auf See in der Nord- oder Ostsee.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="arch-card">
              <div className="arch-icon"><TreeIcon size={30} /></div>
              <h3 className="arch-title">Naturbestattung</h3>
              <p className="arch-text">Beisetzung im Bestattungswald oder naturnahen Ruhebereich.</p>
            </motion.div>
          </motion.div>

          {/* Partner Baumfrieden Banner */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="banner-card"
          >
            <div className="banner-icon-wrapper">
              <TreeIcon size={35} />
            </div>
            <div className="banner-content">
              <span className="banner-label">Zuhause die letzte Ruhe finden</span>
              <h3 className="banner-title">Partner „Baumfrieden“</h3>
              <p className="banner-text">
                Mit unserem Partner „Baumfrieden“ kann aus der Asche ein Erinnerungsbaum entstehen – als wunderschönes, persönliches Zeichen der ewigen Verbundenheit in der Natur.
              </p>
            </div>
          </motion.div>

          <div className="burial-outro">
            <p className="outro-text">Wir beraten Sie ausführlich zu allen Möglichkeiten.</p>
            <div className="cta-wrapper">
              <div className="availability">
                <div className="pulse-dot"></div>
                24 Stunden für Sie erreichbar
              </div>
              <div className="button-group">
                <div className="dropdown-wrapper" tabIndex="0">
                  <button className="btn-primary">
                    <Phone className="btn-icon-svg" />
                    Jetzt anrufen
                    <ChevronDown size={14} className="chevron-icon" />
                  </button>
                  <div className="dropdown-content">
                    <a href="tel:050371222">
                      <span className="location">Münchehagen</span>
                      05037 - 1222
                    </a>
                    <a href="tel:057612000">
                      <span className="location">Stolzenau</span>
                      05761 - 2000
                    </a>
                  </div>
                </div>
                <Link to="/kontakt" className="btn-secondary-outline">
                  <Calendar className="btn-icon-svg" />
                  Persönliche Beratung vereinbaren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ONLINE-KUNDENCENTER */}
      <section className="portal-section" id="kundencenter">
        <div className="container">
          <div className="portal-grid">
            {/* Left Column Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="portal-content"
            >
              <div className="section-tag no-after">Online-Kundencenter</div>
              <h2 className="portal-title">Organisation auch digital möglich</h2>
              <p className="portal-intro">
                Über unser Kunden-Center können Sie bequem und jederzeit von zu Hause aus wichtige Dinge regeln:
              </p>
              <ul className="portal-list">
                <li className="list-item">
                  <div className="list-icon"><Heart size={20} /></div>
                  <p className="list-text">Gedenkseiten verwalten</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><FileText size={20} /></div>
                  <p className="list-text">Trauerdruck abstimmen</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><Clock size={20} /></div>
                  <p className="list-text">Musik & Ablauf der Trauerfeier planen</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><Lock size={20} /></div>
                  <p className="list-text">Versicherungen & Verträge online kündigen</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><BookOpen size={20} /></div>
                  <p className="list-text">Ein Erinnerungsbuch gestalten</p>
                </li>
              </ul>
              <p className="portal-outro">
                So behalten Sie auch in schweren Zeiten den Überblick.
              </p>
            </motion.div>

            {/* Right Column Login Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="login-card"
            >
              <div className="login-icon">
                <Lock size={60} />
              </div>
              <h3 className="login-title">Kunden-Portal</h3>
              <p className="login-text">
                Loggen Sie sich hier in Ihren persönlichen und geschützten Bereich ein.
              </p>
              <a 
                href="https://mein-kunden.center/login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary-portal"
              >
                Zum Portal anmelden
                <ArrowRight size={18} className="btn-icon" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. GDENKPORTAL SECTION */}
      <section className="memorial-section" id="gedenkportal">
        <div className="container">
          <div className="memorial-grid">
            {/* Video Box */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="memorial-video-wrapper"
            >
              <video 
                className="memorial-video" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source 
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/website-datein/Eberhardt%20Bestattung/gedenkportal_video.mp4" 
                  type="video/mp4" 
                />
                {/* Fallback to original m3u8 player or pexels candle loop if needed */}
                <source 
                  src="https://videos.pexels.com/video-files/5225433/5225433-hd_1080_1350_25fps.mp4" 
                  type="video/mp4" 
                />
              </video>
            </motion.div>

            {/* Content Box */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="memorial-content-box"
            >
              <div className="section-tag no-after">Gedenkportal</div>
              <h2 className="memorial-title">Erinnern verbindet</h2>
              <p className="memorial-intro">
                Über unser digitales Gedenkportal können Angehörige, Freunde und Wegbegleiter ortsunabhängig zusammenfinden und gemeinsam trauern.
              </p>
              
              <ul className="memorial-list">
                <li className="list-item">
                  <div className="list-icon"><FileText size={16} /></div>
                  <p className="list-text">Kondolenzen hinterlassen</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><Heart size={16} /></div>
                  <p className="list-text">Erinnerungen teilen</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><Flame size={16} /></div>
                  <p className="list-text">Kerzen entzünden</p>
                </li>
                <li className="list-item">
                  <div className="list-icon"><Calendar size={16} /></div>
                  <p className="list-text">Beisetzungstermine einsehen</p>
                </li>
              </ul>

              <p className="memorial-outro">
                Ein würdevoller Ort des digitalen Gedenkens.
              </p>

              <a 
                href="https://bestattungen-eberhardt.gemeinsam-trauern.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Zum Gedenkportal
                <ArrowRight size={18} className="btn-icon" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. BESTATTUNGSVORSORGE SECTION */}
      <section className="vorsorge-section" id="bestattungsvorsorge">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="vorsorge-header"
          >
            <div className="section-tag">Bestattungsvorsorge</div>
            <h2 className="vorsorge-title">Heute vorsorgen – <br /><strong>Angehörige entlasten.</strong></h2>
            <p className="vorsorge-intro">
              Eine Bestattungsvorsorge gibt Sicherheit und nimmt Ihren Liebsten in schweren Zeiten schwierige Entscheidungen ab.
            </p>
          </motion.div>

          {/* 4 Pillars Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="pillar-grid"
          >
            <motion.div variants={fadeUp} className="pillar-card">
              <span className="watermark">01</span>
              <div className="pillar-icon"><FileText size={22} /></div>
              <h3 className="pillar-title">Wünsche festhalten</h3>
              <p className="pillar-text">Ihre individuellen Wünsche detailliert und verbindlich dokumentiert.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="pillar-card">
              <span className="watermark">02</span>
              <div className="pillar-icon"><Lock size={22} /></div>
              <h3 className="pillar-title">Treuhandkonto</h3>
              <p className="pillar-text">Zweckgebundene und absolut sichere Finanzierung über ein Sperrkonto.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="pillar-card">
              <span className="watermark">03</span>
              <div className="pillar-icon"><Heart size={22} /></div>
              <h3 className="pillar-title">Sterbegeld</h3>
              <p className="pillar-text">Zuverlässige und unkomplizierte Absicherung durch unseren Partner.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="pillar-card">
              <span className="watermark">04</span>
              <div className="pillar-icon"><Clock size={22} /></div>
              <h3 className="pillar-title">Ruhe & Zeit</h3>
              <p className="pillar-text">Persönliche und einfühlsame Beratung völlig ohne Zeitdruck.</p>
            </motion.div>
          </motion.div>

          <div className="vorsorge-outro">
            <p className="outro-text">Wir informieren Sie unverbindlich über alle Möglichkeiten.</p>
          </div>

          {/* Erblotse App Window Frame */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="app-window"
          >
            <div className="app-header">
              <div className="app-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="app-title">Sicheres Portal: Digitale Vorsorge mit Erblotse</div>
            </div>
            <div className="app-body">
              <iframe 
                src="https://vererben.erblotse.de/p/eberhardt-bestattungen/?workflow=general" 
                title="Erblotse Vorsorge-Planer"
                className="erblotse-iframe"
              ></iframe>
              <div className="iframe-fallback">
                <p className="fallback-text">
                  Fehlt das Formular? Einige Browser blockieren die Anzeige aus Sicherheitsgründen.
                </p>
                <a 
                  href="https://vererben.erblotse.de/p/eberhardt-bestattungen/?workflow=general" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-fallback"
                >
                  Vorsorge-Planer in neuem Fenster öffnen
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Simple custom inline SVG Icons to match Zyro originals where Lucide is not enough
const CompassIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const TreeIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 22v-7l-3-3" />
    <path d="M12 15l3-3" />
    <path d="M15 12c0-3.5-3-6-3-6s-3 2.5-3 6 3 6 3 6 3-2.5 3-6z" />
  </svg>
);

export default HomePage;
