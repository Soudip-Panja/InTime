import React, { useEffect, useRef } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  Search,
  Cpu,
  Wrench,
  Heart,
  Target,
  Award,
  Zap,
  ShieldCheck,
  ArrowRight,
  Database,
  CheckCircle,
  Globe
} from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyInTimePage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".why-header > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Sections Animation
      gsap.utils.toArray(".why-detail-section").forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const pillars = [
    {
      icon: <Search size={32} />,
      title: "Strategic Diagnosis First",
      subtitle: "We solve the right problem, not just the obvious one.",
      description: "Our assessments often reveal the most important problem isn't the one the client came to us with. This saves months of misdirected effort and significant wasted investment. We don't just take orders; we provide strategic guidance.",
      features: ["In-depth technical audits", "Business process mapping", "ROI feasibility studies", "Legacy debt analysis"]
    },
    {
      icon: <Cpu size={32} />,
      title: "AI-Native Discipline",
      subtitle: "20 years of engineering rigor meets modern AI innovation.",
      description: "We use AI to accelerate delivery, but we never ship without the testing, security, and architecture that production demands. Speed without rigor is just faster failure. Our AI solutions are built for enterprise scale, not just demos.",
      features: ["LLM integration & fine-tuning", "Autonomous agent workflows", "Security-first AI architecture", "Automated QA & testing"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Foundation Creators",
      subtitle: "We build the tools the industry depends on.",
      description: "NativeBase, gluestack-ui, React Native core contributions. React Summit 2024 Productivity Award. Thousands of developers trust our foundations. When you work with us, you're working with the architects of the ecosystem.",
      features: ["Open-source ecosystem leaders", "UI/UX system architecture", "Developer productivity tools", "Core framework contributors"]
    },
    {
      icon: <Heart size={32} />,
      title: "Long-Term Commitment",
      subtitle: "We are your partners, not just your vendors.",
      description: "550+ engagements. Clients who've been with us for 5+ years. We're invested in long-term success, not just the current project scope. We stay to ensure your solution evolves as your business grows.",
      features: ["Dedicated engineering squads", "Continuous innovation cycles", "Strategic roadmap planning", "24/7 Enterprise support"]
    }
  ];

  return (
    <div className="why-page-wrapper" ref={contentRef}>
      <Navbar />

      <main className="why-main-content">
        {/* Hero Section */}
        <section className="why-hero-section">
          <div className="container">
            <div className="why-header">
              <div className="competitive-badge">
                <Award size={14} /> Competitive Analysis Report
              </div>
              <h1 className="why-title">
                Why Fortune 500 Companies Choose InTime <br />
                <span className="gradient-text">Over Traditional Providers</span>
              </h1>
              <p className="why-subtitle">
                Independent analysis shows we consistently outperform competitors across all key metrics that matter to enterprise clients.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Metrics Grid */}
        <section className="why-metrics-section">
          <div className="container">
            <div className="metrics-summary-grid">
              <div className="metric-summary-card">
                <div className="m-icon icon-blue"><Database size={24} /></div>
                <h3>$100M+</h3>
                <p className="m-label">Client Value Created</p>
                <p className="m-sub">Verified ROI across all clients</p>
              </div>
              <div className="metric-summary-card">
                <div className="m-icon icon-purple"><Cpu size={24} /></div>
                <h3>95%</h3>
                <p className="m-label">SAP Success Rate</p>
                <p className="m-sub">vs 68% industry average</p>
              </div>
              <div className="metric-summary-card">
                <div className="m-icon icon-blue"><Zap size={24} /></div>
                <h3>90 Days</h3>
                <p className="m-label">Average Implementation</p>
                <p className="m-sub">vs 6-12 months typical</p>
              </div>
              <div className="metric-summary-card">
                <div className="m-icon icon-purple"><Award size={24} /></div>
                <h3>30+</h3>
                <p className="m-label">Fortune 500 Clients</p>
                <p className="m-sub">across 6 countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="comparison-table-section why-detail-section">
          <div className="container">
            <div className="comparison-container">
              <div className="comparison-header-box">
                <h2>Head-to-Head Comparison: InTime Global vs Market Leaders</h2>
                <p>Based on independent analysis of 50+ enterprise implementations</p>
              </div>

              <div className="comparison-table-wrapper">
                <div className="comparison-table">
                  <div className="c-row c-header">
                    <div className="c-col">Capability</div>
                    <div className="c-col c-intime">✅ InTime Global</div>
                    <div className="c-col">❌ Traditional Providers</div>
                    <div className="c-col c-advantage">Our Advantage</div>
                  </div>

                  {/* Row 1 */}
                  <div className="c-row">
                    <div className="c-col cap-col">
                      <div className="cap-icon"><Cpu size={18} /></div>
                      <span>AI Platform Technology</span>
                    </div>
                    <div className="c-col">
                      <div className="check-text">
                        <CheckCircle size={14} className="c-green" />
                        Proprietary NeuraCore™ & ExecuCore™ - Proven $50M+ savings
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="cross-text">
                        <span>×</span> Generic third-party solutions with no proven ROI
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="adv-pill">~ 30% cost reduction guaranteed</div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="c-row">
                    <div className="c-col cap-col">
                      <div className="cap-icon"><Zap size={18} /></div>
                      <span>SAP Implementation Speed</span>
                    </div>
                    <div className="c-col">
                      <div className="check-text">
                        <CheckCircle size={14} className="c-green" />
                        95% success rate with 90-day deployment
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="cross-text">
                        <span>×</span> 68% success rate with 6-12 months timeline
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="adv-pill">~ 3x faster than industry standard</div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="c-row">
                    <div className="c-col cap-col">
                      <div className="cap-icon"><Database size={18} /></div>
                      <span>Cost Structure</span>
                    </div>
                    <div className="c-col">
                      <div className="check-text">
                        <CheckCircle size={14} className="c-green" />
                        40% cost advantage through automation + guaranteed ROI
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="cross-text">
                        <span>×</span> Premium pricing with manual processes, no guarantees
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="adv-pill">~ ROI-backed pricing model</div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="c-row">
                    <div className="c-col cap-col">
                      <div className="cap-icon"><Globe size={18} /></div>
                      <span>Regional Expertise</span>
                    </div>
                    <div className="c-col">
                      <div className="check-text">
                        <CheckCircle size={14} className="c-green" />
                        UAE Central Bank & GCC compliant with local partnerships
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="cross-text">
                        <span>×</span> Limited regional knowledge, generic global approach
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="adv-pill">6+ countries, 100+ local implementations</div>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="c-row">
                    <div className="c-col cap-col">
                      <div className="cap-icon"><ShieldCheck size={18} /></div>
                      <span>Implementation Risk</span>
                    </div>
                    <div className="c-col">
                      <div className="check-text">
                        <CheckCircle size={14} className="c-green" />
                        Zero-risk guarantee with proven methodologies
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="cross-text">
                        <span>×</span> High failure rates, blame-shifting when problems arise
                      </div>
                    </div>
                    <div className="c-col">
                      <div className="adv-pill">100% completion rate for contracted deliverables</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="why-pillars-section">
          <div className="container">
            <div className="why-pillars-grid">
              {pillars.map((pillar, index) => (
                <div className="why-pillar-card why-detail-section" key={index}>
                  <div className="pillar-icon-wrapper">
                    {pillar.icon}
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-subtitle-text">{pillar.subtitle}</p>
                    <p className="pillar-description">{pillar.description}</p>
                    <ul className="pillar-feature-list">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx}>
                          <ShieldCheck size={16} className="feature-tick" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="why-philosophy-section bg-shade-1 why-detail-section">
          <div className="container">
            <div className="philosophy-layout">
              <div className="philosophy-content">
                <div className="unified-section-label">OUR PHILOSOPHY</div>
                <h2>Advocacy Through <span className="gradient-text">Engineering.</span></h2>
                <p>
                  We don't just build what we're told. We advocate for the best technical and business outcomes for our clients. This means being honest about what won't work, even if it means smaller initial engagements.
                </p>
                <div className="philosophy-stats">
                  <div className="phil-stat">
                    <span className="stat-value">550+</span>
                    <span className="stat-label">Successful Engagements</span>
                  </div>
                  <div className="phil-stat">
                    <span className="stat-value">15+</span>
                    <span className="stat-label">Years of Innovation</span>
                  </div>
                  <div className="phil-stat">
                    <span className="stat-value">95%</span>
                    <span className="stat-label">Client Retention</span>
                  </div>
                </div>
              </div>
              <div className="philosophy-visual">
                <div className="philosophy-card">
                  <Target size={40} className="phil-icon" />
                  <h3>Our Mission</h3>
                  <p>To empower enterprises with the foundations they need to thrive in an AI-orchestrated world.</p>
                </div>
                <div className="philosophy-card">
                  <Award size={40} className="phil-icon" />
                  <h3>Our Vision</h3>
                  <p>To be the world's most trusted engineering partner for complex digital transformations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="why-cta-section why-detail-section">
          <div className="container">
            <div className="why-cta-box">
              <Zap size={48} className="cta-zap-icon" />
              <h2>Ready to experience the InTime way?</h2>
              <p>Let's have a conversation about your most complex business challenges.</p>
              <div className="cta-btns">
                <a href="#" className="nav-cta-btn">
                  Schedule a Strategy Conversation <ArrowRight size={18} />
                </a>
                <a href="/roi" className="explore-link">
                  View Our ROI Metrics <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
