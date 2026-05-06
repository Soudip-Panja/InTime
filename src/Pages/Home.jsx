import React, { useRef } from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    
    // Calculate precise mouse position relative to the hero container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main 
        className="hero-section" 
        ref={heroRef} 
        onMouseMove={handleMouseMove}
      >
        {/* Interactive Animated Glow Layer */}
        <div className="grid-glow-container">
          <div className="spotlight-beam"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <p className="hero-label">ENGINEERING FOR THE AI ERA.</p>
            
            <h1 className="hero-title">
              Turning Ambitious <strong>Technology Strategies</strong> 
              <br />
              <span className="gradient-text">into Production-Grade Reality.</span>
            </h1>

            <p className="hero-description">
              From AI adoption to legacy modernization to product scale 
              — we bring the thinking and the team.
            </p>

            <div className="hero-action">
              <a href="#" className="nav-cta-btn hero-cta">
                Schedule a Strategy Conversation <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}