import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="legal-page-wrapper section-padding section-dark-textured">
      <div className="container legal-container">
        <h1 className="legal-title">Datenschutzerklärung</h1>

        <div className="legal-section">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.<br />
            Die Nutzung unserer Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Sofern personenbezogene Daten erhoben werden, erfolgt dies ausschließlich im Rahmen der gesetzlichen Vorschriften der Datenschutz-Grundverordnung (DSGVO).
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Verantwortlicher für die Datenverarbeitung</h2>
          <p>
            <strong>Eberhardt GmbH &amp; Co. KG</strong><br />
            Bergmannstraße 15<br />
            31547 Rehburg-Loccum<br />
            Deutschland
          </p>
          <p style={{ marginTop: '10px' }}>
            Telefon: 05037 – 1222<br />
            E-Mail: <a href="mailto:info@bestattungen-eberhardt.de" className="legal-link">info@bestattungen-eberhardt.de</a>
          </p>
          <p style={{ marginTop: '10px' }}>
            Vertreten durch:<br />
            Eberhardt Verwaltungs GmbH<br />
            Geschäftsführer: Frank Eberhardt und Andrea Lemke
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Hosting</h2>
          <p>Unsere Website wird bei folgendem Anbieter gehostet:</p>
          <p style={{ margin: '10px 0' }}>
            <strong>Scholz &amp; Friese Webdesign</strong><br />
            Auf dem Kampe 6a<br />
            31582 Nienburg (Weser)<br />
            Deutschland
          </p>
          <p>
            Im Rahmen des Hostings werden personenbezogene Daten verarbeitet, die beim Besuch der Website automatisch erfasst werden (z. B. IP-Adressen in Server-Logfiles).
          </p>
          <p style={{ marginTop: '10px' }}>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website).
          </p>
          <p style={{ marginTop: '10px' }}>
            Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Server-Log-Dateien</h2>
          <p>Beim Aufruf unserer Website werden automatisch folgende Daten erfasst:</p>
          <ul className="legal-list">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            Diese Daten dienen ausschließlich der technischen Sicherheit und Stabilität der Website.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Cookies</h2>
          <p>Unsere Website verwendet Cookies.</p>
          <p style={{ marginTop: '10px' }}>
            Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unser Angebot technisch bereitzustellen und nutzerfreundlich zu gestalten.
          </p>
          <p style={{ marginTop: '10px' }}>Wir verwenden:</p>
          <ul className="legal-list">
            <li>Technisch notwendige Cookies</li>
            <li>Externe Dienste (z. B. Google Maps, Google Bewertungen)</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            Nicht notwendige Cookies werden ausschließlich mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gesetzt.
          </p>
          <p style={{ marginTop: '10px' }}>
            Sie können Ihre Einwilligung jederzeit über unser Cookie-Consent-Tool widerrufen.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zwecks Bearbeitung Ihrer Anfrage gespeichert.
          </p>
          <p style={{ marginTop: '10px' }}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Google Maps</h2>
          <p>Diese Website nutzt Google Maps zur Darstellung interaktiver Karten.</p>
          <p style={{ margin: '10px 0' }}>
            Anbieter:<br />
            Google Ireland Limited<br />
            Gordon House, Barrow Street<br />
            Dublin 4, Irland
          </p>
          <p>
            Beim Laden von Google Maps kann Ihre IP-Adresse an Google übertragen werden.
          </p>
          <p style={{ marginTop: '10px' }}>
            Google Maps wird nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO geladen.
          </p>
          <p style={{ marginTop: '10px' }}>
            Weitere Informationen:<br />
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="legal-link"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Google Bewertungen</h2>
          <p>Auf unserer Website können Google-Bewertungen eingebunden sein.</p>
          <p>Anbieter ist ebenfalls Google Ireland Limited.</p>
          <p style={{ marginTop: '10px' }}>
            Beim Laden der Bewertungsfunktion können personenbezogene Daten (z. B. IP-Adresse) an Google übertragen werden.
          </p>
          <p style={{ marginTop: '10px' }}>
            Die Einbindung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Instagram</h2>
          <p>Auf unserer Website ist ein Link zu unserem Instagram-Profil eingebunden.</p>
          <p style={{ margin: '10px 0' }}>
            Anbieter:<br />
            Meta Platforms Ireland Ltd.<br />
            4 Grand Canal Square<br />
            Dublin 2, Irland
          </p>
          <p>
            Wenn Sie auf den Instagram-Link klicken, verlassen Sie unsere Website.<br />
            Für die Datenverarbeitung auf Instagram ist ausschließlich Meta verantwortlich.
          </p>
          <p style={{ marginTop: '10px' }}>
            Weitere Informationen:<br />
            <a 
              href="https://privacycenter.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="legal-link"
            >
              https://privacycenter.instagram.com/
            </a>
          </p>
        </div>

        <div className="legal-section">
          <h2>10. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul className="legal-list">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
          </p>
          <p style={{ marginTop: '15px' }}>
            Zuständige Aufsichtsbehörde in Niedersachsen:
          </p>
          <p style={{ marginTop: '5px' }}>
            Der Landesbeauftragte für den Datenschutz Niedersachsen<br />
            Prinzenstraße 5<br />
            30159 Hannover
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

        .legal-section h3 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--eb-text-white);
          margin-bottom: 10px;
          margin-top: 15px;
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

export default PrivacyPage;
