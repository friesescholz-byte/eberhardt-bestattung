import React from 'react';

const AccessibilityPage = () => {
  return (
    <div className="legal-page-wrapper section-padding section-dark-textured">
      <div className="container legal-container">
        <h1 className="legal-title">Barrierefreiheitserklärung</h1>
        
        <div className="legal-section">
          <p><strong>Stand: 10. März 2026</strong></p>
          <p style={{ marginTop: '15px' }}>
            Die Betreiberin dieser Website legt großen Wert auf eine möglichst barrierefreie Zugänglichkeit der Inhalte.
            Die Website wurde unter Berücksichtigung aktueller Anforderungen an digitale Barrierefreiheit gestaltet und wird kontinuierlich weiter optimiert.
          </p>
          <p style={{ marginTop: '10px' }}>
            Rechtsgrundlagen sind das Niedersächsische Behindertengleichstellungsgesetz (NBGG), die Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) sowie der European Accessibility Act (EAA) für private Dienstleistungen.
          </p>
        </div>

        <div className="legal-section">
          <h2>Stand der Vereinbarkeit</h2>
          <p>
            Diese Website ist wegen der folgenden Ausnahmen teilweise mit den Anforderungen zur barrierefreien Gestaltung vereinbar:
          </p>
          <ul className="legal-list">
            <li>Einige ältere PDF-Dokumente und Formulare sind nicht vollständig barrierefrei.</li>
            <li>Integrierte Kartendienste (z. B. Google Maps) können Einschränkungen in der Tastaturbedienung aufweisen.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Barrieren melden (Feedback-Mechanismus)</h2>
          <p>
            Sollten Ihnen Mängel bei der barrierefreien Gestaltung unserer Website auffallen, können Sie uns diese gerne mitteilen.
            Nutzen Sie hierfür bitte unsere E-Mail-Adresse:
          </p>
          <p style={{ marginTop: '15px' }}>
            E-Mail: <a href="mailto:info@bestattungen-eberhardt.de" className="legal-link">info@bestattungen-eberhardt.de</a>
          </p>
        </div>

        <div className="legal-section">
          <h2>Schlichtungsverfahren</h2>
          <p>
            Bei nicht zufriedenstellenden Antworten aus dem Feedback-Mechanismus können Sie sich an die Schlichtungsstelle wenden.
            Die Schlichtungsstelle hat die Aufgabe, bei Konflikten zum Thema Barrierefreiheit zwischen Menschen mit Behinderungen und öffentlichen Stellen bzw. Dienstleistern des Landes eine außergerichtliche Streitbeilegung zu unterstützen.
          </p>
          <p style={{ marginTop: '15px' }}>
            <strong>Schlichtungsstelle bei der Landesbeauftragten für Menschen mit Behinderungen in Niedersachsen</strong><br />
            Hannah-Arendt-Platz 2<br />
            30159 Hannover
          </p>
          <p style={{ marginTop: '10px' }}>
            E-Mail: <a href="mailto:schlichtungsstelle@ms.niedersachsen.de" className="legal-link">schlichtungsstelle@ms.niedersachsen.de</a>
          </p>
        </div>
      </div>

      <style>{`
        .legal-page-wrapper {
          padding-top: 160px;
          padding-bottom: 100px;
          background-color: var(--eb-dark-bg);
          font-family: var(--font-sans);
          color: var(--eb-text-white);
          line-height: 1.8;
        }

        .legal-container {
          max-width: 800px;
        }

        .legal-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: var(--eb-green-light);
          margin-bottom: 40px;
          border-bottom: 1px solid var(--eb-border-dark);
          padding-bottom: 20px;
        }

        .legal-section {
          margin-bottom: 40px;
        }

        .legal-section h2 {
          font-family: var(--font-sans);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--eb-green-light);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .legal-section p {
          color: var(--eb-text-muted-light);
          font-size: 1.05rem;
        }

        .legal-list {
          list-style-type: disc;
          padding-left: 20px;
          margin-top: 10px;
          color: var(--eb-text-muted-light);
          font-size: 1.05rem;
        }

        .legal-list li {
          margin-bottom: 8px;
        }

        .legal-link {
          color: var(--eb-green);
          text-decoration: underline;
        }

        .legal-link:hover {
          color: var(--eb-green-light);
        }
      `}</style>
    </div>
  );
};

export default AccessibilityPage;
