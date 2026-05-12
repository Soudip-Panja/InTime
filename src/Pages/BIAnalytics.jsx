import React, { useEffect, useRef } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  BarChart3,
  Database,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Search,
  Layers,
  ArrowRight,
  PieChart,
  Activity,
  ShieldCheck,
  Cpu,
  Layout,
  Lightbulb,
  Building2,
  Users,
  Utensils
} from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BIAnalytics() {
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

    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".bi-header > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Section Animations
      gsap.utils.toArray(".bi-section").forEach((section) => {
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

      // Card Stagger Animations
      gsap.utils.toArray(".bi-grid").forEach((grid) => {
        gsap.from(grid.querySelectorAll(".bi-card"), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: grid,
            start: "top 85%"
          }
        });
      });

      // Case Study Stagger
      gsap.from(".case-study-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".case-studies-grid",
          start: "top 80%"
        }
      });
    }, contentRef);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const challenges = [
    "Is manual report generation consuming excessive time and resources, leading to outdated information and delayed decisions?",
    "Do your current BI dashboards offer only historical views (hindsight) rather than predictive intelligence (foresight)?",
    "Are you struggling to integrate and harmonize data from disparate sources (SAP, CRM, legacy systems, external data) for a single source of truth?",
    "Do you need to move beyond passive reporting to an active, data-driven culture where insights directly trigger optimized actions and autonomous responses?",
    "Are your executives demanding more sophisticated forecasting, scenario planning, and anomaly detection capabilities?"
  ];

  const services = [
    {
      icon: <Database size={24} className="text-blue-400" />,
      title: "Enterprise Data Integration & Modern Data Warehousing",
      tagline: "Building a solid, scalable foundation for all your analytics initiatives.",
      items: [
        "Robust Data Warehousing solutions (Azure Synapse, SQL Data Warehouse, SAP BW/4HANA)",
        "ETL/ELT pipeline development for seamless data ingestion from diverse sources (SAP, non-SAP, cloud, on-premise)",
        "Data governance, quality management, and master data management strategies",
        "Unifying disparate data silos into a coherent, accessible knowledge base"
      ],
      benefit: "Ensure data accuracy, consistency, and accessibility, creating a trusted foundation for all BI and AI applications."
    },
    {
      icon: <Layout size={24} className="text-purple-400" />,
      title: "Advanced Data Visualization & Interactive Reporting",
      tagline: "Transforming complex data into intuitive, actionable dashboards and reports.",
      items: [
        "Expertise in leading BI platforms: Microsoft Power BI, SAP Analytics Cloud (SAC), Tableau",
        "Custom KPI Modeling & Dashboard Development (e.g., 150+ predictive KPIs for holistic business view)",
        "Real-time operational dashboards integrated directly with SAP and other core systems",
        "Mobile-responsive BI solutions for insights on the go"
      ],
      benefit: "Empower users at all levels with self-service analytics, clear visualizations, and the ability to drill down into data for deeper understanding."
    },
    {
      icon: <TrendingUp size={24} className="text-indigo-400" />,
      title: "Predictive Analytics & AI-Driven Forecasting",
      tagline: "Moving beyond historical analysis to anticipate future trends, risks, and opportunities.",
      items: [
        "Deployment of Machine Learning (ML) models for trend anticipation, demand forecasting, anomaly detection",
        "AI-driven forecasting embedded within your BI environment for enhanced accuracy",
        "Customer segmentation, churn prediction, and lifetime value modeling",
        "Predictive maintenance and operational risk modeling"
      ],
      benefit: "Make proactive, data-informed decisions, optimize resource allocation, and gain a significant competitive edge by understanding what's next."
    },
    {
      icon: <Zap size={24} className="text-blue-500" />,
      title: "From Insights to Autonomous Action (BI + AI Synergy)",
      tagline: "Closing the loop between insight generation and operational execution.",
      items: [
        "Proprietary BI methodology integrates with NeuraCore™ and ExecuCore™ AI platforms",
        "Automated alerts and escalations based on predefined BI thresholds",
        "Triggering automated workflows in SAP or other systems based on predictive insights"
      ],
      benefit: "Move beyond passive reporting to active business optimization, where insights directly drive intelligent actions and continuous improvement."
    }
  ];

  const caseStudies = [
    {
      icon: <Building2 size={24} />,
      title: "Public Sector Utility Firm",
      desc: "Architected and deployed 7 SAP module-wise BI dashboards, slashing manual report generation time by 80% and enabling daily, data-driven strategic and operational decisions.",
      results: ["80% reduction in manual reporting", "7 SAP modules integrated", "Daily strategic insights"]
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Leading Diversified Business Group",
      desc: "Engineered six advanced, AI-integrated BI dashboards (leveraging ML and Power Automate) encompassing over 150+ critical KPIs for executive leadership, empowering real-time enterprise-wide insights.",
      results: ["150+ critical KPIs", "AI-integrated dashboards", "Real-time insights"]
    },
    {
      icon: <Utensils size={24} />,
      title: "Restaurant Chain Optimization",
      desc: "Developed a comprehensive BI dashboard that provided significant operational insights into sales, inventory, and customer behavior, directly contributing to increased profitability and efficiency.",
      results: ["Increased profitability", "Operational insights", "Customer behavior analysis"]
    }
  ];

  return (
    <div className="bi-page-wrapper" ref={contentRef}>
      <div className="bi-atmosphere">
        <div className="bi-blob bi-blob-1"></div>
        <div className="bi-blob bi-blob-2"></div>
        <div className="bi-blob bi-blob-3"></div>
      </div>
      <Navbar />

      <main className="bi-main-content">
        {/* Hero Section */}
        <section className="bi-hero-section">
          <div className="container">
            <div className="bi-header">
              <div className="unified-section-label mx-auto mb-3">INTELLIGENCE & ANALYTICS</div>
              <h1 className="bi-title">
                From Data Overload to Decisive Advantage: <br />
                <span className="gradient-text">Intelligent BI & Predictive Analytics</span>
              </h1>
              <p className="bi-subtitle">
                InTime Global doesn't just visualize your data; we weaponize it. Our Business Intelligence and Predictive Analytics solutions empower your C-suite, department heads, and operational teams with real-time, AI-driven foresight for faster, smarter, and more confident data-backed decisions.
              </p>
              <div className="hero-cta-group">
                <button className="primary-cta">
                  Transform Your Data Strategy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="bi-challenges-section bi-section">
          <div className="container">
            <div className="section-header text-center mb-5">
              <div className="unified-section-label mx-auto mb-3">THE CHALLENGE</div>
              <h2 className="section-title">Is Your Enterprise Drowning in Data But <br />Starving for Actionable Insights?</h2>
              <p className="section-subtitle mt-3">
                Transform these common BI challenges into competitive advantages with InTime's intelligent analytics solutions.
              </p>
            </div>
            <div className="bi-grid challenges-grid">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="bi-card challenge-card torch-glow-card">
                  <div className="challenge-icon-v2">
                    <div className="alert-badge">
                      <AlertCircle size={18} />
                    </div>
                  </div>
                  <p className="challenge-text">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bi-services-section-v2 bi-section">
          <div className="container">
            <div className="section-header text-center mb-5">
              <div className="unified-section-label mx-auto mb-3">OUR CAPABILITIES</div>
              <h2 className="section-title">Our Business Intelligence & Predictive Analytics Services</h2>
              <p className="section-subtitle mt-3">A comprehensive approach from data integration to autonomous action, delivering foresight and immediate impact.</p>
            </div>
            
            <div className="services-v2-list">
              {services.map((service, idx) => (
                <div key={idx} className="service-v2-card torch-glow-card">
                  <div className="service-v2-header">
                    <div className="service-v2-icon">{service.icon}</div>
                    <div className="service-v2-title-box">
                      <h3>{service.title}</h3>
                      <p className="tagline">{service.tagline}</p>
                    </div>
                  </div>
                  <div className="service-v2-body">
                    <div className="service-v2-subheading">Services:</div>
                    <ul className="service-v2-list-items">
                      {service.items.map((item, i) => (
                        <li key={i}><div className="dot"></div> {item}</li>
                      ))}
                    </ul>
                    <div className="service-v2-benefit">
                      <span className="benefit-label">Benefit:</span>
                      <p>{service.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator Section */}
        <section className="bi-differentiator-section bi-section">
          <div className="container">
            <div className="diff-v2-box torch-glow-card">
              <div className="diff-v2-icon-top">
                <Lightbulb size={32} className="text-blue-400" />
              </div>
              <div className="unified-section-label mx-auto mb-3">THE INTIME DIFFERENCE</div>
              <h2 className="diff-v2-title">We Build Decision Engines, Not Just Dashboards</h2>
              <p className="diff-v2-text">
                While many providers offer dashboards, we deliver foresight and the capability for autonomous, data-driven action. Our approach connects insights directly to automated processes and intelligent systems for immediate impact. Unlike Tableau-only vendors, our BI integrates AI and SAP for autonomous actions that drive real business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section / Case Studies */}
        <section className="bi-impact-section bi-section">
          <div className="container">
            <div className="section-header text-center mb-5">
              <div className="unified-section-label mx-auto mb-3">PROVEN IMPACT</div>
              <h2 className="section-title">Transforming Enterprise Decision-Making</h2>
              <p className="section-subtitle mt-3">Real client transformations showcasing the power of intelligent BI and predictive analytics.</p>
            </div>
            
            <div className="case-studies-grid">
              {caseStudies.map((cs, idx) => (
                <div key={idx} className="case-study-card torch-glow-card">
                  <div className="cs-icon-box">{cs.icon}</div>
                  <h3 className="cs-title">{cs.title}</h3>
                  <p className="cs-desc">{cs.desc}</p>
                  <div className="cs-results">
                    <div className="cs-results-label">KEY RESULTS:</div>
                    <ul>
                      {cs.results.map((res, i) => (
                        <li key={i}><div className="bullet"></div> {res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bi-final-cta-section bi-section">
          <div className="container">
            <div className="final-cta-v2-box text-center">
              <h2 className="final-cta-v2-title">Ready to Transform Your Data into Your Most Powerful Strategic Asset?</h2>
              <p className="final-cta-v2-subtitle">Discover how InTime's advanced BI and predictive analytics solutions can provide the foresight your enterprise needs to stay ahead of the competition.</p>
              <div className="final-cta-v2-btns">
                <button className="cta-btn-white">Request a Personalized Demo <ArrowRight size={18} /></button>
                <button className="cta-btn-dark"><Zap size={18} /> The Future of BI</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}