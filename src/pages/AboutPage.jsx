import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles, UserRound, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Frank Eberhardt",
    role: "Geprüfter Bestatter (Inhaber & Geschäftsführer)",
    bio: "Frank ist Inhaber und Geschäftsführer von Eberhardt Bestattungen. Gemeinsam mit seiner Schwester Andrea leitet er das Unternehmen. Bei akuten Sterbefällen sowie im Bereich der Bestattungsvorsorge steht er Ihnen mit seiner zugewandten Art beratend zur Seite.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Frank%20Eberhardt%20-%20Gepr%C3%BCfter%20Bestatter%20(Gesch%C3%A4ftsf%C3%BChrer)_ergebnis.webp"
  },
  {
    name: "Andrea Lemke",
    role: "Geprüfte Bestatterin (Inhaberin & Geschäftsführerin)",
    bio: "Andrea ist die erste Ansprechpartnerin, wenn es um das Unternehmen geht. Auch sie ist Inhaberin und Geschäftsführerin von Eberhardt Bestattungen. Sie kümmert sich um die betriebliche Verwaltung sowie um die Abrechnung und Buchhaltung.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Andrea%20Lemke%20-%20Gepr%C3%BCfte%20Bestatterin%20(Gesch%C3%A4ftsf%C3%BChrerin)_ergebnis.webp"
  },
  {
    name: "Oliver Eberhardt",
    role: "Geprüfter Bestatter",
    bio: "Olli begleitet mit seiner aufgeschlossenen und modernen Art Familien, die gerade einen geliebten Menschen verloren haben. Vom ersten Telefonat bis zur Trauerfeier und Beisetzung steht er ihnen zur Seite und unterstützt sie dabei, wichtige Entscheidungen zu treffen.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Oliver%20Eberhardt%20-%20Gepr%C3%BCfter%20Bestatter%20(2)_ergebnis.webp"
  },
  {
    name: "Maria Treetz",
    role: "Bestattungsfachkraft",
    bio: "Marias Hauptaufgaben liegen in den Bereichen Überführung, hygienische Versorgung und Trauerfeiern. Außerdem ist sie Ansprechpartnerin rund um das Thema Bestattungsvorsorge.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Maria%20Tretz%20-%20Bestattungsfachkraft_ergebnis.webp"
  },
  {
    name: "Flavia Kersting",
    role: "Auszubildende zur Bestattungsfachkraft",
    bio: "Flavia erlernt derzeit den Beruf der Bestattungsfachkraft. Ein festes Aufgabengebiet hat sie noch nicht. Um das vielfältige Berufsbild umfassend kennenzulernen, durchläuft sie während ihrer Ausbildung alle Bereiche, die zum Ablauf einer Bestattung gehören.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Flavia%20Kersting%20-%20Auszubildende%20zur%20Bestattungsfachkraft%20(2)_ergebnis.webp"
  },
  {
    name: "Nadine Brinkmann",
    role: "Bürokauffrau",
    bio: "Nadine ist die freundliche Stimme am Telefon und kümmert sich um die Verwaltung rund um Sterbefälle und Bestattungsvorsorgen in unserem Unternehmen.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Nadine%20Brinkmann%20-%20B%C3%BCrokauffrau_ergebnis.webp"
  },
  {
    name: "Henning Froböse",
    role: "Bestattungshelfer",
    bio: "Henning unterstützt uns im Bereich der Überführung Verstorbener. Mit seiner ruhigen Art begleitet er die Angehörigen beim Abschiednehmen im Trauerhaus.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Henning%20Frob%C3%B6se%20-%20Bestattungshelfer_ergebnis.webp"
  },
  {
    name: "Uwe Nicolai",
    role: "Bestattungshelfer",
    bio: "Auch Uwe ist im Bereich der Überführung Verstorbener tätig. Mit seiner langjährigen Erfahrung und seiner großen Empathie begleitet er Angehörige durch den schweren Prozess des Loslassens im Trauerhaus.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Eberhardt%20neu/Uwe%20Nicolai_12.webp?v=2"
  },
  {
    name: "Helga und Karl-Friedrich Eberhardt",
    role: "Seniorchefs",
    bio: "Helga und Kalle haben das Bestattungsunternehmen über Jahrzehnte hinweg geführt. Im Jahr 2013 zogen sie sich aus dem aktiven Berufsleben zurück und übergaben den Betrieb an ihre Kinder. Dennoch unterstützen sie uns weiterhin, beispielsweise durch die Übernahme des Telefondienstes außerhalb der Geschäftszeiten und an Wochenenden.",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Mitarbeiter/Helga%20und%20Karl-Friedrich%20Eberhardt%20-%20Seniorchef_s%20(Telefondienst)_ergebnis.webp"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const TeamMemberCard = ({ member, cardVariants }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <motion.div className="team-card" variants={cardVariants}>
      <div className="image-container">
        {member.image ? (
          <>
            {!isLoaded && <div className="shimmer-placeholder"></div>}
            <img 
              ref={imgRef}
              src={member.image} 
              alt={`${member.name} - ${member.role}`} 
              className={`team-image ${isLoaded ? 'loaded' : ''}`}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="image-overlay"></div>
          </>
        ) : (
          <div className="placeholder-image-container">
            <UserRound className="placeholder-icon" />
            <span className="placeholder-text">Bild folgt in Kürze</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <div className="member-role">{member.role}</div>
        <h2 className="member-name">{member.name}</h2>
        <p className="member-bio">{member.bio}</p>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  // Preload hero background and team images on mount
  useEffect(() => {
    const heroBg = new Image();
    heroBg.src = "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Eberhardt%20neu/M%C3%BCnchehagen%20Beratung_07.webp?v=2";

    teamMembers.forEach(member => {
      if (member.image) {
        const img = new Image();
        img.src = member.image;
      }
    });
  }, []);

  return (
    <div className="about-page-wrapper section-dark-textured">
      {/* 1. HERO SECTION (DAS SIND WIR) */}
      <section className="about-hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="modern-badge"
            style={{ margin: '0 auto 24px auto' }}
          >
            <div className="badge-dot"></div>
            <span className="badge-text">Das sind wir</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="about-hero-title text-center"
          >
            Gemeinsam an Ihrer Seite. <br className="hide-mobile" />
            <span className="highlight-hero">Persönlich &amp; Einfühlsam.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-hero-text text-center"
          >
            Ein Bestattungshaus ist nur so stark wie die Menschen, die dahinterstehen. 
            Als Familienunternehmen in dritter Generation stehen wir Ihnen bei jedem Schritt des Abschiednehmens 
            mit Herz, Verlässlichkeit und langjähriger Erfahrung zur Seite. Wir fangen Sie im Trauerfall auf 
            und begleiten Sie kompetent und respektvoll.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section container">
        <motion.div 
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="value-card" variants={cardVariants}>
            <div className="value-icon-box">
              <Heart className="value-icon" />
            </div>
            <h3>Empathie &amp; Fürsorge</h3>
            <p>Wir begegnen jeder Familie mit tiefem Mitgefühl. Zuhören und da sein, wenn Sie uns brauchen – das ist unser Verständnis von wahrer Begleitung.</p>
          </motion.div>

          <motion.div className="value-card" variants={cardVariants}>
            <div className="value-icon-box">
              <ShieldCheck className="value-icon" />
            </div>
            <h3>Würde &amp; Kompetenz</h3>
            <p>Vom ersten Gespräch über die hygienische Versorgung bis zur Gestaltung der Trauerfeier – wir sichern Ihnen höchste Professionalität und Würde zu.</p>
          </motion.div>

          <motion.div className="value-card" variants={cardVariants}>
            <div className="value-icon-box">
              <Users className="value-icon" />
            </div>
            <h3>Familientradition</h3>
            <p>Als inhabergeführtes Familienunternehmen stehen wir mit unserem Namen für Vertrauenswürdigkeit, Kontinuität und tiefe regionale Verbundenheit.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Standorte Section */}
      <section className="standorte-section" id="standorte" style={{ marginTop: '90px' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="standorte-header text-center"
          >
            <div className="section-tag" style={{ justifyContent: 'center' }}>Regionale Verbundenheit</div>
            <h2 className="section-title text-center" style={{ textAlign: 'center' }}>
              Unsere Standorte <br /><strong>Seit Generationen an Ihrer Seite.</strong>
            </h2>
            <p className="standorte-intro" style={{ margin: '20px auto 0 auto' }}>
              Mit unseren drei Standorten in Münchehagen, Stolzenau und Petershagen (Lahde) 
              begleiten wir Sie persönlich, einfühlsam und zuverlässig direkt vor Ort.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="standorte-grid"
          >
            {/* Standort 1: Münchehagen */}
            <motion.div variants={cardVariants} className="standort-card">
              <div className="standort-card-image-wrap">
                <img 
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Eberhardt%20neu/Stammhaus_08.webp?v=2" 
                  alt="Eberhardt Bestattungen Münchehagen Stammhaus" 
                  className="standort-card-img"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="360"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="standort-image-placeholder" style={{ display: 'none' }}>
                  <MapPin size={36} className="placeholder-icon" />
                  <span>Filiale Münchehagen</span>
                </div>
                <div className="standort-year-badge">Seit 1956</div>
              </div>
              <div className="standort-card-body">
                <span className="standort-subline">Stammsitz</span>
                <h3 className="standort-name">Münchehagen</h3>
                <p className="standort-desc">
                  Seit über 70 Jahren unser traditionsreicher Hauptsitz in der Region Rehburg-Loccum.
                </p>
                <div className="standort-meta-list">
                  <div className="standort-meta-item">
                    <MapPin size={18} className="meta-icon" />
                    <span>Bergmannstraße 20, 31547 Rehburg-Loccum</span>
                  </div>
                  <div className="standort-meta-item">
                    <Phone size={18} className="meta-icon" />
                    <a href="tel:050371222">05037 - 1222</a>
                  </div>
                  <div className="standort-meta-item">
                    <Clock size={18} className="meta-icon" />
                    <span>Mo. – Fr. 08.00 – 17.00 Uhr (24h erreichbar)</span>
                  </div>
                </div>
                <div className="standort-actions">
                  <a 
                    href="https://maps.app.goo.gl/R1x2GviWgSf8o8BUA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-standort-link"
                  >
                    Route planen
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Standort 2: Stolzenau */}
            <motion.div variants={cardVariants} className="standort-card">
              <div className="standort-card-image-wrap">
                <img 
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Eberhardt%20neu/Filiale%20Stolzenau_02.webp?v=2" 
                  alt="Eberhardt Bestattungen Filiale Stolzenau" 
                  className="standort-card-img"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="360"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="standort-image-placeholder" style={{ display: 'none' }}>
                  <MapPin size={36} className="placeholder-icon" />
                  <span>Filiale Stolzenau</span>
                </div>
                <div className="standort-year-badge">Seit 2014</div>
              </div>
              <div className="standort-card-body">
                <span className="standort-subline">Zweigstelle</span>
                <h3 className="standort-name">Stolzenau</h3>
                <p className="standort-desc">
                  Ihre verlässliche Anlaufstelle direkt im Zentrum von Stolzenau an der Weser.
                </p>
                <div className="standort-meta-list">
                  <div className="standort-meta-item">
                    <MapPin size={18} className="meta-icon" />
                    <span>Lange Straße 5, 31592 Stolzenau</span>
                  </div>
                  <div className="standort-meta-item">
                    <Phone size={18} className="meta-icon" />
                    <a href="tel:057612000">05761 - 2000</a>
                  </div>
                  <div className="standort-meta-item">
                    <Clock size={18} className="meta-icon" />
                    <span>Di. 10.00 – 12.00 Uhr &amp; Do. 16.00 – 18.00 Uhr</span>
                  </div>
                </div>
                <div className="standort-actions">
                  <a 
                    href="https://www.google.com/maps/place/Lange+Str.+5,+31592+Stolzenau/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-standort-link"
                  >
                    Route planen
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Standort 3: Petershagen (Lahde) */}
            <motion.div variants={cardVariants} className="standort-card">
              <div className="standort-card-image-wrap">
                <div className="standort-image-placeholder">
                  <MapPin size={38} className="placeholder-icon" />
                  <span style={{ fontWeight: 600, letterSpacing: '0.3px' }}>Eröffnung 2026</span>
                  <span style={{ color: 'var(--eb-text-muted-light)', fontSize: '0.85rem' }}>Bilder folgen in Kürze</span>
                </div>
                <div className="standort-year-badge">Seit 2026</div>
              </div>
              <div className="standort-card-body">
                <span className="standort-subline">Neue Zweigstelle</span>
                <h3 className="standort-name">Petershagen (Lahde)</h3>
                <p className="standort-desc">
                  Unsere neue Filiale zur persönlichen Betreuung aller Angehörigen in Petershagen und Umgebung.
                </p>
                <div className="standort-meta-list">
                  <div className="standort-meta-item">
                    <MapPin size={18} className="meta-icon" />
                    <span>Bahnhofstraße 59, 32469 Petershagen (Lahde)</span>
                  </div>
                  <div className="standort-meta-item">
                    <Phone size={18} className="meta-icon" />
                    <a href="tel:057028398585">05702 - 839 85 85</a>
                  </div>
                  <div className="standort-meta-item">
                    <Clock size={18} className="meta-icon" />
                    <span>Dienstag 14.00 – 16.00 Uhr</span>
                  </div>
                </div>
                <div className="standort-actions">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Bahnhofstra%C3%9Fe+59+32469+Petershagen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-standort-link"
                  >
                    Route planen
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="team-section container" id="team" style={{ marginTop: '120px' }}>
        <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '30px' }}>
          Unser Team
        </div>
        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
          Die Menschen hinter <br /><strong>Eberhardt Bestattungen</strong>
        </h2>
        
        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard 
              key={member.name}
              member={member}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>
      </section>

      <style>{`
        .about-page-wrapper {
          padding-top: 0;
          padding-bottom: 120px;
          background-color: var(--eb-dark-bg);
          font-family: var(--font-sans);
          color: var(--eb-text-white);
        }

        #standorte, #team {
          scroll-margin-top: 120px;
        }

        /* === ABOUT HERO MIT ECHTEM HINTERGRUNDBILD === */
        .about-hero-section {
          position: relative;
          width: 100%;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 190px 0 110px 0;
          box-sizing: border-box;
          background-image: linear-gradient(180deg, rgba(14, 16, 14, 0.78) 0%, rgba(18, 20, 18, 0.72) 60%, rgba(18, 20, 18, 0.98) 100%),
                            url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/Eberhardt%20neu/M%C3%BCnchehagen%20Beratung_07.webp?v=2');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          text-align: center;
          margin-bottom: 60px;
        }

        .about-hero-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vh;
          background: radial-gradient(circle, rgba(133, 163, 31, 0.12) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .about-hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          background: linear-gradient(to bottom, transparent, var(--eb-dark-bg));
          pointer-events: none;
          z-index: 1;
        }

        .about-hero-section .container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.3rem, 4.5vw, 3.8rem);
          font-weight: 500;
          line-height: 1.18;
          color: var(--eb-text-white);
          margin-bottom: 24px;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.7);
        }

        .about-hero-title .highlight-hero {
          color: var(--eb-green-light);
          font-weight: 600;
          text-shadow: 0 2px 14px rgba(133, 163, 31, 0.35);
        }

        .about-hero-text {
          max-width: 850px;
          margin: 0 auto;
          font-size: clamp(1.05rem, 1.25vw, 1.2rem);
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 768px) {
          .about-hero-section {
            padding: 140px 5% 70px 5%;
            min-height: auto;
            background-attachment: scroll;
          }
          .about-hero-title {
            font-size: 2.1rem;
          }
        }

        /* Values styling */
        .values-section {
          margin-bottom: 100px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 968px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .value-card {
          background-color: var(--eb-dark-card);
          border: 1px solid var(--eb-border-dark);
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          transition: var(--transition-smooth);
        }

        .value-card:hover {
          border-color: var(--eb-green-light);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(133, 163, 31, 0.08);
        }

        .value-icon-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background-color: rgba(133, 163, 31, 0.1);
          border-radius: 50%;
          margin-bottom: 24px;
          color: var(--eb-green-light);
        }

        .value-icon {
          width: 28px;
          height: 28px;
        }

        .value-card h3 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 16px;
          color: var(--eb-text-white);
        }

        .value-card p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--eb-text-muted-light);
          font-weight: 300;
        }

        /* Team styling */
        .team-section {
          margin-top: 60px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .team-card {
          background-color: var(--eb-dark-card);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--eb-border-dark);
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: var(--eb-green-light);
          box-shadow: 0 20px 40px rgba(133, 163, 31, 0.12);
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.02);
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shimmer-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #1c1f1c 25%, #252825 50%, #1c1f1c 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite linear;
          z-index: 1;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out;
          opacity: 0;
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          z-index: 2;
          position: relative;
        }

        .team-image.loaded {
          opacity: 1;
        }

        .team-card:hover .team-image {
          transform: scale(1.05) translate3d(0, 0, 0);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(22, 24, 22, 0.6) 0%, rgba(22, 24, 22, 0) 50%);
          pointer-events: none;
        }

        .placeholder-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1c1f1c 0%, #111311 100%);
          color: var(--eb-green-light);
          position: relative;
        }

        .placeholder-icon {
          width: 48px;
          height: 48px;
          opacity: 0.6;
          margin-bottom: 12px;
          stroke-width: 1.5;
        }

        .placeholder-text {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.5;
        }

        .card-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .member-role {
          font-family: var(--font-sans);
          color: var(--eb-green-light);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .member-name {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--eb-text-white);
          margin-bottom: 16px;
        }

        .member-bio {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--eb-text-muted-light);
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
