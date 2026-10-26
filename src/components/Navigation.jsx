import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronDown, MapPin, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ueberUnsHovered, setUeberUnsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on page change
  useEffect(() => {
    setIsOpen(false);
    setUeberUnsHovered(false);
  }, [location]);

  const handleLinkClick = (path) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img 
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Eberhardt%20Bestattung/eberhardt-logo-rgb-white-J3fS5LBOMqJVo2w7.webp" 
            alt="Eberhardt Bestattungen Logo" 
            className="logo-img" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
          >
            Startseite
          </Link>

          {/* Über uns mit Dropdown (Standorte & Team) */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setUeberUnsHovered(true)}
            onMouseLeave={() => setUeberUnsHovered(false)}
          >
            <Link 
              to="/ueber-uns" 
              className={`nav-link nav-link-dropdown ${location.pathname === '/ueber-uns' ? 'active' : ''}`}
            >
              Über uns
              <ChevronDown size={14} className={`dropdown-chevron ${ueberUnsHovered ? 'rotated' : ''}`} />
            </Link>

            <div className={`nav-dropdown-menu ${ueberUnsHovered ? 'visible' : ''}`}>
              <Link 
                to="/ueber-uns#standorte"
                onClick={() => {
                  handleLinkClick('/ueber-uns#standorte');
                  setUeberUnsHovered(false);
                }}
                className={`nav-dropdown-item ${location.pathname === '/ueber-uns' && location.hash === '#standorte' ? 'active' : ''}`}
              >
                <div className="nav-dropdown-icon">
                  <MapPin size={16} />
                </div>
                <div className="nav-dropdown-text">
                  <span className="dropdown-item-title">Unsere Standorte</span>
                  <span className="dropdown-item-desc">Münchehagen, Stolzenau &amp; Lahde</span>
                </div>
              </Link>

              <Link 
                to="/ueber-uns#team"
                onClick={() => {
                  handleLinkClick('/ueber-uns#team');
                  setUeberUnsHovered(false);
                }}
                className={`nav-dropdown-item ${location.pathname === '/ueber-uns' && location.hash === '#team' ? 'active' : ''}`}
              >
                <div className="nav-dropdown-icon">
                  <Users size={16} />
                </div>
                <div className="nav-dropdown-text">
                  <span className="dropdown-item-title">Unser Team</span>
                  <span className="dropdown-item-desc">Familientradition in 3. Generation</span>
                </div>
              </Link>
            </div>
          </div>

          <a 
            href="/#leistungen"
            onClick={() => handleLinkClick('/#leistungen')}
            className="nav-link"
          >
            Leistungen
          </a>

          <a 
            href="/#bestattungen"
            onClick={() => handleLinkClick('/#bestattungen')}
            className="nav-link"
          >
            Bestattungsarten
          </a>

          <a 
            href="/#bestattungsvorsorge"
            onClick={() => handleLinkClick('/#bestattungsvorsorge')}
            className="nav-link"
          >
            Vorsorge
          </a>

          <Link 
            to="/kontakt" 
            className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`}
          >
            Kontakt
          </Link>
        </div>

        {/* CTA 24h Call Button */}
        <div className="nav-cta-desktop dropdown-wrapper" tabIndex="0">
          <button className="nav-cta-btn">
            <PhoneCall className="cta-icon" />
            24h Notruf
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
            <a href="tel:057028398585">
              <span className="location">Petershagen (Lahde)</span>
              05702 - 839 85 85
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="nav-mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-drawer"
          >
            <div className="nav-mobile-links">
              <Link 
                to="/"
                onClick={() => setIsOpen(false)}
                className={`nav-mobile-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
              >
                Startseite
              </Link>

              {/* Über uns Group with Standorte & Team Sub-links */}
              <div className="nav-mobile-group">
                <Link 
                  to="/ueber-uns" 
                  onClick={() => setIsOpen(false)}
                  className={`nav-mobile-link ${location.pathname === '/ueber-uns' && !location.hash ? 'active' : ''}`}
                >
                  Über uns
                </Link>
                <div className="nav-mobile-sublinks">
                  <Link 
                    to="/ueber-uns#standorte"
                    onClick={() => {
                      handleLinkClick('/ueber-uns#standorte');
                      setIsOpen(false);
                    }}
                    className={`nav-mobile-sublink ${location.pathname === '/ueber-uns' && location.hash === '#standorte' ? 'active' : ''}`}
                  >
                    <MapPin size={15} className="sublink-icon" />
                    <span>Unsere Standorte</span>
                  </Link>
                  <Link 
                    to="/ueber-uns#team"
                    onClick={() => {
                      handleLinkClick('/ueber-uns#team');
                      setIsOpen(false);
                    }}
                    className={`nav-mobile-sublink ${location.pathname === '/ueber-uns' && location.hash === '#team' ? 'active' : ''}`}
                  >
                    <Users size={15} className="sublink-icon" />
                    <span>Unser Team</span>
                  </Link>
                </div>
              </div>

              <a 
                href="/#leistungen"
                onClick={() => {
                  handleLinkClick('/#leistungen');
                  setIsOpen(false);
                }}
                className="nav-mobile-link"
              >
                Leistungen
              </a>

              <a 
                href="/#bestattungen"
                onClick={() => {
                  handleLinkClick('/#bestattungen');
                  setIsOpen(false);
                }}
                className="nav-mobile-link"
              >
                Bestattungsarten
              </a>

              <a 
                href="/#bestattungsvorsorge"
                onClick={() => {
                  handleLinkClick('/#bestattungsvorsorge');
                  setIsOpen(false);
                }}
                className="nav-mobile-link"
              >
                Vorsorge
              </a>

              <Link 
                to="/kontakt" 
                onClick={() => setIsOpen(false)}
                className={`nav-mobile-link ${location.pathname === '/kontakt' ? 'active' : ''}`}
              >
                Kontakt
              </Link>
              <div className="mobile-cta-section">
                <p className="mobile-cta-title">24h Rufbereitschaft</p>
                <div className="mobile-cta-calls">
                  <a href="tel:050371222" className="mobile-cta-call">
                    <span>Münchehagen:</span> 05037 - 1222
                  </a>
                  <a href="tel:057612000" className="mobile-cta-call">
                    <span>Stolzenau:</span> 05761 - 2000
                  </a>
                  <a href="tel:057028398585" className="mobile-cta-call">
                    <span>Petershagen (Lahde):</span> 05702 - 839 85 85
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: linear-gradient(180deg, rgba(14, 16, 14, 0.85) 0%, rgba(14, 16, 14, 0.5) 60%, rgba(14, 16, 14, 0) 100%);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          transition: var(--transition-smooth);
          padding: 18px 0 26px 0;
        }

        .nav-header.scrolled {
          background: rgba(18, 20, 18, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          padding: 10px 0;
        }

        .nav-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-img {
          height: 54px;
          object-fit: contain;
          transition: var(--transition-smooth);
        }

        .nav-header.scrolled .logo-img {
          height: 44px;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: clamp(14px, 1.8vw, 26px);
          flex-shrink: 1;
        }

        @media (max-width: 1024px) {
          .nav-links-desktop {
            display: none;
          }
        }

        .nav-link {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--eb-text-white);
          opacity: 0.9;
          position: relative;
          padding: 8px 0;
          white-space: nowrap;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          transition: var(--transition-fast);
        }

        .nav-link:hover, .nav-link.active {
          opacity: 1;
          color: var(--eb-green-light);
          text-shadow: 0 1px 6px rgba(133, 163, 31, 0.4);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--eb-green-light);
          transition: var(--transition-smooth);
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        /* Dropdown Über uns */
        .nav-item-dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }

        .nav-link-dropdown {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .dropdown-chevron {
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 0.8;
        }

        .nav-item-dropdown:hover .dropdown-chevron,
        .dropdown-chevron.rotated {
          transform: rotate(180deg);
          color: var(--eb-green-light);
        }

        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          min-width: 290px;
          background: rgba(18, 20, 18, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.22s ease;
          z-index: 1010;
        }

        /* Hover bridge so moving mouse from link to menu does not close it */
        .nav-dropdown-menu::before {
          content: '';
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 16px;
        }

        .nav-item-dropdown:hover .nav-dropdown-menu,
        .nav-dropdown-menu.visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          color: var(--eb-text-white);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-dropdown-item:hover {
          background: rgba(133, 163, 31, 0.12);
          transform: translateX(3px);
        }

        .nav-dropdown-item.active {
          background: rgba(133, 163, 31, 0.16);
        }

        .nav-dropdown-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(133, 163, 31, 0.12);
          color: var(--eb-green-light);
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .nav-dropdown-item:hover .nav-dropdown-icon {
          background: var(--eb-green);
          color: var(--eb-dark-bg);
        }

        .nav-dropdown-text {
          display: flex;
          flex-direction: column;
        }

        .dropdown-item-title {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--eb-text-white);
          transition: color 0.2s ease;
        }

        .nav-dropdown-item:hover .dropdown-item-title {
          color: var(--eb-green-light);
        }

        .dropdown-item-desc {
          font-family: var(--font-sans);
          font-size: 0.76rem;
          color: var(--eb-text-muted-light);
          margin-top: 2px;
        }

        .nav-cta-desktop {
          display: inline-block;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .nav-cta-desktop {
            display: none;
          }
        }

        .nav-cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--eb-green);
          color: var(--eb-dark-bg);
          padding: 9px 20px;
          border-radius: 999px;
          border: none;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: var(--transition-smooth);
        }

        .nav-cta-btn:hover {
          background-color: var(--eb-green-light);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(133, 163, 31, 0.35);
        }

        .cta-icon {
          width: 16px;
          height: 16px;
        }

        .nav-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--eb-text-white);
          cursor: pointer;
          padding: 8px;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: background 0.2s ease;
        }

        .nav-mobile-toggle:active {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1024px) {
          .nav-mobile-toggle {
            display: flex;
          }
        }

        /* Mobile Drawer */
        .nav-mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(18, 20, 18, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow-y: auto;
          max-height: calc(100vh - 75px);
          -webkit-overflow-scrolling: touch;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
        }

        .nav-mobile-links {
          display: flex;
          flex-direction: column;
          padding: 20px 5% 30px 5%;
          gap: 20px;
        }

        .nav-mobile-link {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--eb-text-white);
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-mobile-link.active {
          color: var(--eb-green-light);
        }

        /* Mobile Group & Sublinks */
        .nav-mobile-group {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 4px;
        }

        .nav-mobile-group .nav-mobile-link {
          border-bottom: none;
          padding-bottom: 6px;
        }

        .nav-mobile-sublinks {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 2px 0 10px 14px;
          border-left: 2px solid rgba(133, 163, 31, 0.3);
          margin: 4px 0 8px 10px;
        }

        .nav-mobile-sublink {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-sans);
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--eb-text-muted-light);
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .nav-mobile-sublink:hover, .nav-mobile-sublink.active {
          color: var(--eb-green-light);
        }

        .sublink-icon {
          color: var(--eb-green-light);
          flex-shrink: 0;
        }

        .mobile-cta-section {
          margin-top: 15px;
          padding: 20px;
          background: rgba(133, 163, 31, 0.06);
          border-radius: 12px;
          border: 1px solid var(--eb-border-green);
        }

        .mobile-cta-title {
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--eb-green-light);
          margin-bottom: 12px;
          font-size: 0.95rem;
          text-transform: uppercase;
        }

        .mobile-cta-calls {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-cta-call {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--eb-text-white);
        }

        .mobile-cta-call span {
          font-weight: 400;
          font-size: 0.9rem;
          opacity: 0.8;
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
