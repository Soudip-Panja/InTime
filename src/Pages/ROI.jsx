import React, { useEffect, useRef } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  Brain, 
  TrendingUp, 
  Code2, 
  ShieldCheck,
  Star,
  Zap,
  Globe
} from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ROI() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const bgGlowRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initial Header Animation
    const headerElements = headerRef.current.children;
    gsap.fromTo(headerElements, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Background Glow Animation
    gsap.to(bgGlowRef.current, {
      opacity: 0.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cards Scroll Animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const roiCards = [
    {
      icon: <Brain size={28} />,
      iconBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      title: "Autonomous AI Orchestration",
      desc: "Deploy multi-agent AI ecosystems that handle complex decision-making and redundant tasks with 40% increased operational efficiency.",
      roiStat: "40% Efficiency Gain",
      timeline: "60 Days",
      metricLabel: "Operational Impact"
    },
    {
      icon: <Zap size={28} />,
      iconBg: "linear-gradient(135deg, #06b6d4, #0891b2)",
      title: "90-Day SAP Modernization",
      desc: "Accelerate your digital core transformation with zero business disruption. Our high-velocity methodology delivers 3x faster process execution.",
      roiStat: "3x Process Velocity",
      timeline: "90 Days",
      metricLabel: "Time-to-Value"
    },
    {
      icon: <TrendingUp size={28} />,
      iconBg: "linear-gradient(135deg, #10b981, #059669)",
      title: "Predictive Intelligence Engines",
      desc: "Transform raw data into strategic foresight. Identify market shifts and optimize revenue streams with AI-powered predictive modeling.",
      roiStat: "25% Revenue Growth",
      timeline: "45 Days",
      metricLabel: "Strategic Impact"
    },
    {
      icon: <Code2 size={28} />,
      iconBg: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      title: "Self-Optimizing Applications",
      desc: "Engineering future-proof apps that learn from user behavior to continuously improve UX and performance autonomously.",
      roiStat: "50% Higher Engagement",
      timeline: "120 Days",
      metricLabel: "User Retention"
    },
    {
      icon: <Globe size={28} />,
      iconBg: "linear-gradient(135deg, #f59e0b, #d97706)",
      title: "Global Engineering On-Demand",
      desc: "Instantly scale your technical bandwidth with pre-vetted, elite AI and SAP engineering squads ready for enterprise-scale deployment.",
      roiStat: "2x Faster Delivery",
      timeline: "48 Hours",
      metricLabel: "Scale Velocity"
    },
    {
      icon: <ShieldCheck size={28} />,
      iconBg: "linear-gradient(135deg, #64748b, #475569)",
      title: "Enterprise Digital Literacy",
      desc: "Custom-tailored mastery programs designed to turn your leadership and technical teams into high-impact digital transformation drivers.",
      roiStat: "85% Skill Adoption",
      timeline: "30 Days",
      metricLabel: "Human Capital"
    }
  ];

  return (
    <div className="roi-page-wrapper">
      <div className="roi-premium-bg" ref={bgGlowRef}>
        <div className="roi-glow glow-1"></div>
        <div className="roi-glow glow-2"></div>
      </div>

      <Navbar />
      
      <main className="roi-content-section">
        <div className="container">
          <div className="roi-header" ref={headerRef}>
            <div className="roi-pill-enterprise">
              <Star size={14} fill="currentColor" /> Strategic Enterprise Solutions
            </div>
            <h1 className="roi-title-xl">
              Engineering <span>Measurable Business Impact</span><br />
              Through Digital Excellence
            </h1>
            <p className="roi-subtitle-premium">
              We don't just build technology; we engineer strategic advantages. 
              Each solution is backed by rigorous ROI metrics and rapid delivery timelines.
            </p>
          </div>

          <div className="roi-grid-premium">
            {roiCards.map((card, index) => (
              <div 
                className="roi-card-premium" 
                key={index}
                ref={el => cardsRef.current[index] = el}
              >
                <div className="card-icon-container" style={{ background: card.iconBg }}>
                  {React.cloneElement(card.icon, { color: 'white' })}
                </div>
                
                <h3 className="premium-card-title">{card.title}</h3>
                <p className="premium-card-desc">{card.desc}</p>
                
                <div className="premium-card-metrics">
                  <div className="metric-box">
                    <span className="metric-label">{card.metricLabel}</span>
                    <span className="metric-value highlight-green">{card.roiStat}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Execution Time</span>
                    <span className="metric-value highlight-blue">{card.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}