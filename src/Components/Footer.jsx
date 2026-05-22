import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";

  return (
    <footer className="new-footer">
      <div className="container">
        <div className="new-footer-grid">
          {/* Column 1: Brand Info */}
          <div className="new-brand-col">
            <h4 className="new-footer-heading">InTime Global</h4>
            <p className="new-footer-desc">
              Transforming enterprises through cutting-edge AI, SAP, and BI solutions.
            </p>
            <div className="new-footer-socials">
              <a href="https://www.instagram.com/intimeitservices?igsh=aHZxZ3phZG8wc3Nt" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://x.com/intimeinc" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={18} /></a>
              <a href="https://www.linkedin.com/company/intime-it-services-private-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            </div>

            {/* Location Section */}
            <div className="new-footer-locations" style={{ marginTop: '25px' }}>
              <h4 className="new-footer-heading" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} style={{ color: 'black' }} /> Locations
              </h4>
              <div className="new-footer-locations-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px', fontSize: '0.9rem', color: 'var(--text-grey)' }}>
                <span>India</span>
                <span className="lang-dot" style={{ opacity: 0.4 }}>&middot;</span>
                <span>UAE</span>
                <span className="lang-dot" style={{ opacity: 0.4 }}>&middot;</span>
                <span>Singapore</span>
                <span className="lang-dot" style={{ opacity: 0.4 }}>&middot;</span>
                <span>UAE</span>
                <span className="lang-dot" style={{ opacity: 0.4 }}>&middot;</span>
                <span>Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h4 className="new-footer-heading">What We Do</h4>
            <ul className="new-footer-list">
              <li><Link to="/boss-ai">AI & Intelligent Automation</Link></li>
              <li><Link to="/sap">SAP Digital Core & Cloud</Link></li>
              <li><Link to="/bi-analytics">Business Intelligence & Analytics</Link></li>
              <li><Link to="/smart-app">Smart Application Development</Link></li>
              <li><Link to="/strategic-tech">Strategic Technology Talent</Link></li>
              <li><Link to="/enterprise-training">Enterprise Training & Upskilling</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="new-footer-heading">Company</h4>
            <ul className="new-footer-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Support / Languages */}
          <div>
            <h4 className="new-footer-heading">Legal & Support</h4>
            <ul className="new-footer-list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
            
            <h4 className="new-footer-heading mt-lang">Languages</h4>
            <div className="new-footer-languages">
              <a href="#">English</a> <span className="lang-dot">&middot;</span> <a href="#">العربية</a> <span className="lang-dot">&middot;</span> <a href="#">বাংলা</a> <span className="lang-dot">&middot;</span> <a href="#">हिंदी</a>
            </div>
          </div>
        </div>

        <div className="new-footer-bottom-divider"></div>

        <div className="new-footer-bottom">
          <p>&copy; 2024 InTime Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
