import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Stolzenau */}
          <div className="footer-col">
            <h3 className="footer-title">Stolzenau</h3>
            <ul className="footer-links">
              <li>
                <MapPin className="footer-icon" />
                <a 
                  href="https://www.google.com/maps/place/Lange+Str.+5,+31592+Stolzenau/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Lange Straße 5<br />31592 Stolzenau
                </a>
              </li>
              <li>
                <Phone className="footer-icon" />
                <a href="tel:057612000">05761 - 2000</a>
              </li>
              <li>
                <Clock className="footer-icon" />
                <span>
                  <strong>Öffnungszeiten:</strong><br />
                  Mo. – Fr. 08.00 – 17.00 Uhr
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Rehburg-Loccum */}
          <div className="footer-col">
            <h3 className="footer-title">Rehburg-Loccum</h3>
            <ul className="footer-links">
              <li>
                <MapPin className="footer-icon" />
                <a 
                  href="https://maps.app.goo.gl/R1x2GviWgSf8o8BUA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Bergmannstraße 20<br />31547 Rehburg-Loccum
                </a>
              </li>
              <li>
                <Phone className="footer-icon" />
                <a href="tel:050371222">05037 - 1222</a>
              </li>
              <li>
                <Clock className="footer-icon" />
                <span>
                  <strong>Öffnungszeiten:</strong><br />
                  Di. 10.00 – 12.00 Uhr<br />
                  Do. 16.00 – 18.00 Uhr
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontakt & Info */}
          <div className="footer-col">
            <h3 className="footer-title">Kontakt</h3>
            <ul className="footer-links">
              <li>
                <Mail className="footer-icon" />
                <a href="mailto:info@bestattungen-eberhardt.de">info@bestattungen-eberhardt.de</a>
              </li>
            </ul>
            <div className="footer-review-box">
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJm39_BJaasEcRQHJjZ0XKi38" 
                target="_blank" 
                rel="noopener noreferrer"
                className="review-btn"
              >
                <Star className="review-icon" />
                Google Bewertung
              </a>
            </div>
          </div>

          {/* Column 4: Logo & Legal */}
          <div className="footer-col footer-branding">
            <img 
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/eberhardt-logo-rgb-white-J3fS5LBOMqJVo2w7.webp" 
              alt="Eberhardt Bestattungen" 
              className="footer-logo"
            />
            <div className="footer-legal-links">
              <Link to="/impressum" className="footer-legal-link">Impressum</Link>
              <Link to="/datenschutz" className="footer-legal-link">Datenschutz</Link>
              <Link to="/barrierefreiheit" className="footer-legal-link">Barrierefreiheitserklärung</Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; 2026. Eberhardt Bestattung. Alle Rechte vorbehalten.
          </p>
          <p className="agency-credit">
            Website by{' '}
            <a 
              href="https://scholz-friese-webdesign.de/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Scholz-Friese-Webdesign
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--eb-dark-bg);
          border-top: 1px solid var(--eb-border-dark);
          padding: 80px 0 30px 0;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--eb-text-muted-light);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        .footer-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--eb-text-white);
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: var(--eb-green);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-links li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.5;
        }

        .footer-icon {
          width: 18px;
          height: 18px;
          color: var(--eb-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-links a:hover {
          color: var(--eb-green-light);
        }

        .footer-review-box {
          margin-top: 25px;
        }

        .review-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #e74133;
          color: #fff;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(231, 65, 51, 0.2);
          transition: var(--transition-smooth);
        }

        .review-btn:hover {
          background-color: #c93528;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(231, 65, 51, 0.3);
        }

        .review-icon {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .footer-branding {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 25px;
        }

        .footer-logo {
          height: 55px;
          object-fit: contain;
        }

        .footer-legal-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-legal-link {
          color: var(--eb-text-muted-light);
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .footer-legal-link:hover {
          opacity: 1;
          color: var(--eb-green-light);
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid var(--eb-border-dark);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }

        .copyright-text {
          margin: 0;
        }

        .agency-credit a {
          font-weight: 600;
          color: var(--eb-text-white);
        }

        .agency-credit a:hover {
          color: var(--eb-green-light);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
