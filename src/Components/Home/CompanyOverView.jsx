import React, { useRef } from 'react';
import { ArrowUpRight, Globe, Users, Award, TrendingUp } from 'lucide-react';

export default function CompanyOverView() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.overview-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };





  return (
    <section className="company-overview-section" ref={sectionRef}>

      {/* Background Decorative Elements */}
      <div className="overview-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container">
        <div className="overview-layout">
          {/* Left Column */}
          <div className="overview-left">
            <div className="unified-section-label">COMPANY OVERVIEW</div>
            <h2 className="overview-heading">
              We Are<br />
              <span className="gradient-text-primary">InTime Global</span>
            </h2>
            <p className="overview-description">
              Architects of your autonomous future. We empower enterprises with AI, SAP, and BI expertise across the Middle East, Europe, Asia, and beyond.
            </p>
            <a href="/about" className="overview-link">
              Learn about InTime <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right Column */}
          <div className="overview-right">
            <div className="overview-grid" onMouseMove={handleMouseMove}>
              {/* Card 1 */}
              <div className="overview-card">
                <Globe className="overview-card-icon icon-blue" />
                <h3 className="overview-card-title stat-title">6+</h3>
                <div className="overview-card-subtitle">GLOBAL PRESENCE</div>
                <p className="overview-card-desc">
                  Countries
                </p>
              </div>

              {/* Card 2 */}
              <div className="overview-card">
                <Users className="overview-card-icon icon-green" />
                <h3 className="overview-card-title stat-title">200+</h3>
                <div className="overview-card-subtitle">ELITE EXPERTS</div>
                <p className="overview-card-desc">
                  Consultants
                </p>
              </div>

              {/* Card 3 */}
              <div className="overview-card">
                <Award className="overview-card-icon icon-blue" />
                <h3 className="overview-card-title stat-title">95%</h3>
                <div className="overview-card-subtitle">PROVEN EXCELLENCE</div>
                <p className="overview-card-desc">
                  Success Rate
                </p>
              </div>

              {/* Card 4 */}
              <div className="overview-card">
                <TrendingUp className="overview-card-icon icon-green" />
                <h3 className="overview-card-title stat-title">$100M+</h3>
                <div className="overview-card-subtitle">STRATEGIC ROI</div>
                <p className="overview-card-desc">
                  Client Value Created<br/>Proven ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}