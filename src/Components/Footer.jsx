import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="new-footer-heading">Services</h4>
            <ul className="new-footer-list">
              <li><a href="#">AI & Automation</a></li>
              <li><a href="#">SAP Consulting</a></li>
              <li><a href="#">Business Intelligence</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Talent Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="new-footer-heading">Company</h4>
            <ul className="new-footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Contact</a></li>
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
