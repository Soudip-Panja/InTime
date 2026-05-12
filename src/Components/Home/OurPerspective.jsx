import React from 'react';
import { CheckCircle2, Zap, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import perspectiveImg from "../../assets/Our Perspective.jpg";

export default function OurPerspective() {




  return (
    <section className="perspective-section">

      <div className="container">
        <div className="perspective-grid">
          {/* Left Content Column */}
          <div className="perspective-content">
            <div className="unified-section-label">OUR PERSPECTIVE</div>
            
            <h2 className="perspective-main-title">
              The Future of Enterprise Growth is <br />
              <span className="gradient-highlight">Being Engineered Today.</span>
            </h2>
            
            <p className="perspective-intro">
              From intelligent SAP ecosystems to Business Intelligence and AI-powered innovation, 
              we help businesses transform operations, unlock insights, and scale smarter.
            </p>
            
            <div className="perspective-feature-list">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <ShieldCheck size={22} />
                </div>
                <div className="feature-text">
                  <h4>Enterprise Systems, Optimized</h4>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <BarChart3 size={22} />
                </div>
                <div className="feature-text">
                  <h4>Data-Driven Decision Making</h4>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Zap size={22} />
                </div>
                <div className="feature-text">
                  <h4>AI Solutions Built for Growth</h4>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <CheckCircle2 size={22} />
                </div>
                <div className="feature-text">
                  <h4>Scalable & Future-Ready Technology</h4>
                </div>
              </div>
            </div>

            <div className="perspective-action">
              <a href="/roi" className="perspective-cta">
                Learn how we engineer growth <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="perspective-image-container">
            <div className="perspective-image-wrapper">
              <img src={perspectiveImg} alt="Our Perspective" className="perspective-img" />
              <div className="perspective-img-overlay"></div>
              {/* Decorative elements around image */}
              <div className="img-border-glow"></div>
              <div className="floating-stat-badge">
                <div className="stat-dot"></div>
                <span>Strategic Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
