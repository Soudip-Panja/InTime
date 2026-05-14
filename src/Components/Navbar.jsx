import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronDown,
  Cpu,
  Database,
  BarChart3,
  Zap,
  Users,
  GraduationCap,
  Sun,
  Moon,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Intime.png";
import logoLight from "../assets/Intime Light.png";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenAccordion(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleAccordion = useCallback((key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenAccordion(null);
  }, []);

  // Menu data for the accordion
  const menuSections = [
    {
      key: "whatwedo",
      label: "What We Do",
      items: [
        { title: "AI & Intelligent Automation", to: "/boss-ai", icon: <Cpu size={18} /> },
        { title: "SAP Digital Core & Cloud", to: "/sap", icon: <Database size={18} /> },
        { title: "Business Intelligence & Analytics", to: "/bi-analytics", icon: <BarChart3 size={18} /> },
        { title: "Smart Application Development", to: "/smart-app", icon: <Zap size={18} /> },
        { title: "Strategic Technology Talent", to: "/strategic-tech", icon: <Users size={18} /> },
        { title: "Enterprise Training & Upskilling", to: "/enterprise-training", icon: <GraduationCap size={18} /> },
      ],
    },
    {
      key: "industries",
      label: "Industries",
      link: "/industries",
    },
    {
      key: "insights",
      label: "Insights",
      items: [
        { title: "Engineering", to: "/roi", icon: <Zap size={18} /> },
        { title: "Why InTime", to: "/why-intime", icon: <BarChart3 size={18} /> },
      ],
    },
    {
      key: "careers",
      label: "Careers",
      link: "/careers",
    },
    {
      key: "about",
      label: "About",
      link: "/about",
    },
    {
      key: "contact",
      label: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <img src={theme === "light" ? logoLight : logo} alt="InTime Logo" className="nav-logo" />
          </Link>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="mobile-nav-controls d-lg-none d-flex align-items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ background: 'transparent', border: 'none', color: 'var(--text-white)', cursor: 'pointer', padding: '0 5px', display: 'flex' }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

          {/* Desktop Navigation (unchanged) */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {/* InTime AI Link */}
              <li className="nav-item">
                <Link className="nav-link ai-link" to="/boss-ai">
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
                </Link>
              </li>

              {/* What We Do - Mega Menu */}
              <li className="nav-item dropdown mega-dropdown hover-dropdown">
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
                          to="/boss-ai"
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
                          title="Strategic Technology Talent"
                          desc="Scale your team with elite engineering experts."
                          to="/strategic-tech"
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
              {/* Insights - Mega Menu */}
              <li className="nav-item dropdown mega-dropdown hover-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Insights <ChevronDown size={14} className="dropdown-chevron" />
                </a>
                <div className="dropdown-menu mega-menu-container">
                  <div className="container-fluid">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <MegaMenuItem
                          icon={<Zap size={20} />}
                          title="Engineering"
                          desc="Explore our engineering capabilities and technology ROI insights."
                          to="/roi"
                        />
                      </div>
                      <div className="col-md-6">
                        <MegaMenuItem
                          icon={<BarChart3 size={20} />}
                          title="Why InTime"
                          desc="Discover what makes InTime the right technology partner for you."
                          to="/why-intime"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
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
              <Link to="/contact" className="nav-cta-btn">
                Contact Us <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== FULLSCREEN MOBILE OVERLAY NAV ========== */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? "is-open" : ""}`}>
        {/* Header row */}
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Menu</span>
          <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {/* Scrollable menu body */}
        <div className="mobile-nav-body">
          <ul className="mobile-nav-list">
            {menuSections.map((section, idx) => (
              <li
                key={section.key}
                className={`mobile-nav-item ${mobileMenuOpen ? "animate-in" : ""}`}
                style={{ animationDelay: `${0.06 * (idx + 1)}s` }}
              >
                {section.items ? (
                  <>
                    <button
                      className={`mobile-nav-link has-children ${openAccordion === section.key ? "is-expanded" : ""}`}
                      onClick={() => toggleAccordion(section.key)}
                    >
                      <span>{section.label}</span>
                      <ChevronDown size={18} className="mobile-chevron" />
                    </button>
                    <div className={`mobile-submenu ${openAccordion === section.key ? "is-open" : ""}`}>
                      {section.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="mobile-submenu-link"
                          onClick={closeMobileMenu}
                        >
                          <span className="mobile-submenu-icon">{item.icon}</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={section.link}
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span>{section.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
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