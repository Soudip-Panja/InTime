import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  Users, Target, Clock, AlertTriangle, TrendingDown, 
  Database, Brain, BarChart3, Shield, TrendingUp, Zap, FileText 
} from "lucide-react";

export default function StrategicTech() {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.torch-glow-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="page-wrapper" ref={contentRef}>
      <Navbar />
      
      <main 
        className="hero-section text-center" 
        style={{ backgroundImage: 'none' }}
      >
        <div className="container">
          <div className="hero-content mx-auto d-flex flex-column align-items-center">
            <p className="hero-label d-flex align-items-center gap-2 justify-content-center">
              <Users size={16} /> ELITE TECHNOLOGY TALENT NETWORK
            </p>
            
            <h1 className="hero-title">
              Elite Technology Talent: <br />
              <span className="gradient-text">Your On-Demand Engine</span> <br />
              for Innovation
            </h1>

            <p className="hero-description text-center" style={{ maxWidth: '800px' }}>
              InTime provides deeply vetted SAP, AI, and BI experts to accelerate your projects and deliver measurable outcomes from day one.
            </p>

            <div className="hero-action d-flex align-items-center gap-4 flex-wrap justify-content-center">
              <a href="#" className="nav-cta-btn hero-cta">
                <Target size={20} className="me-2" /> Submit Your Talent Requirement <span className="arrow">→</span>
              </a>
              <a href="#" className="perspective-cta" style={{ borderBottom: 'none' }}>
                Learn About Our Vetting Process <span className="arrow">→</span>
              </a>
            </div>

            <div className="trusted-stats d-flex gap-5 mt-5 pt-3 flex-wrap justify-content-center">
              <div>
                <span className="stat-number" style={{ fontSize: '2.5rem' }}>95%</span>
                <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem' }}>CLIENT RETENTION</p>
              </div>
              <div>
                <span className="stat-number" style={{ fontSize: '2.5rem' }}>48hrs</span>
                <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem' }}>AVERAGE DEPLOYMENT</p>
              </div>
              <div>
                <span className="stat-number gradient-text" style={{ fontSize: '2.5rem' }}>500+</span>
                <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem' }}>ELITE EXPERTS</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="section-separator"></div>

      {/* SECTION 1: Talent Gaps */}
      <section className="st-section st-section-dark">
        <div className="container">
          <div className="section-header text-center mb-5">
            <div className="unified-section-label mx-auto mb-3">THE CHALLENGE</div>
            <h2 className="section-title">
              Are Talent Gaps Hindering Your <br />
              <span className="gradient-text">Strategic Initiatives?</span>
            </h2>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Users size={22} /></div>
                <p className="st-card-text mb-0">Are you struggling to find certified SAP specialists, AI/ML engineers, or BI analysts?</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Target size={22} /></div>
                <p className="st-card-text mb-0">Do you need technical architects or interim technology leaders for strategic guidance?</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Clock size={22} /></div>
                <p className="st-card-text mb-0">Are lengthy recruitment cycles delaying projects?</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><AlertTriangle size={22} /></div>
                <p className="st-card-text mb-0">Do you require a partner guaranteeing performance and cultural fit?</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><TrendingDown size={22} /></div>
                <p className="st-card-text mb-0">Is your team stretched thin, needing specialized expertise?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Expertise Areas */}
      <section className="st-section st-section-alt">
        <div className="container">
          <div className="section-header text-center mb-5">
            <div className="unified-section-label mx-auto mb-3">OUR CAPABILITIES</div>
            <h2 className="section-title">
              Our Specialized Technology <br />
              <span className="gradient-text">Expertise Areas</span>
            </h2>
            <p className="section-subtitle mt-3">
              Access elite professionals across the technology trinity of SAP, AI, and BI
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="st-card torch-glow-card">
                <div className="d-flex align-items-center mb-3">
                  <div className="st-card-icon-blue"><Database size={24} /></div>
                  <h3 className="st-card-title mb-0">SAP Functional & Technical Specialists</h3>
                </div>
                <p className="st-card-text mb-4">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Expertise:</span> Certified consultants across FI/CO, MM, SD, PP, HCM, S/4HANA, BTP, Fiori
                </p>
                <div className="mt-auto">
                  <p className="mb-2" style={{color: '#a070ff', fontSize: '0.9rem', fontWeight: 600}}>Roles:</p>
                  <div className="st-pills-container">
                    <span className="st-role-pill">Architects</span>
                    <span className="st-role-pill">ABAP developers</span>
                    <span className="st-role-pill">Consultants</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-lg-6">
              <div className="st-card torch-glow-card">
                <div className="d-flex align-items-center mb-3">
                  <div className="st-card-icon-blue"><Brain size={24} /></div>
                  <h3 className="st-card-title mb-0">AI, Machine Learning & RPA Talent</h3>
                </div>
                <p className="st-card-text mb-4">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Expertise:</span> AI/ML engineers, RPA developers (UiPath, Blue Prism)
                </p>
                <div className="mt-auto">
                  <p className="mb-2" style={{color: '#a070ff', fontSize: '0.9rem', fontWeight: 600}}>Roles:</p>
                  <div className="st-pills-container">
                    <span className="st-role-pill">AI strategists</span>
                    <span className="st-role-pill">ML Ops engineers</span>
                    <span className="st-role-pill">RPA developers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="st-card torch-glow-card">
                <div className="d-flex align-items-center mb-3">
                  <div className="st-card-icon-blue"><BarChart3 size={24} /></div>
                  <h3 className="st-card-title mb-0">Business Intelligence & Data Analytics Professionals</h3>
                </div>
                <p className="st-card-text mb-4">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Expertise:</span> BI architects, data engineers (Power BI, Tableau)
                </p>
                <div className="mt-auto">
                  <p className="mb-2" style={{color: '#a070ff', fontSize: '0.9rem', fontWeight: 600}}>Roles:</p>
                  <div className="st-pills-container">
                    <span className="st-role-pill">BI developers</span>
                    <span className="st-role-pill">Analytics translators</span>
                    <span className="st-role-pill">Data scientists</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="st-card torch-glow-card">
                <div className="d-flex align-items-center mb-3">
                  <div className="st-card-icon-blue"><Users size={24} /></div>
                  <h3 className="st-card-title mb-0">Executive, Strategic & Program Leadership</h3>
                </div>
                <p className="st-card-text mb-4">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Expertise:</span> Interim CIOs, CTOs, program managers
                </p>
                <div className="mt-auto">
                  <p className="mb-2" style={{color: '#a070ff', fontSize: '0.9rem', fontWeight: 600}}>Roles:</p>
                  <div className="st-pills-container">
                    <span className="st-role-pill">Transformation directors</span>
                    <span className="st-role-pill">Enterprise architects</span>
                    <span className="st-role-pill">Program managers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The InTime Advantage */}
      <section className="st-section st-section-dark">
        <div className="container">
          <div className="section-header text-center mb-5">
            <div className="unified-section-label mx-auto mb-3">PROVEN IMPACT</div>
            <h2 className="section-title">
              The InTime Talent <span className="gradient-text">Advantage</span>
            </h2>
            <p className="section-subtitle mt-3">
              Our talent outperforms with 95% client retention. Unlike agencies, we guarantee performance.
            </p>
          </div>

          <div className="row g-4 justify-content-center text-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card align-items-center">
                <div className="st-card-icon-blue st-card-icon-center"><Shield size={24} /></div>
                <h3 className="st-card-title">Rigorous Screening</h3>
                <p className="st-card-text">Multi-layer vetting ensures technical and cultural fit</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card align-items-center">
                <div className="st-card-icon-blue st-card-icon-center"><TrendingUp size={24} /></div>
                <h3 className="st-card-title">Success-Based Model</h3>
                <p className="st-card-text">Performance guarantees and extended evaluations</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card align-items-center">
                <div className="st-card-icon-blue st-card-icon-center"><Target size={24} /></div>
                <h3 className="st-card-title">Continuous Development</h3>
                <p className="st-card-text">Ongoing mentorship and upskilling</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card align-items-center">
                <div className="st-card-icon-blue st-card-icon-center"><Zap size={24} /></div>
                <h3 className="st-card-title">Rapid Deployment</h3>
                <p className="st-card-text">Flexible, agile talent delivery</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="st-card torch-glow-card align-items-center">
                <div className="st-card-icon-blue st-card-icon-center"><Clock size={24} /></div>
                <h3 className="st-card-title">Industry Alignment</h3>
                <p className="st-card-text">Sector-specific expertise</p>
              </div>
            </div>
          </div>

          <div className="st-banner">
            <h3 className="st-banner-title">Flexibility That Scales</h3>
            <p className="st-banner-text">
              Scale talent for projects of any size. From single specialists to complete transformation teams.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="st-section st-section-alt" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="st-banner" style={{ marginTop: 0, padding: '4rem 2rem' }}>
            <h2 className="st-banner-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              Accelerate with Elite Expertise
            </h2>
            <p className="st-banner-text" style={{ maxWidth: '800px', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Access the skills you need to succeed. Get vetted SAP, AI, and BI experts deployed within 48 hours to accelerate your critical initiatives.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
              <a href="#" className="btn btn-light rounded-pill px-4 py-3 d-flex align-items-center gap-2" style={{ fontWeight: 600, border: 'none', color: '#000' }}>
                <Target size={18} /> Find Your SAP/AI Expert <span className="arrow">→</span>
              </a>
              <a href="#" className="btn btn-dark rounded-pill px-4 py-3 d-flex align-items-center gap-2" style={{ fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
                <FileText size={18} /> Explore Our Talent Process
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}