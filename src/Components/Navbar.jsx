import React from "react";
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
          {/* Centered Menu items (mx-auto) */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link ai-link" href="#">
                InTime AI
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ai-sparkle-icon"
                >
                  <defs>
                    <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                  <path
                    d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                    stroke="url(#sparkle-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m5 3v4M3 5h4M19 17v4M17 19h4"
                    stroke="url(#sparkle-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What We Do
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Services</a></li>
                <li><a className="dropdown-item" href="#">AI Solutions</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Industries</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Engineering</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Insights</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          </ul>

          {/* Right Side CTA */}
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