import React from 'react';
import {
  Globe,
  ChevronDown,
  Users,
  Send,
  Play,
  Camera,
  GitBranch,
  MessageSquare
} from 'lucide-react';
import logo from "../assets/Intime.png";
import logoLight from "../assets/Intime Light.png"; ""

export default function Footer() {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Footer: Logo and Tagline */}
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={theme === 'light' ? logoLight : logo}
              alt="InTime Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">Architects of the Autonomous Enterprise</p>
          </div>
          <div className="footer-top-right">
            <div className="vertical-divider"></div>
            <div className="top-right-content">
              <div className="global-selector">
                <Globe size={16} />
                <span>Global</span>
                <ChevronDown size={14} />
              </div>
              <a href="#" className="connect-link">
                Connect with Us
                <div className="connect-underline"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Middle Footer: Links Grid */}
        <div className="footer-grid">
          {/* Column 1: Our Practices */}
          <div className="footer-col">
            <h4>OUR PRACTICES</h4>
            <ul>
              <li><a href="#">AI & Intelligent Systems</a></li>
              <li><a href="#">AI-Powered Product Engineering</a></li>
              <li><a href="#">Enterprise Modernization</a></li>
              <li><a href="#">Digital Customer Experience</a></li>
            </ul>
          </div>

          {/* Column 2: Engineering (Part 1) */}
          <div className="footer-col">
            <h4>ENGINEERING</h4>
            <ul>
              <li><a href="#">AI Engineering</a></li>
              <li><a href="#">Mobile Engineering</a></li>
              <li><a href="#">Backend Engineering</a></li>
              <li><a href="#">IoT Engineering</a></li>
              <li><a href="#">Business Analysis</a></li>
            </ul>
          </div>

          {/* Column 3: Engineering (Part 2) */}
          <div className="footer-col">
            <div className="empty-h4-space"></div>
            <ul>
              <li><a href="#">Full Stack Engineering</a></li>
              <li><a href="#">Web Engineering</a></li>
              <li><a href="#">DevOps Engineering</a></li>
              <li><a href="#">QA Engineering</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Open Source</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Hire Us</a></li>
            </ul>
          </div>

          {/* Column 5: Social Links */}
          <div className="footer-col social-col">
            <h4>SOCIAL LINKS</h4>
            <ul className="social-list">
              <li><a href="#"><Users size={18} /> LinkedIn</a></li>
              <li><a href="#"><Send size={18} /> Twitter</a></li>
              <li><a href="#"><Play size={18} /> YouTube</a></li>
              <li><a href="#"><Camera size={18} /> Instagram</a></li>
              <li><a href="#"><MessageSquare size={18} /> Discord</a></li>
              <li><a href="#"><GitBranch size={18} /> GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>

        {/* Bottom Footer: Copyright and Legal */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>COPYRIGHT</p>
            <span>2026 © Intime. All rights reserved.</span>
          </div>

          <div className="footer-locations">
            <p>LOCATIONS</p>
            <div className="location-list">
              <span>USA</span>
              <span>UK</span>
              <span>INDIA</span>
            </div>
          </div>

          <div className="footer-legal">
            <p>LEGAL</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Financial Reports</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
