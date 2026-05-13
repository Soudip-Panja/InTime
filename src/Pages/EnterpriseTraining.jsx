import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  GraduationCap, Users, BookOpen, Brain, Database, TrendingUp, Target,
  Monitor, Settings, Award, Focus, Headphones, FileText, BarChart3
} from "lucide-react";

export default function EnterpriseTraining() {
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
        style={{ 
          background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)' 
        }}
      >
        <div className="container">
          <div className="hero-content mx-auto d-flex flex-column align-items-center">
            <p className="hero-label d-flex align-items-center gap-2 justify-content-center">
              <GraduationCap size={16} /> Enterprise Training & Capability Building
            </p>
            
            <h1 className="hero-title">
              Empower Your Workforce: <br />
              <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #4ade80, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Master Tomorrow's</span> <br />
              Technologies
            </h1>

            <p className="hero-description text-center" style={{ maxWidth: '800px' }}>
              InTime's training programs transform teams into innovators, mastering AI, SAP, and BI technologies for competitive advantage.
            </p>

            <div className="hero-action d-flex align-items-center gap-4 flex-wrap justify-content-center">
              <a href="#" className="nav-cta-btn hero-cta" style={{ background: 'linear-gradient(90deg, #10b981, #3b82f6)', border: 'none' }}>
                <Users size={20} className="me-2" /> Explore Training Programs <span className="arrow">→</span>
              </a>
              <a href="#" className="perspective-cta" style={{ borderBottom: 'none' }}>
                Get Our Training Guide <span className="arrow">→</span>
              </a>
            </div>

            <div className="trusted-stats d-flex gap-5 mt-5 pt-3 flex-wrap justify-content-center">
              <div>
                <span className="stat-number" style={{ fontSize: '2.5rem', color: '#4ade80' }}>40%</span>
                <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem' }}>ADOPTION BOOST</p>
              </div>
              <div>
                <span className="stat-number" style={{ fontSize: '2.5rem', color: '#3b82f6' }}>500+</span>
                <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem' }}>PROFESSIONALS TRAINED</p>
              </div>
              <div>
                <span className="stat-number" style={{ fontSize: '2.5rem', color: '#06b6d4' }}>95%</span>
                <p className="hero-label mb-0 mt-2" style={{ fontSize: '0.8rem' }}>SATISFACTION RATE</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="section-separator"></div>

      {/* SECTION 1: Equipped to Thrive? */}
      <section className="st-section st-section-dark">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              Is Your Organization <br />
              <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #4ade80, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Equipped to Thrive?</span>
            </h2>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Brain size={22} /></div>
                <p className="st-card-text mb-0">Is your workforce prepared for AI adoption?</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><Database size={22} /></div>
                <p className="st-card-text mb-0">Are teams ready for SAP S/4HANA optimization?</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="st-card torch-glow-card flex-row align-items-center gap-3">
                <div className="st-card-icon-orange"><TrendingUp size={22} /></div>
                <p className="st-card-text mb-0">Is data literacy a challenge in your organization?</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
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
              <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #4ade80, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Training Offerings</span>
            </h2>
            <p className="section-subtitle mt-3">
              Our trainers are SAP/AI practitioners, unlike academic providers, bringing real-world experience to every session.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-4">
              <div className="st-card torch-glow-card h-100">
                <div className="st-card-icon-blue mb-4 d-inline-flex" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}><Brain size={24} color="white" /></div>
                <h3 className="st-card-title mb-3">AI Enablement Workshops</h3>
                <p className="st-card-text mb-3">
                  <span style={{color: '#4ade80', fontWeight: 600}}>Focus:</span> Demystifying AI for business benefits
                </p>
                <p className="st-card-text">
                  <span style={{color: '#3b82f6', fontWeight: 600}}>Modules:</span> AI for executives and teams, practical implementation strategies
                </p>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="st-card torch-glow-card h-100">
                <div className="st-card-icon-blue mb-4 d-inline-flex" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}><Database size={24} color="white" /></div>
                <h3 className="st-card-title mb-3">SAP Proficiency Programs</h3>
                <p className="st-card-text mb-3">
                  <span style={{color: '#4ade80', fontWeight: 600}}>Focus:</span> Maximizing SAP S/4HANA value
                </p>
                <p className="st-card-text">
                  <span style={{color: '#3b82f6', fontWeight: 600}}>Modules:</span> Pre-implementation, end-user, post-implementation training
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="st-card torch-glow-card h-100">
                <div className="st-card-icon-blue mb-4 d-inline-flex" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}><BarChart3 size={24} color="white" /></div>
                <h3 className="st-card-title mb-3">BI & Data Literacy Workshops</h3>
                <p className="st-card-text mb-3">
                  <span style={{color: '#4ade80', fontWeight: 600}}>Focus:</span> Building a data-driven culture
                </p>
                <p className="st-card-text">
                  <span style={{color: '#3b82f6', fontWeight: 600}}>Modules:</span> Power BI, data storytelling, data literacy fundamentals
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
              Flexible <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #4ade80, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Delivery Formats</span>
            </h2>
            <p className="section-subtitle mt-3">
              Scale training for projects of any size with our versatile delivery options.
            </p>
          </div>

          <div className="row g-4 justify-content-center text-center mb-5 pb-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Monitor size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Live Virtual Classrooms</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Interactive online sessions with real-time collaboration</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Users size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>In-Person Bootcamps</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Intensive hands-on training at your location or ours</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center"><Settings size={24} /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Customized Modules</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Tailored content to meet your specific business needs</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
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
              The InTime <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #4ade80, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Training Advantage</span>
            </h2>
            <p className="section-subtitle mt-3">
              Our training boosts adoption by 40% through proven methodologies and expert guidance.
            </p>
          </div>

          <div className="row g-4 justify-content-center text-center">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Award size={24} color="white" /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Expert Instructors</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Certified professionals with real-world implementation experience</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Target size={24} color="white" /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Industry-Aligned Curriculum</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Content designed to meet current market demands and best practices</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Focus size={24} color="white" /></div>
                <h3 className="st-card-title" style={{ fontSize: '1.1rem' }}>Practical Application Focus</h3>
                <p className="st-card-text" style={{ fontSize: '0.9rem' }}>Hands-on exercises and real project scenarios for immediate impact</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="st-card torch-glow-card align-items-center h-100">
                <div className="st-card-icon-blue st-card-icon-center" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Headphones size={24} color="white" /></div>
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
          <div className="st-banner" style={{ marginTop: 0, padding: '4rem 2rem', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2 className="st-banner-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#064e3b' }}>
              Invest in Your People
            </h2>
            <p className="st-banner-text mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem', marginBottom: '2.5rem', color: '#065f46' }}>
              Elevate capabilities with our comprehensive training programs. Transform your workforce into technology leaders who drive innovation and competitive advantage.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
              <a href="#" className="btn rounded-pill px-4 py-3 d-flex align-items-center gap-2" style={{ fontWeight: 600, background: '#10b981', color: 'white', border: 'none', boxShadow: '0 4px 6px rgba(16,185,129,0.2)' }}>
                <Users size={18} /> Request a Training Consultation <span className="arrow">→</span>
              </a>
              <a href="#" className="btn rounded-pill px-4 py-3 d-flex align-items-center gap-2" style={{ fontWeight: 600, background: 'transparent', color: '#064e3b', border: '1px solid rgba(6,78,59,0.3)' }}>
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