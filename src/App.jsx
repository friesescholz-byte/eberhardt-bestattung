import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import KontaktPage from './pages/KontaktPage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';
import AccessibilityPage from './pages/AccessibilityPage';
import AboutPage from './pages/AboutPage';

// Scroll to Top helper on route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we have an anchor hash in the URL, scroll to it
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Otherwise scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

// Global 🕯️ Schnellzugriff Floating Menu widget
const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close floating menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const wrap = document.getElementById('sf-floating-menu-wrap');
      if (wrap && !wrap.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div 
      id="sf-floating-menu-wrap" 
      className={isOpen ? 'sf-open' : ''}
      onClick={(e) => e.stopPropagation()}
    >
      <div id="sf-floating-panel">
        <div className="sf-floating-header">Schnellzugriff</div>
        <div className="sf-floating-links">
          <a 
            href="https://bestattungen-eberhardt.gemeinsam-trauern.net/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            🕯️ Gedenkseiten
          </a>
          <a 
            href="https://mein-kunden.center/login" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            👤 Kundenportal
          </a>
          <a 
            href="https://vererben.erblotse.de/p/eberhardt-bestattungen/?workflow=general" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📄 Erblotse
          </a>
        </div>
      </div>
      <button 
        id="sf-floating-trigger" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Schnellzugriff öffnen"
      >
        🕯️
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/impressum" element={<ImprintPage />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
        <Route path="/barrierefreiheit" element={<AccessibilityPage />} />
      </Routes>
      
      <Footer />
      <FloatingMenu />
    </Router>
  );
}

export default App;
