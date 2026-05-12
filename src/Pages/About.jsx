import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Globe2, 
  Users2, 
  Briefcase,
  Layers,
  Zap,
  Award,
  Cpu
} from "lucide-react";

import SoumojitDas from "../assets/Soumojit Das.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section about-hero">
        <div className="container">
          <div className="hero-content mx-auto text-center">
            <span className="trusted-badge mx-auto mb-4" style={{ textTransform: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Award size={14} className="me-2" />
              Since 2013 - Trusted by 20+ Top Companies
            </span>
            <h1 className="hero-title">
              We Are <br />
              <strong className="gradient-text" style={{ fontSize: '1.2em' }}>InTime Global</strong>
            </h1>
            <p className="hero-description mx-auto" style={{ maxWidth: '800px' }}>
              Architects of your autonomous future. We empower enterprises with AI, SAP, and BI expertise across the Middle East, Europe, Asia, and beyond.
            </p>
            
            <div className="d-flex gap-3 justify-content-center">
              <a href="#vision" className="nav-cta-btn hero-cta">
                Discover Our Vision <span className="arrow">→</span>
              </a>
              <a href="#team" className="nav-cta-btn hero-cta" style={{ backgroundImage: 'none', border: '1px solid var(--card-border-color)' }}>
                Meet Our Team
              </a>
            </div>

            <div className="about-hero-stats">
              <div className="stat-card">
                <div className="stat-icon"><Globe2 /></div>
                <div className="stat-value">6+ Countries</div>
                <div className="stat-label">Global Reach</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><Users2 /></div>
                <div className="stat-value">200+ Consultants</div>
                <div className="stat-label">Expert Team</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><Award /></div>
                <div className="stat-value">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Mission, Vision & Philosophy */}
      <section className="perspective-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="unified-section-label">Our Foundation</span>
            <h2 className="perspective-main-title">
              Pioneering the Next Era of <br />
              <span className="gradient-highlight">Enterprise Excellence</span>
            </h2>
            <p className="perspective-intro mx-auto">
              Our approach is not just about digital transformation but creating sustainable ecosystems for business success.
            </p>
          </div>

          <div className="mission-vision-grid">
            <div className="mvp-card">
              <div className="mvp-icon-container"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>Enabling enterprises to become self-reliant and data-driven through intelligent automation and strategic insight.</p>
            </div>
            <div className="mvp-card">
              <div className="mvp-icon-container"><Rocket size={28} /></div>
              <h3>Our Vision</h3>
              <p>To be the global leader in driving the next generation of enterprise excellence through innovative technology.</p>
            </div>
            <div className="mvp-card">
              <div className="mvp-icon-container"><Lightbulb size={28} /></div>
              <h3>Our Philosophy</h3>
              <p>Innovation is at the heart of everything we do. We believe in the power of technology to change the world for the better.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Autonomous Enterprise Section */}
      <section className="perspective-section bg-shade-2">
        <div className="container">
          <div className="text-center mb-5">
            <span className="trusted-badge mx-auto mb-3">AI & BEYOND</span>
            <h2 className="perspective-main-title">
              The Inevitable Shift: Towards the <br />
              <span className="gradient-highlight">Autonomous Enterprise</span>
            </h2>
          </div>

          <div className="autonomous-grid">
            <div className="autonomous-content">
              <div className="challenge-box">
                <h4 className="d-flex align-items-center gap-2 mb-3">
                  <AlertCircle size={20} color="#ff6b6b" /> The Challenge
                </h4>
                <p className="mb-0">Traditional business models are no longer enough in the age of rapid digital disruption. Enterprises must adapt to survive.</p>
              </div>
              <div className="solution-box">
                <h4 className="d-flex align-items-center gap-2 mb-3">
                  <CheckCircle2 size={20} color="#51cf66" /> From Then to Now
                </h4>
                <p className="mb-0">We help businesses evolve from manual processes to fully autonomous, AI-powered systems that learn and adapt.</p>
              </div>
            </div>

            <div className="autonomous-features">
              <div className="auto-feature-card">
                <Layers color="var(--icon-blue)" />
                <h5>Data-Driven Decisions</h5>
                <p className="small text-muted mb-0">Harnessing real-time analytics for strategic clarity.</p>
              </div>
              <div className="auto-feature-card">
                <Zap color="#51cf66" />
                <h5>Agile Infrastructure</h5>
                <p className="small text-muted mb-0">Building systems that scale with your growth.</p>
              </div>
              <div className="auto-feature-card">
                <Users2 color="#ff922b" />
                <h5>Customer-Centric Focus</h5>
                <p className="small text-muted mb-0">Designing solutions around human needs.</p>
              </div>
              <div className="auto-feature-card">
                <Cpu color="#748ffc" />
                <h5>Intelligent Automation</h5>
                <p className="small text-muted mb-0">Automating complex workflows with AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Founder's Perspective */}
      <section className="perspective-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="trusted-badge mx-auto mb-3" style={{ textTransform: 'none' }}>
              <span className="status-dot"></span>
              Message from Leadership
            </span>
            <h2 className="perspective-main-title">A Perspective From Our Founder</h2>
          </div>

          <div className="founder-card">
            <div className="founder-image-wrapper">
              <img src={SoumojitDas} alt="Soumojit Das" />
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                right: '-15px',
                width: '50px',
                height: '50px',
                background: 'var(--grad-mid)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 10px 20px rgba(0, 168, 253, 0.3)'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>"</span>
              </div>
            </div>
            <div className="founder-content">
              <div className="founder-quote-text mb-4">
                <p className="mb-3" style={{ fontSize: '1.15rem', opacity: 0.9 }}>
                  "In 2013, we identified a critical gap: the transformative power of intelligent systems was not universally accessible. We embarked on a mission to empower businesses, initially through skilled resources and streamlined ERP solutions."
                </p>
                <p style={{ fontSize: '1.15rem', opacity: 0.9 }}>
                  "Today, as we stand at the forefront of the AI revolution, our commitment is stronger than ever: to make sophisticated digital transformation affordable, understandable, and impactful for enterprises of all scales."
                </p>
              </div>
              
              <div className="founder-info-box p-4" style={{ 
                background: 'var(--bg-black)', 
                borderRadius: '16px',
                borderLeft: '4px solid var(--grad-mid)'
              }}>
                <h4 className="mb-1" style={{ fontSize: '1.25rem', fontWeight: '700' }}>Soumojit Das</h4>
                <p className="mb-1" style={{ color: 'var(--icon-blue)', fontWeight: '600' }}>Founder & MD, InTime Global</p>
                <p className="small text-muted mb-0">Leading digital transformation since 2013</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Timeline Section */}
      <section className="perspective-section bg-shade-2">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="perspective-main-title">
              A Decade of Driving <br />
              <span className="gradient-highlight">Enterprise Transformation</span>
            </h2>
            <p className="perspective-intro mx-auto">Our journey is marked by innovation, growth, and relentless pursuit of excellence.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2013</span>
                <h5>Company Founded</h5>
                <p className="small text-muted mb-0">InTime Global was established with a vision to redefine SAP consulting.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2017</span>
                <h5>Global Expansion</h5>
                <p className="small text-muted mb-0">Opened our first international office and expanded our service portfolio.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2019</span>
                <h5>AI Integration</h5>
                <p className="small text-muted mb-0">Launched our AI-driven automation practice for enterprise excellence.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2021</span>
                <h5>200+ Consultants</h5>
                <p className="small text-muted mb-0">Reached a major milestone of 200+ elite technology experts worldwide.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2023</span>
                <h5>Strategic Partnerships</h5>
                <p className="small text-muted mb-0">Formed key alliances with global tech leaders to enhance our solutions.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2024</span>
                <h5>Innovating at Scale</h5>
                <p className="small text-muted mb-0">Continuing to lead the way in autonomous enterprise transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Global Delivery Section */}
      <section className="perspective-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="unified-section-label">Global Reach</span>
            <h2 className="perspective-main-title">
              Global Expertise, Local Insight, <br />
              <span className="gradient-highlight">Unified Delivery</span>
            </h2>
            <p className="perspective-intro mx-auto">We serve clients across the globe with a focus on delivering value and excellence.</p>
          </div>

          <div className="global-stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><TrendingUp /></div>
              <div className="stat-value">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Globe2 /></div>
              <div className="stat-value">20+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Layers /></div>
              <div className="stat-value">2</div>
              <div className="stat-label">Global Offices</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Award /></div>
              <div className="stat-value">8+</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>

          <div className="text-center mb-4">
            <h4 className="fw-bold">Our Global Offices</h4>
          </div>

          <div className="office-grid">
            <div className="office-card">
              <span className="office-flag">🇮🇳</span>
              <span className="office-name">India</span>
              <p className="small text-muted mb-0">Delivery Center</p>
            </div>
            <div className="office-card">
              <span className="office-flag">🇺🇸</span>
              <span className="office-name">USA</span>
              <p className="small text-muted mb-0">Strategic Office</p>
            </div>
            <div className="office-card">
              <span className="office-flag">🇸🇬</span>
              <span className="office-name">Singapore</span>
              <p className="small text-muted mb-0">Regional Hub</p>
            </div>
            <div className="office-card">
              <span className="office-flag">🇦🇪</span>
              <span className="office-name">UAE</span>
              <p className="small text-muted mb-0">Middle East Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="perspective-section text-center" style={{ background: 'linear-gradient(to right, var(--grad-start), var(--grad-end))' }}>
        <div className="container">
          <h2 className="text-white mb-4">Ready to Start Your Digital Journey?</h2>
          <a href="#" className="nav-cta-btn hero-cta" style={{ background: 'white', color: 'black !important', border: 'none' }}>
            Get in Touch <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}