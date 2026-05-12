import React, { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Cpu, 
  Database, 
  BarChart3, 
  Zap, 
  Users, 
  GraduationCap,
  Sun,
  Moon
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Intime.png";
import logoLight from "../assets/Intime Light.png";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand" to="/">
          <img src={theme === "light" ? logoLight : logo} alt="InTime Logo" className="nav-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            {/* InTime AI Link */}
            <li className="nav-item">
              <a className="nav-link ai-link" href="#">
                InTime AI
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ai-sparkle-icon">
                  <defs>
                    <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="50%" stopColor="#00a8fd" />
                      <stop offset="100%" stopColor="#0072ff" />
                    </linearGradient>
                  </defs>
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="url(#sparkle-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>

            {/* What We Do - Mega Menu */}
            <li className="nav-item dropdown mega-dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                What We Do <ChevronDown size={14} className="dropdown-chevron" />
              </a>
              
              <div className="dropdown-menu mega-menu-container">
                <div className="container-fluid">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <MegaMenuItem 
                        icon={<Cpu size={20} />} 
                        title="AI & Intelligent Automation" 
                        desc="Harness AI to transform your business operations." 
                      />
                      <MegaMenuItem 
                        icon={<Database size={20} />} 
                        title="SAP Digital Core & Cloud" 
                        desc="Modernize legacy systems with scalable architectures." 
                        to="/sap"
                      />
                      <MegaMenuItem 
                        icon={<BarChart3 size={20} />} 
                        title="Business Intelligence & Analytics" 
                        desc="Turn raw data into actionable strategic insights." 
                        to="/bi-analytics"
                      />
                    </div>
                    <div className="col-md-6">
                      <MegaMenuItem 
                        icon={<Zap size={20} />} 
                        title="Smart Application Development" 
                        desc="Ideate, validate, and build digital products quickly." 
                        to="/smart-app"
                      />
                      <MegaMenuItem 
                        icon={<Users size={20} />} 
                        title="Smart Technology Talent" 
                        desc="Scale your team with elite engineering experts." 
                        to="/smart-tech"
                      />
                      <MegaMenuItem 
                        icon={<GraduationCap size={20} />} 
                        title="Enterprise Training & Upskilling" 
                        desc="Empower your workforce with latest technologies." 
                        to="/enterprise-training"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/industries">Industries</Link></li>
            <li className="nav-item"><a className="nav-link" href="#">Engineering</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Insights</a></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              style={{ background: 'transparent', border: 'none', color: 'var(--text-white)', cursor: 'pointer', padding: '0 5px', display: 'flex' }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#" className="nav-cta-btn">
              Contact Us <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MegaMenuItem({ icon, title, desc, to = "#" }) {
  const isExternal = to.startsWith('http');
  
  if (isExternal) {
    return (
      <a href={to} className="mega-menu-item">
        <div className="icon-wrapper">{icon}</div>
        <div className="content-wrapper">
          <h4 className="item-title">{title}</h4>
          <p className="item-desc">{desc}</p>
        </div>
      </a>
    );
  }

  return (
    <Link to={to} className="mega-menu-item">
      <div className="icon-wrapper">{icon}</div>
      <div className="content-wrapper">
        <h4 className="item-title">{title}</h4>
        <p className="item-desc">{desc}</p>
      </div>
    </Link>
  );
}