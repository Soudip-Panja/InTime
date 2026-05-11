import React from 'react';
import { ArrowUpRight, Cloud, Triangle, Activity, GitBranch, ShieldCheck, CheckCircle, Star, Award, Medal, Search, Cpu, Wrench, Heart, Quote, Database, Server, Box, CloudLightning } from 'lucide-react';

export default function HomeBody() {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.practice-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <>
      <section className="home-body-section">
        <div className="container">
          <div className="home-body-content">
            <p className="perspective-label">OUR PERSPECTIVE.</p>
            <h2 className="perspective-heading">
              The Companies that will Lead the Next Decade are <br />
              <span className="gradient-text">Being Engineered Right Now.</span>
            </h2>
            <p className="perspective-subheading">
              Enterprise is being <span className="underline-gradient">Reimagined.</span> Products are being <br />
              <span className="underline-gradient">Reinvented.</span> We engineer <span className="underline-gradient">Both.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="practices-section">
        <div className="container">
          <div className="practices-header">
            <p className="perspective-label">FOUR PRACTICES.</p>
            <h2 className="practices-heading">
              One <span className="gradient-text">Engineering Standard.</span>
            </h2>
            <p className="practices-subheading">
              Every practice combines strategic consulting with hands-on engineering - because <br />
              advice without execution is just a slide deck.
            </p>
          </div>

          <div className="practices-grid" onMouseMove={handleMouseMove}>
            {/* Card 1 */}
            <div className="practice-card">
              <div className="practice-content">
                <h3 className="practice-title">AI & Intelligent Systems</h3>
                <p className="practice-desc">
                  From AI strategy to production-grade LLM integration, autonomous agents, and intelligent workflows - we take AI from experiment to enterprise.
                </p>
                <div className="practice-tags">
                  <span>Agentic AI</span>
                  <span>ML Model Development</span>
                  <span>AI Pods</span>
                  <span>Digital Transformation</span>
                  <span>AI Strategies</span>
                  <span>Artificial Intelligence</span>
                  <span>AI Developer</span>
                </div>
              </div>
              <div className="practice-footer">
                <a href="#" className="practice-link">
                  Explore AI & Intelligent Systems <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="practice-card">
              <div className="practice-content">
                <h3 className="practice-title">AI-Powered Product Engineering</h3>
                <p className="practice-desc">
                  From idea to prototype to production - we build products at AI speed with the engineering discipline that makes them last.
                </p>
                <div className="practice-tags">
                  <span>Prototype to Production</span>
                  <span>AI Native Engineering</span>
                  <span>Fractional Engineering Team</span>
                  <span>Code Quality Engineering Excellence</span>
                  <span>Scaling MVP to Market</span>
                  <span>Product studio AI era</span>
                </div>
              </div>
              <div className="practice-footer">
                <a href="#" className="practice-link">
                  Explore Product Engineering <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="practice-card">
              <div className="practice-content">
                <h3 className="practice-title">Enterprise Modernization & Managed Engineering</h3>
                <p className="practice-desc">
                  We re-architect legacy systems for AI-readiness, scale, and speed - then stay to manage and evolve them.
                </p>
                <div className="practice-tags">
                  <span>App Modernization</span>
                  <span>Data & Integration Modernization</span>
                  <span>Process & Delivery Transformation</span>
                  <span>Cloud & Infrastructure Modernization</span>
                  <span>Performance & Security</span>
                </div>
              </div>
              <div className="practice-footer">
                <a href="#" className="practice-link">
                  Explore Enterprise & Managed Engineering <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outcomes-section bg-shade-1">
        <div className="container">
          <div className="outcomes-header">
            <p className="perspective-label">OUTCOMES.</p>
            <h2 className="outcomes-heading">
              We Measure Success in Business Impact, Not Lines<br />
              <span className="gradient-text">of Code.</span>
            </h2>
          </div>

          <div className="outcomes-grid">
            {/* Card 1 - FINTECH */}
            <div className="outcome-card">
              <div className="card-border-glow"></div>
              <div className="card-crosshairs" aria-hidden="true"></div>
              <p className="outcome-industry">FINTECH</p>
              <h3 className="outcome-stat">$400M+</h3>
              <p className="outcome-metric">Global payments processed annually</p>
              <p className="outcome-desc">
                Unified a fragmented payment ecosystem into a single admin platform serving global operations.
              </p>
              <div className="outcome-footer">
                <a href="#" className="outcome-link">
                  Flowcash <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Card 2 - HEALTHTECH */}
            <div className="outcome-card">
              <div className="card-border-glow"></div>
              <div className="card-crosshairs" aria-hidden="true"></div>
              <p className="outcome-industry">HEALTHTECH</p>
              <h3 className="outcome-stat">100</h3>
              <p className="outcome-metric">Performance score - 1,200+ outlets</p>
              <p className="outcome-desc">
                Transformed a legacy diagnostic platform into a high-speed digital engine at national scale.
              </p>
              <div className="outcome-footer">
                <a href="#" className="outcome-link">
                  Diagnostic Leader <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Card 3 - E-COMMERCE */}
            <div className="outcome-card">
              <div className="card-border-glow"></div>
              <div className="card-crosshairs" aria-hidden="true"></div>
              <p className="outcome-industry">E-COMMERCE</p>
              <h3 className="outcome-stat">80%</h3>
              <p className="outcome-metric">Design consistency improvement</p>
              <p className="outcome-desc">
                Built a comprehensive design system reducing fragmentation and saving 300+ design hours.
              </p>
              <div className="outcome-footer">
                <a href="#" className="outcome-link">
                  Pepperfry <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Card 4 - BANKING */}
            <div className="outcome-card">
              <div className="card-border-glow"></div>
              <div className="card-crosshairs" aria-hidden="true"></div>
              <p className="outcome-industry">BANKING</p>
              <h3 className="outcome-stat">56%</h3>
              <p className="outcome-metric">Latency reduction for US bank</p>
              <p className="outcome-desc">
                Modernized legacy systems using Strangler Fig pattern while maintaining full regulatory compliance.
              </p>
              <div className="outcome-footer">
                <a href="#" className="outcome-link">
                  US Banking Client <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships-section bg-shade-2">
        <div className="container">
          <div className="partnerships-header">
            <p className="perspective-label">PARTNERSHIPS.</p>
            <h2 className="partnerships-heading">
              Partnered With the Platforms That Power <span className="gradient-text" style={{ display: 'inline' }}>Modern<br/>Enterprise.</span>
            </h2>
            <p className="partnerships-subheading">
              We don't just use these technologies - we're recognized partners with deep integration<br/>expertise.
            </p>
          </div>

          <div className="partnerships-grid">
            {/* Card 1 */}
            <div className="partner-card">
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <Cloud size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">AWS</h3>
              <p className="partner-subtitle">CONSULTING PARTNER</p>
              <p className="partner-desc">
                Cloud infrastructure, serverless architectures, and managed services for production-grade deployments at scale.
              </p>
            </div>

            {/* Card 2 */}
            <div className="partner-card">
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <Triangle size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">Vercel</h3>
              <p className="partner-subtitle">OFFICIAL PARTNER</p>
              <p className="partner-desc">
                Next.js deployment, edge computing, and performance-optimized frontend infrastructure for modern web applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="partner-card">
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <Cloud size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">AWS</h3>
              <p className="partner-subtitle">STRATEGIC PARTNER</p>
              <p className="partner-desc">
                Instant GraphQL APIs, real-time data access, and accelerated backend engineering for data-driven applications.
              </p>
            </div>

            {/* Card 4 */}
            <div className="partner-card">
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <GitBranch size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">GitHub</h3>
              <p className="partner-subtitle">TECHNOLOGY PARTNER</p>
              <p className="partner-desc">
                Version control, CI/CD pipelines, code collaboration, and open-source contribution across the developer ecosystem.
              </p>
            </div>
          </div>

          <div className="certifications-row">
            <div className="cert-item">
              <ShieldCheck size={20} className="cert-icon" />
              <div className="cert-text">
                <h4>ISO Certified</h4>
                <p>Information Security Management</p>
              </div>
            </div>
            
            <div className="cert-item">
              <CheckCircle size={20} className="cert-icon" />
              <div className="cert-text">
                <h4>Cyber Essentials</h4>
                <p>UK Government Backed</p>
              </div>
            </div>

            <div className="cert-item">
              <Star size={20} className="cert-icon" />
              <div className="cert-text">
                <h4>Clutch 4.8 ★</h4>
                <p>112 Verified Reviews</p>
              </div>
            </div>

            <div className="cert-item">
              <Award size={20} className="cert-icon" />
              <div className="cert-text">
                <h4>GoodFirms</h4>
                <p>Top Development Company</p>
              </div>
            </div>

            <div className="cert-item">
              <Medal size={20} className="cert-icon" />
              <div className="cert-text">
                <h4>RightFirms</h4>
                <p>Top Service Provider 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pov-section bg-shade-3">
        <div className="container">
          <div className="pov-header">
            <p className="perspective-label">WHY INTIME.</p>
            <h2 className="pov-heading">
              We Bring a Point <span className="gradient-text">of View.</span>
            </h2>
          </div>

          <div className="pov-main-grid">
            <div className="pov-item">
              <div className="pov-icon-box">
                <Search size={24} className="pov-icon" />
              </div>
              <div className="pov-text">
                <h3>We diagnose before we build.</h3>
                <p>Our assessments often reveal the most important problem isn't the one the client came to us with. This saves months of misdirected effort and significant wasted investment.</p>
              </div>
            </div>

            <div className="pov-item">
              <div className="pov-icon-box">
                <Cpu size={24} className="pov-icon" />
              </div>
              <div className="pov-text">
                <h3>AI-native engineering, grounded in 20 years of discipline.</h3>
                <p>We use AI to accelerate delivery. But we never ship without the testing, security, and architecture that production demands. Speed without rigor is just faster failure.</p>
              </div>
            </div>

            <div className="pov-item">
              <div className="pov-icon-box">
                <Wrench size={24} className="pov-icon" />
              </div>
              <div className="pov-text">
                <h3>We build tools the industry depends on.</h3>
                <p>NativeBase, gluestack-ui, React Native core contributions. React Summit 2024 Productivity Award. Thousands of developers trust our foundations.</p>
              </div>
            </div>

            <div className="pov-item">
              <div className="pov-icon-box">
                <Heart size={24} className="pov-icon" />
              </div>
              <div className="pov-text">
                <h3>We stay. We don't ship and disappear.</h3>
                <p>550+ engagements. Clients who've been with us for 5+ years. We're invested in long-term success, not just the current project scope.</p>
              </div>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">
                "Their code is clean and easy to implement. The app has great ratings across devices."
              </p>
              <div className="testimonial-divider"></div>
              <div className="testimonial-footer">
                <div className="client-avatar" style={{ background: '#0047bb' }}>
                  <span style={{ fontSize: '10px', color: 'white', fontWeight: '800' }}>PayPoint</span>
                </div>
                <div className="client-info">
                  <h4>Head of Product Management</h4>
                  <p>PayPoint plc.</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">
                "Exceptional responsiveness and professionalism. Highly positive feedback from beta customers."
              </p>
              <div className="testimonial-divider"></div>
              <div className="testimonial-footer">
                <div className="client-avatar" style={{ background: 'white', border: '4px solid #333' }}>
                  <div style={{ width: '20px', height: '20px', background: '#e31e24', borderRadius: '50%' }}></div>
                </div>
                <div className="client-info">
                  <h4>Verified Review — 4.8/5 rating</h4>
                  <p>Clutch (112 reviews)</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">
                "They anticipated potential problems and recommended solutions. This a rare skill."
              </p>
              <div className="testimonial-divider"></div>
              <div className="testimonial-footer">
                <div className="client-avatar" style={{ background: '#111' }}>
                  <Activity size={20} color="#666" />
                </div>
                <div className="client-info">
                  <h4>Project Director, Digital Transformation</h4>
                  <p>AirOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section bg-shade-2">
        <div className="tech-carousel-container">
          <div className="tech-carousel-track">
            {[1, 2].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                <div className="tech-logo-item">
                  <Database size={18} className="tech-logo-icon" />
                  <span>MERN Stack</span>
                </div>
                <div className="tech-logo-item">
                  <Server size={18} className="tech-logo-icon" />
                  <span>SAP</span>
                </div>
                <div className="tech-logo-item">
                  <Box size={18} className="tech-logo-icon" />
                  <span>Docker</span>
                </div>
                <div className="tech-logo-item">
                  <Cloud size={18} className="tech-logo-icon" />
                  <span>AWS</span>
                </div>
                <div className="tech-logo-item">
                  <CloudLightning size={18} className="tech-logo-icon" />
                  <span>Azure</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="final-cta-box">
            <div className="card-border-glow"></div>
            <div className="card-crosshairs" aria-hidden="true"></div>
            
            <h2 className="cta-heading">
              The <span className="gradient-text">Right Conversation</span> Can<br/>
              <span className="gradient-text">Save You Six Months.</span>
            </h2>
            <p className="cta-subheading">
              Whether you're navigating AI adoption, modernizing legacy systems, or scaling a product - we start by listening. No pitch deck. No template. A real conversation.
            </p>
            
            <div className="cta-actions">
              <a href="#" className="nav-cta-btn">
                Schedule a Strategy Conversation <span className="arrow">→</span>
              </a>
              <a href="#" className="explore-link">
                Or Explore Our Thinking <span className="arrow">→</span>
              </a>
            </div>

            <div className="cta-footer-text">
              <p>INNOVATE • COLLABORATE • BUILD</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}