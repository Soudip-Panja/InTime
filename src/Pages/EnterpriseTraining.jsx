import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { 
  GraduationCap, Users, BookOpen, Brain, Database, TrendingUp, Target,
  Monitor, Settings, Award, Focus, Headphones, FileText, BarChart3
} from "lucide-react";
import NumberCounter from "../Components/NumberCounter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EnterpriseTraining() {
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const assessmentRefs = useRef([]);
  const offeringRefs = useRef([]);
  const formatRefs = useRef([]);
  const advantageRefs = useRef([]);
  const bannerRef = useRef(null);

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

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }

    assessmentRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });

    offeringRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 0.8, delay: index * 0.15, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" }
          }
        );
      }
    });

    formatRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });

    advantageRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });

    if (bannerRef.current) {
      gsap.fromTo(bannerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: bannerRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        }
      );
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="page-wrapper" ref={contentRef}>
      <SEO
        title="Enterprise IT Training & Capability Building | InTime Global"
        description="Upskill your workforce on SAP, BI, and AI tools with custom training programs designed by InTime Global's elite consultants."
        keywords="IT training, corporate training, SAP training, BI training, workforce upskilling, InTime Global"
      />
      <Navbar />
      
        {/* HERO SECTION */}
        <section className="why-hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '40px' }}>
          
          {/* Abstract Ambient Background */}
          <div className="boss-ambient-bg" style={{ opacity: 0.5 }}></div>
          <div className="boss-glow-orb orb-1" style={{ background: 'rgba(59, 130, 246, 0.12)' }}></div>
          <div className="boss-glow-orb orb-2" style={{ background: 'rgba(16, 185, 129, 0.08)' }}></div>
          <div className="boss-glow-orb orb-3" style={{ background: 'rgba(0, 210, 255, 0.1)' }}></div>
          
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div className="visual-ring ring-1" style={{ width: '800px', height: '800px', borderStyle: 'dashed', borderColor: 'rgba(59, 130, 246, 0.4)' }}></div>
            <div className="visual-ring ring-2" style={{ width: '600px', height: '600px', borderColor: 'rgba(16, 185, 129, 0.3)' }}></div>
            <div className="visual-ring ring-3" style={{ width: '400px', height: '400px', borderStyle: 'dashed', borderColor: 'rgba(0, 210, 255, 0.4)' }}></div>
            <div className="visual-ring" style={{ width: '1000px', height: '1000px', animation: 'spin 30s linear infinite reverse', border: '1px solid rgba(255,255,255,0.05)' }}></div>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="why-header text-center mx-auto" style={{ maxWidth: '900px' }} ref={heroRef}>
              <div className="competitive-badge" style={{ margin: '0 auto 1.5rem' }}>
                <GraduationCap size={14} /> Enterprise Training & Capability Building
              </div>
              <h1 className="why-title">
                Empower Your Workforce: <br />
                <span className="gradient-text" style={{ fontWeight: 'bold' }}>Master Tomorrow's Technologies</span>
              </h1>
              <p className="why-subtitle">
                InTime's training programs transform teams into innovators, mastering AI, SAP, and BI technologies for competitive advantage.
              </p>
              
              <div className="trusted-stats d-flex gap-5 mt-5 pt-3 flex-wrap justify-content-center">
                <div>
                  <NumberCounter end={40} suffix="%" className="stat-number" style={{ fontSize: '2.5rem' }} />
                  <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem', opacity: 0.8 }}>ADOPTION BOOST</p>
                </div>
                <div>
                  <NumberCounter end={500} suffix="+" className="stat-number" style={{ fontSize: '2.5rem' }} />
                  <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem', opacity: 0.8 }}>PROFESSIONALS TRAINED</p>
                </div>
                <div>
                  <NumberCounter end={95} suffix="%" className="stat-number gradient-text" style={{ fontSize: '2.5rem' }} />
                  <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem', opacity: 0.8 }}>SATISFACTION RATE</p>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mt-5">
                <a href="#" className="nav-cta-btn hero-cta text-center">
                  Explore Training Programs <span className="arrow">→</span>
                </a>
                <a href="#" className="nav-cta-btn hero-cta text-center" style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  backdropFilter: 'blur(10px)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}>
                  Get Our Training Guide
                </a>
              </div>
            </div>
          </div>
        </section>

      <div className="section-separator"></div>

      {/* SECTION 1: Equipped to Thrive? */}
      <section className="st-section st-section-dark">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              Is Your Organization <br />
              <span className="gradient-text">Equipped to Thrive?</span>
            </h2>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6" ref={el => assessmentRefs.current[0] = el}>
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Brain size={22} /></div>
                <p className="st-card-text mb-0">Is your workforce prepared for AI adoption?</p>
              </div>
            </div>
            <div className="col-12 col-md-6" ref={el => assessmentRefs.current[1] = el}>
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Database size={22} /></div>
                <p className="st-card-text mb-0">Are teams ready for SAP S/4HANA optimization?</p>
              </div>
            </div>
            <div className="col-12 col-md-6" ref={el => assessmentRefs.current[2] = el}>
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><TrendingUp size={22} /></div>
                <p className="st-card-text mb-0">Is data literacy a challenge in your organization?</p>
              </div>
            </div>
            <div className="col-12 col-md-6" ref={el => assessmentRefs.current[3] = el}>
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Target size={22} /></div>
                <p className="st-card-text mb-0">Do you need role-specific training for immediate impact?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Key Offerings */}
      <section className="st-section st-section-alt">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              Our Key Enterprise <br />
              <span className="gradient-text">Training Offerings</span>
            </h2>
            <p className="section-subtitle mt-3">
              Our trainers are SAP/AI practitioners, unlike academic providers, bringing real-world experience to every session.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-4" ref={el => offeringRefs.current[0] = el}>
              <div className="st-card torch-glow-card h-100">
                <div className="st-card-icon-blue mb-4 d-inline-flex"><Brain size={24} /></div>
                <h3 className="st-card-title mb-3">AI Enablement Workshops</h3>
                <p className="st-card-text mb-3">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Focus:</span> Demystifying AI for business benefits
                </p>
                <p className="st-card-text">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Modules:</span> AI for executives and teams, practical implementation strategies
                </p>
              </div>
            </div>
            
            <div className="col-12 col-md-4" ref={el => offeringRefs.current[1] = el}>
              <div className="st-card torch-glow-card h-100">
                <div className="st-card-icon-blue mb-4 d-inline-flex"><Database size={24} /></div>
                <h3 className="st-card-title mb-3">SAP Proficiency Programs</h3>
                <p className="st-card-text mb-3">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Focus:</span> Maximizing SAP S/4HANA value
                </p>
                <p className="st-card-text">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Modules:</span> Pre-implementation, end-user, post-implementation training
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4" ref={el => offeringRefs.current[2] = el}>
              <div className="st-card torch-glow-card h-100">
                <div className="st-card-icon-blue mb-4 d-inline-flex"><BarChart3 size={24} /></div>
                <h3 className="st-card-title mb-3">BI & Data Literacy Workshops</h3>
                <p className="st-card-text mb-3">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Focus:</span> Building a data-driven culture
                </p>
                <p className="st-card-text">
                  <span style={{color: '#a070ff', fontWeight: 600}}>Modules:</span> Power BI, data storytelling, data literacy fundamentals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Flexible Delivery Formats & Advantage */}
      <section className="st-section st-section-dark">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              Flexible <span className="gradient-text">Delivery Formats</span>
            </h2>
            <p className="section-subtitle mt-3">
              Scale training for projects of any size with our versatile delivery options.
            </p>
          </div>

          <div className="row g-4 justify-content-center text-center mb-5 pb-5">
            <div className="col-12 col-md-6 col-lg-3" ref={el => formatRefs.current[0] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Monitor size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Live Virtual Classrooms</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Interactive online sessions with real-time collaboration</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" ref={el => formatRefs.current[1] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Users size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>In-Person Bootcamps</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Intensive hands-on training at your location or ours</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" ref={el => formatRefs.current[2] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Settings size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Customized Modules</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Tailored content to meet your specific business needs</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" ref={el => formatRefs.current[3] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><BookOpen size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>LMS-Enabled Self-Paced Courses</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Flexible learning with progress tracking and assessments</p>
              </div>
            </div>
          </div>

          <div className="section-separator" style={{ margin: '0' }}></div>

          <div className="section-header text-center mb-5 mt-5 pt-5">
            <h2 className="section-title">
              The InTime <span className="gradient-text">Training Advantage</span>
            </h2>
            <p className="section-subtitle mt-3">
              Our training boosts adoption by 40% through proven methodologies and expert guidance.
            </p>
          </div>

          <div className="row g-4 justify-content-center text-center">
            <div className="col-12 col-md-6 col-lg-3" ref={el => advantageRefs.current[0] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Award size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Expert Instructors</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Certified professionals with real-world implementation experience</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" ref={el => advantageRefs.current[1] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Target size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Industry-Aligned Curriculum</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Content designed to meet current market demands and best practices</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" ref={el => advantageRefs.current[2] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Focus size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Practical Application Focus</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Hands-on exercises and real project scenarios for immediate impact</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" ref={el => advantageRefs.current[3] = el}>
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Headphones size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Post-Training Support</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Ongoing mentorship and resources to ensure successful implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="st-section st-section-alt" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="st-banner" style={{ marginTop: 0, padding: '4rem 2rem' }} ref={bannerRef}>
            <h2 className="st-banner-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              Invest in Your People
            </h2>
            <p className="st-banner-text mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Elevate capabilities with our comprehensive training programs. Transform your workforce into technology leaders who drive innovation and competitive advantage.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
              <a href="#" className="btn btn-light rounded-pill px-4 py-3 d-flex align-items-center gap-2" style={{ fontWeight: 600, border: 'none', color: '#000' }}>
                <Users size={18} /> Request a Training Consultation <span className="arrow">→</span>
              </a>
              <a href="#" className="btn btn-dark rounded-pill px-4 py-3 d-flex align-items-center gap-2" style={{ fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
                <FileText size={18} /> Download Training Catalog
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}