import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/TrustedByCarousel";
import CompanyOverView from "../Components/Home/CompanyOverView";
import OurPerspective from "../Components/Home/OurPerspective";
import HomeBody from "../Components/HomeBody";
import Footer from "../Components/Footer";

export default function Home() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
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
            <p className="hero-label">ENGINEERING FOR THE AI ERA</p>
            
            <h1 className="hero-title">
              Turning Complex <strong>Business Challenges</strong> 
              <br />
              <span className="gradient-text">Into Intelligent Enterprise Solutions.</span>
            </h1>

            <p className="hero-description">
              From SAP transformation and business intelligence to AI engineering — we help organizations streamline operations, unlock insights, and scale smarter.
            </p>

            <div className="hero-action">
              <a href="#" className="nav-cta-btn hero-cta">
                Schedule a Strategy Conversation <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Carousel />
      <CompanyOverView />
      <div className="section-separator"></div>
      <OurPerspective />
      <div className="section-separator"></div>
      <HomeBody />
      <Footer />
    </div>
  );
}