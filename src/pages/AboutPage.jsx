import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles, UserRound } from 'lucide-react';

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
    name: "Maria Tretz",
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
    image: null // Placeholder!
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

const AboutPage = () => {
  return (
    <div className="about-page-wrapper section-dark-textured">
      {/* Intro Header Section */}
      <section className="about-intro-section container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-tag"
          style={{ justifyContent: 'center' }}
        >
          Das sind wir
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-center"
          style={{ textAlign: 'center' }}
        >
          Gemeinsam an Ihrer Seite. <strong>Persönlich &amp; Einfühlsam.</strong>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="about-intro-text"
        >
          Ein Bestattungshaus ist nur so stark wie die Menschen, die hinter ihm stehen. Als Familienunternehmen in zweiter Generation stehen wir Ihnen bei jedem Schritt des Abschiednehmens mit Herz, Verlässlichkeit und langjähriger Erfahrung zur Seite. Wir fangen Sie im Trauerfall auf und begleiten Sie kompetent und respektvoll.
        </motion.p>
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

      {/* Team Grid Section */}
      <section className="team-section container">
        <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '40px' }}>
          Unser Team
        </div>
        
        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="team-card" 
              variants={cardVariants}
            >
              <div className="image-container">
                {member.image ? (
                  <>
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`} 
                      className="team-image"
                      loading="lazy"
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
          ))}
        </motion.div>
      </section>

      <style>{`
        .about-page-wrapper {
          padding-top: 180px;
          padding-bottom: 120px;
          background-color: var(--eb-dark-bg);
          font-family: var(--font-sans);
          color: var(--eb-text-white);
        }

        .about-intro-section {
          text-align: center;
          margin-bottom: 70px;
        }

        .about-intro-text {
          max-width: 850px;
          margin: 30px auto 0 auto;
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--eb-text-muted-light);
          font-weight: 300;
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

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .team-card:hover .team-image {
          transform: scale(1.05);
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
