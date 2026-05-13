import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  ShieldCheck, 
  BarChart3,
  Trophy,
  Clock,
  Search,
  MessageSquare,
  Database,
  Brain,
  Tablet,
  Shield
} from "lucide-react";

export default function SmartApp() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const assessments = [
    {
      icon: <Database size={24} />,
      text: "Are your legacy applications siloed, difficult to maintain, and creating barriers to innovation and agility?"
    },
    {
      icon: <Brain size={24} />,
      text: "Do your current applications lack the intelligence needed to adapt, learn from user interactions, or provide personalized experiences?"
    },
    {
      icon: <Tablet size={24} />,
      text: "Are you struggling to deliver seamless, intuitive, and high-performing user experiences across diverse platforms and devices?"
    },
    {
      icon: <Zap size={24} />,
      text: "Do you need custom applications that deeply integrate with your core SAP systems and leverage AI/BI for advanced functionality?"
    },
    {
      icon: <AlertTriangle size={24} />,
      text: "Is your business demanding faster development cycles and more scalable solutions without compromising on quality or performance?"
    },
    {
      icon: <Shield size={24} />,
      text: "Are your applications meeting evolving security, compliance, and data privacy requirements while keeping pace with rapid technological change?"
    }
  ];

  const solutions = [
    {
      icon: <Code2 size={28} />,
      title: "Custom Enterprise Software Development with Embedded Intelligence",
      focus: "Developing bespoke software solutions tailored to your unique business needs, infused with AI capabilities for smarter operations.",
      capabilities: [
        "AI-Driven Software Tools: Custom applications with NeuraCore™/ExecuCore™ integration for intelligent automation",
        "Scalable platforms supporting complex workflows, data analytics, and decision support systems"
      ],
      benefit: "Gain tailored solutions that precisely fit your needs, automate processes, and leverage AI for efficiency and smarter decision-making."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Intelligent Web & Mobile Applications Development",
      focus: "Creating engaging, user-centric web experiences that are intelligent and intuitive across platforms.",
      capabilities: [
        "Responsive Web apps with AI-powered personalization and embedded BI analytics components",
        "Native and Cross-Platform mobile apps with offline capabilities (iOS/Android)",
        "NeuraCore™-powered websites that learn user behavior to optimize content and journeys",
        "Deep integration with ERP/CRM backend systems (SAP, Salesforce) for real-time data access"
      ],
      benefit: "Enhance customer engagement, boost employee productivity, and extend business reach with powerful, intelligent web and mobile solutions."
    },
    {
      icon: <Zap size={28} />,
      title: "Legacy Application Modernization & Integration",
      focus: "Transforming existing applications to meet modern demands and integrate with new technologies.",
      capabilities: [
        "Assessment and roadmap for modernization of legacy systems to cloud-native platforms",
        "Re-architecting/Re-platforming apps to cloud-native environments",
        "API/microservices for enhanced interoperability",
        "Integration with SAP, AI, and BI for extended functionality"
      ],
      benefit: "Reduce technical debt, improve performance and scalability, and enhance security."
    }
  ];

  const methodology = [
    {
      icon: <Search size={24} />,
      title: "Business Logic Mapping & Deep Analysis",
      desc: "We start by thoroughly understanding your processes to identify prime opportunities for automation."
    },
    {
      icon: <Cpu size={24} />,
      title: "AI-Native & BI-Integrated Architecture",
      desc: "Applications with NeuraCore™ integration and BI considerations from day one, ensuring inherent intelligence."
    },
    {
      icon: <Zap size={24} />,
      title: "Continuous Intelligence & Improvement",
      desc: "Systems that learn and improve from every interaction, becoming more efficient over time."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Scalable Autonomy & Future-Proofing",
      desc: "Applications that grow with your business, ensuring long-term adaptability and evolutionary capability."
    }
  ];

  const successStories = [
    {
      icon: <Trophy size={24} />,
      title: "Sports City Digital Transformation",
      desc: "Architected an integrated ecosystem merging ERP, IoT, smart devices, and AI analytics for unmatched operational control and fan engagement across the entire facility.",
      impact: "Complete operational digitization"
    },
    {
      icon: <Clock size={24} />,
      title: "Executive Productivity Solution",
      desc: "Developed a system for administrative oversight, enabling focus on strategic initiatives by automating routine management tasks.",
      impact: "4 hours/day saved in admin time"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-Time BI Platform",
      desc: "Engineered a sales/customer analytics platform delivering real-time insights on sales, customer relationships, and inventory to executives.",
      impact: "Improved decision-making & revenue"
    }
  ];

  return (
    <div className="sa-page-wrapper">
      <Navbar />

      <main className="sa-main-content">
        {/* Hero Section */}
        <section className="sa-hero-section">
          <div className="container">
            <div className="sa-header">
              <div className="unified-section-label mx-auto mb-3">🚀 Smart Application Development & Modernization</div>
              <h1 className="sa-title">
                Intelligent Applications: <br />
                <span className="gradient-text">Engineered for Agility & Scalability</span>
              </h1>
              <p className="sa-subtitle">
                InTime Global doesn't just write code, we engineer intelligent business solutions. Our custom-built web, mobile apps, and enterprise software applications are infused with embedded AI/BI capabilities, designed to self-optimize, integrate seamlessly, and deliver lasting business value.
              </p>
              <div className="sa-btn-group">
                <button className="sa-btn-primary">
                  Discuss Your App Development Project <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section className="sa-assessment-section">
          <div className="container">
            <div className="text-center mb-5">
              <div className="unified-section-label mx-auto mb-3" style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.05)', padding: '4px 12px', borderRadius: '50px', width: 'fit-content' }}>Critical Assessment</div>
              <h2 className="sa-final-title">Is Your Application Portfolio <br /><span style={{ color: '#ef4444' }}>Accelerating or Hindering</span> <br />Your Enterprise Transformation?</h2>
            </div>
            
            <div className="sa-grid">
              {assessments.map((item, idx) => (
                <div key={idx} className="sa-assessment-card">
                  <div className="sa-icon-red">{item.icon}</div>
                  <p className="sa-assessment-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="sa-solutions-section">
          <div className="container">
            <div className="text-center mb-5">
              <div className="unified-section-label mx-auto mb-3" style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.05)', padding: '4px 12px', borderRadius: '50px', width: 'fit-content' }}>Our Solutions</div>
              <h2 className="sa-final-title">Smart Application Development & <br /><span className="gradient-text">Modernization Offerings</span></h2>
            </div>

            <div className="sa-solutions-list">
              {solutions.map((sol, idx) => (
                <div key={idx} className="sa-solution-card">
                  <div className="sa-solution-header">
                    <div className="sa-solution-icon">{sol.icon}</div>
                    <div className="sa-solution-title">
                      <h3>{sol.title}</h3>
                    </div>
                  </div>
                  <p className="sa-solution-focus"><strong>Focus:</strong> {sol.focus}</p>
                  
                  <div className="mb-4">
                    <p className="sa-benefit-label mb-3">Capabilities:</p>
                    <ul className="sa-capability-list">
                      {sol.capabilities.map((cap, i) => (
                        <li key={i}><CheckCircle2 className="sa-check" size={18} /> {cap}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="sa-benefit-box">
                    <div className="sa-benefit-label">Benefit:</div>
                    <p className="sa-benefit-text">{sol.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="sa-methodology-section">
          <div className="container">
            <div className="text-center mb-5">
              <div className="unified-section-label mx-auto mb-3" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.05)', padding: '4px 12px', borderRadius: '50px', width: 'fit-content' }}>Our Methodology</div>
              <h2 className="sa-final-title">Our Development Approach: <br /><span style={{ color: '#10b981' }}>Intelligence by Design, Agile in Execution</span></h2>
            </div>

            <div className="sa-methodology-grid">
              {methodology.map((item, idx) => (
                <div key={idx} className="sa-methodology-card">
                  <div className="sa-icon-green">{item.icon}</div>
                  <div className="sa-methodology-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="sa-diff-banner">
              <div style={{ color: '#fbbf24' }}><Trophy size={28} /></div>
              <p className="sa-diff-text">
                <strong>Technical Differentiator:</strong> Our proprietary methodology delivers low-maintenance applications with high business value compared to traditional approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="sa-success-section">
          <div className="container">
            <div className="text-center mb-5">
              <div className="unified-section-label mx-auto mb-3" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.05)', padding: '4px 12px', borderRadius: '50px', width: 'fit-content' }}>Proven Results</div>
              <h2 className="sa-final-title">Client Success: <br /><span style={{ color: '#a855f7' }}>Intelligent Applications Delivering Results</span></h2>
            </div>

            <div className="sa-grid">
              {successStories.map((story, idx) => (
                <div key={idx} className="sa-success-card">
                  <div className="sa-success-icon">{story.icon}</div>
                  <h3 className="sa-success-title">{story.title}</h3>
                  <p className="sa-success-desc">{story.desc}</p>
                  <div className="sa-impact-badge">
                    <span className="sa-impact-label">IMPACT:</span>
                    <span className="sa-impact-text">{story.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="sa-final-cta">
          <div className="container">
            <h2 className="sa-final-title">Ready to Build Applications <br /><span className="gradient-text">That Drive Transformation?</span></h2>
            <p className="sa-final-subtitle">
              Let's discuss how InTime Global can engineer intelligent, custom software, web, or mobile solutions to meet your unique enterprise needs.
            </p>
            <div className="sa-btn-group">
              <button className="sa-btn-primary">
                Discuss Your App Development Project <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}