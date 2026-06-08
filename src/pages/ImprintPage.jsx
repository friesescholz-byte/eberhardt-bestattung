import React from 'react';

const ImprintPage = () => {
  return (
    <div className="legal-page-wrapper section-padding section-dark-textured">
      <div className="container legal-container">
        <h1 className="legal-title">Impressum</h1>
        
        <div className="legal-section">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            <strong>Eberhardt GmbH &amp; Co. KG</strong><br />
            Bergmannstraße 15<br />
            31547 Rehburg-Loccum<br />
            Deutschland
          </p>
        </div>

        <div className="legal-section">
          <h2>Kontakt</h2>
          <p>
            Telefon: 05037 – 1222<br />
            Fax: 05037 – 1683<br />
            E-Mail: <a href="mailto:info@bestattungen-eberhardt.de" className="legal-link">info@bestattungen-eberhardt.de</a>
          </p>
        </div>

        <div className="legal-section">
          <h2>Vertreten durch</h2>
          <p>
            <strong>Eberhardt Verwaltungs GmbH</strong><br />
            Registergericht: Amtsgericht Walsrode<br />
            Registernummer: HRB 204102
          </p>
          <p style={{ marginTop: '10px' }}>
            Vertreten durch die Geschäftsführer:<br />
            Frank Eberhardt<br />
            Andrea Lemke
          </p>
        </div>

        <div className="legal-section">
          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: Amtsgericht Walsrode<br />
            Registernummer: HRA 202096
          </p>
        </div>

        <div className="legal-section">
          <h2>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz</h2>
          <p>DE287256151</p>
        </div>

        <div className="legal-section">
          <h2>Hinweis auf EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit:<br />
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="legal-link"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p style={{ marginTop: '10px' }}>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div className="legal-section">
          <h2>Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)</h2>
          <p>
            Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div className="legal-section">
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Frank Eberhardt<br />
            Andrea Lemke<br />
            (Anschrift wie oben)
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

export default ImprintPage;
