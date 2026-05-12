import React from 'react';
import { ArrowUpRight, Cloud, Triangle, Activity, GitBranch, ShieldCheck, CheckCircle, Star, Award, Medal, Cpu, CloudLightning, BarChart3, Database, Server, Box } from 'lucide-react';
import WhyInTime from './Home/WhyInTime';

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
      <section className="practices-section">
        <div className="container">
          <div className="practices-header">
            <div className="unified-section-label">OUR PRACTICES</div>
            <h2 className="practices-heading">
              One <span className="gradient-text">Engineering Standard.</span>
            </h2>
            <p className="practices-subheading">
              Every practice combines strategic consulting with hands-on engineering - because advice without execution is just a slide deck.
            </p>
          </div>

          <div className="practices-grid" onMouseMove={handleMouseMove}>
            {/* Card 1 */}
            <div className="practice-card">
              <div className="practice-content">
                <div className="practice-icon-box">
                  <Cpu size={32} strokeWidth={1.5} />
                </div>
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
            </div>

            {/* Card 2 */}
            <div className="practice-card">
              <div className="practice-content">
                <div className="practice-icon-box">
                  <BarChart3 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="practice-title">Business Intelligence & Power BI</h3>
                <p className="practice-desc">
                  Unlock actionable insights with enterprise-grade Power BI dashboards and data storytelling. We transform raw data into strategic assets for real-time decision making.
                </p>
                <div className="practice-tags">
                  <span>Power BI Dashboards</span>
                  <span>DAX Optimization</span>
                  <span>Data Modeling</span>
                  <span>Enterprise Reporting</span>
                  <span>Real-time Analytics</span>
                  <span>ETL Processes</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="practice-card">
              <div className="practice-content">
                <div className="practice-icon-box">
                  <CloudLightning size={32} strokeWidth={1.5} />
                </div>
                <h3 className="practice-title">SAP Solutions & Digital Transformation</h3>
                <p className="practice-desc">
                  From S/4HANA migrations to BTP extensions and custom ABAP development - we modernize your SAP landscape for the AI-driven future.
                </p>
                <div className="practice-tags">
                  <span>S/4HANA Transformation</span>
                  <span>SAP BTP Development</span>
                  <span>Custom ABAP Solutions</span>
                  <span>Fiori UX Modernization</span>
                  <span>SAP AI Integration</span>
                  <span>Migration Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outcomes-section bg-shade-1">
        <div className="container">
          <div className="outcomes-header">
            <div className="unified-section-label">OUTCOMES</div>
            <h2 className="outcomes-heading">
              We Measure Success in Business Impact, Not Lines<br />
              <span className="gradient-text">of Code.</span>
            </h2>
          </div>

          <div className="outcomes-grid">
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
            <div className="unified-section-label">PARTNERSHIPS</div>
            <h2 className="partnerships-heading">
              Partnered With the Platforms That Power <span className="gradient-text" style={{ display: 'inline' }}>Modern<br/>Enterprise.</span>
            </h2>
            <p className="partnerships-subheading">
              We don't just use these technologies - we're recognized partners with deep integration<br/>expertise.
            </p>
          </div>

          <div className="partnerships-grid">
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

      <WhyInTime handleMouseMove={handleMouseMove} />

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