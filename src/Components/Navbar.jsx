import React from "react";
import { 
  ChevronDown, 
  Cpu, 
  Database, 
  BarChart3, 
  Zap, 
  Users, 
  GraduationCap 
} from "lucide-react";
import logo from "../assets/Intime.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="InTime Logo" className="nav-logo" />
        </a>

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
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
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
                      />
                      <MegaMenuItem 
                        icon={<BarChart3 size={20} />} 
                        title="Business Intelligence & Analytics" 
                        desc="Turn raw data into actionable strategic insights." 
                      />
                    </div>
                    <div className="col-md-6">
                      <MegaMenuItem 
                        icon={<Zap size={20} />} 
                        title="Smart Application Development" 
                        desc="Ideate, validate, and build digital products quickly." 
                      />
                      <MegaMenuItem 
                        icon={<Users size={20} />} 
                        title="Smart Technology Talent" 
                        desc="Scale your team with elite engineering experts." 
                      />
                      <MegaMenuItem 
                        icon={<GraduationCap size={20} />} 
                        title="Enterprise Training" 
                        desc="Upskill your workforce with modern tech capabilities." 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Industries</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Engineering</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Insights</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          </ul>

          <div className="d-flex">
            <a href="#" className="nav-cta-btn">
              Contact Us <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MegaMenuItem({ icon, title, desc }) {
  return (
    <a href="#" className="mega-menu-item">
      <div className="icon-wrapper">{icon}</div>
      <div className="content-wrapper">
        <h4 className="item-title">{title}</h4>
        <p className="item-desc">{desc}</p>
      </div>
    </a>
  );
}