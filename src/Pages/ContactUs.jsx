import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SocialBackground from '../Components/SocialBackground';
import {
  Phone, Mail, Briefcase, MapPin, Clock,
  Send, Network, Rss, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', inquiryType: '', timeline: '',
    budget: '', challenge: '', message: '', agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const formSectionRef = useRef(null);
  const formCardRef = useRef(null);
  const channelsHeaderRef = useRef(null);
  const channelsRef = useRef([]);
  const officesHeaderRef = useRef(null);
  const officeRefs = useRef([]);
  const socialHeaderRef = useRef(null);
  const socialCardsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Hero Animation (immediate, no scroll trigger)
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    }

    // Form Section Header + Card
    if (formCardRef.current) {
      gsap.fromTo(
        formCardRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Channels Section Header
    if (channelsHeaderRef.current) {
      gsap.fromTo(
        channelsHeaderRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: channelsHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Channel Cards (stagger)
    channelsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Offices Header
    if (officesHeaderRef.current) {
      gsap.fromTo(
        officesHeaderRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: officesHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Global Office Cards
    officeRefs.current.forEach((office, index) => {
      if (office) {
        gsap.fromTo(
          office,
          { opacity: 0, scale: 0.9, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.12,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: office,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Social Section Header
    if (socialHeaderRef.current) {
      gsap.fromTo(
        socialHeaderRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: socialHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Social Cards
    socialCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.2,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="hero-section about-hero text-center position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <SocialBackground />
        
        <div className="container position-relative" style={{ zIndex: 10, marginTop: '-60px' }}>
          <div className="hero-content mx-auto" ref={heroRef}>
            <span className="trusted-badge hero-contact-chip mx-auto my-4" style={{ textTransform: 'none', display: 'inline-flex' }}>
              <span className="status-dot me-2"></span>
              24-Hour Response Time
            </span>
            <h1 className="hero-title position-relative" style={{ zIndex: 1 }}>
              Let's <br />
              <strong className="gradient-text" style={{ fontSize: '1.2em' }}>Connect</strong>
            </h1>
            <p className="hero-description mx-auto mt-4 position-relative" style={{ maxWidth: '800px', zIndex: 1 }}>
              Connect with our experts. Our team is ready to assist with your challenges and transform your enterprise with AI, SAP, and BI solutions.
            </p>
            <div className="my-4 mx-auto d-inline-flex align-items-center justify-content-center gap-2 hero-contact-chip position-relative" style={{ zIndex: 1 }}>
              <Clock size={16} className="contact-clock-icon" /> 24/7 Account Managers for Global Clients
            </div>
          </div>
        </div>
      </section>

      <div className="premium-separator"></div>

      {/* ── CONTACT FORM SECTION ── */}
      <section className="perspective-section bg-shade-1" ref={formSectionRef}>
        <div className="container">
          <div className="premium-form-card mx-auto" ref={formCardRef} style={{ maxWidth: '800px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', padding: '3rem', backdropFilter: 'blur(10px)' }}>
            <div className="text-center mb-5">
              <h2 className="perspective-main-title mb-2" style={{ fontSize: '2.5rem' }}>Send Your <span className="gradient-highlight">Message</span></h2>
              <p className="perspective-intro mx-auto mb-2" style={{ fontSize: '1.1rem' }}>Fill out the form below and we'll get back to you within 24 hours</p>
              <p className="mb-0">
                <Clock size={16} className="me-2" style={{ color: '#00d2a0' }} />
                <span style={{ color: '#00d2a0', fontWeight: 600, fontSize: '0.95rem' }}>Principal consultant responds within 4 hours</span>
              </p>
            </div>

            {submitted && (
              <div className="success-banner mb-4 d-flex align-items-center justify-content-center gap-2" style={{ padding: '15px', background: 'rgba(81, 207, 102, 0.1)', border: '1px solid rgba(81, 207, 102, 0.3)', borderRadius: '12px', color: '#51cf66' }}>
                <CheckCircle2 size={20} /> Message sent! We'll be in touch within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="premium-form">
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label text-white">Name <span className="text-danger">*</span></label>
                  <input name="name" value={form.name} onChange={handleChange}
                    className="form-control premium-input" placeholder="Your full name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white">Company <span className="text-danger">*</span></label>
                  <input name="company" value={form.company} onChange={handleChange}
                    className="form-control premium-input" placeholder="Your company name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white">Email <span className="text-danger">*</span></label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    className="form-control premium-input" placeholder="your.email@company.com" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="form-control premium-input" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white">Country <span className="text-danger">*</span></label>
                  <select name="country" value={form.country} onChange={handleChange}
                    className="form-select premium-input" required>
                    <option value="">Select your country</option>
                    {['India', 'UAE', 'Saudi Arabia', 'United Kingdom', 'United States', 'Bangladesh', 'Other'].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white">Inquiry Type <span className="text-danger">*</span></label>
                  <select name="inquiryType" value={form.inquiryType} onChange={handleChange}
                    className="form-select premium-input" required>
                    <option value="">Select inquiry type</option>
                    {['SAP Implementation', 'AI & Automation', 'Business Intelligence', 'Enterprise Training', 'Strategic Talent', 'General Inquiry'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label text-white">Project Timeline</label>
                  <select name="timeline" value={form.timeline} onChange={handleChange} className="form-select premium-input">
                    <option value="">Select timeline</option>
                    {['Immediate (< 1 month)', '1–3 Months', '3–6 Months', '6–12 Months', 'Exploring options'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label text-white">Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="form-select premium-input">
                    <option value="">Select budget</option>
                    {['< $50K', '$50K – $150K', '$150K – $500K', '$500K – $1M', '$1M+', 'Not sure'].map(b => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label text-white">Primary Challenge</label>
                  <select name="challenge" value={form.challenge} onChange={handleChange} className="form-select premium-input">
                    <option value="">Main challenge</option>
                    {['Legacy Systems', 'Data Silos', 'Manual Processes', 'Talent Gap', 'Compliance', 'Scalability'].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label text-white">Message <span className="text-danger">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    className="form-control premium-input" rows={5}
                    placeholder="Tell us about your project requirements, challenges, or questions..." required />
                </div>
                <div className="col-12">
                  <label className="d-flex align-items-start gap-3 mt-2" style={{ cursor: 'pointer' }}>
                    <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} required className="premium-checkbox mt-1" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-grey)' }}>
                      I agree to the <a href="#" style={{ color: 'var(--icon-blue)' }}>Privacy Policy</a> and consent to InTime Global processing my personal data for the purpose of responding to my inquiry. <span className="text-danger">*</span>
                    </span>
                  </label>
                </div>
                <div className="col-12 mt-4 text-center">
                  <button type="submit" className="contact-cta-primary w-100 d-inline-flex align-items-center justify-content-center gap-2" style={{ padding: '14px 30px', fontSize: '1.1rem' }}>
                    <Send size={18} /> Send Your Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="premium-separator"></div>

      {/* ── GET IN TOUCH CHANNELS ── */}
      <section className="perspective-section">
        <div className="container">
          <div className="text-center mb-5" ref={channelsHeaderRef}>
            <span className="unified-section-label mx-auto mb-3">Direct Channels</span>
            <h2 className="perspective-main-title">
              Other Ways to <span className="gradient-highlight">Connect</span>
            </h2>
            <p className="perspective-intro mx-auto">Choose the best way to connect with our specialized teams</p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Call Us */}
            <div className="col-lg-4 col-md-6">
              <div className="channel-card channel-card-blue h-100 text-center d-flex flex-column" ref={el => channelsRef.current[0] = el}>
                <div className="mvp-icon-container mx-auto mb-4" style={{ background: 'rgba(108, 143, 255, 0.1)', color: '#6c8fff', borderColor: 'rgba(108, 143, 255, 0.2)' }}>
                  <Phone size={28} />
                </div>
                <h3 className="mb-3">Call Us</h3>
                <p className="mb-4 flex-grow-1">Speak directly with our consultants for immediate assistance.</p>
                <div className="d-flex flex-column gap-2">
                  <a href="tel:+919051615690" className="d-inline-flex align-items-center justify-content-center gap-2" style={{ color: 'var(--text-white)', textDecoration: 'none' }}>
                    <Phone size={14} style={{ color: '#6c8fff' }} /> +91 905 161 5690
                  </a>
                  <a href="tel:+913335916556" className="d-inline-flex align-items-center justify-content-center gap-2" style={{ color: 'var(--text-white)', textDecoration: 'none' }}>
                    <Phone size={14} style={{ color: '#00d2a0' }} /> +91 333 591 6556
                  </a>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="col-lg-4 col-md-6">
              <div className="channel-card channel-card-green h-100 text-center d-flex flex-column" ref={el => channelsRef.current[1] = el}>
                <div className="mvp-icon-container mx-auto mb-4" style={{ background: 'rgba(0, 210, 160, 0.1)', color: '#00d2a0', borderColor: 'rgba(0, 210, 160, 0.2)' }}>
                  <Mail size={28} />
                </div>
                <h3 className="mb-3">Email Inquiries</h3>
                <p className="mb-4 flex-grow-1">For general questions and detailed project descriptions.</p>
                <a href="mailto:enquiry@intimeinc.co.in" className="nav-cta-btn d-inline-block" style={{ padding: '10px 20px', background: 'rgba(0, 210, 160, 0.1)', color: '#00d2a0', border: '1px solid rgba(0, 210, 160, 0.3)' }}>
                  enquiry@intimeinc.co.in
                </a>
              </div>
            </div>

            {/* Careers */}
            <div className="col-lg-4 col-md-6">
              <div className="channel-card channel-card-purple h-100 text-center d-flex flex-column" ref={el => channelsRef.current[2] = el}>
                <div className="mvp-icon-container mx-auto mb-4" style={{ background: 'rgba(181, 123, 255, 0.1)', color: '#b57bff', borderColor: 'rgba(181, 123, 255, 0.2)' }}>
                  <Briefcase size={28} />
                </div>
                <h3 className="mb-3">Careers</h3>
                <p className="mb-4 flex-grow-1">Interested in joining our team? Send us your resume.</p>
                <a href="mailto:careers@intimeinc.co.in" className="nav-cta-btn d-inline-block" style={{ padding: '10px 20px', background: 'rgba(181, 123, 255, 0.1)', color: '#b57bff', border: '1px solid rgba(181, 123, 255, 0.3)' }}>
                  careers@intimeinc.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="premium-separator"></div>

      {/* ── GLOBAL OFFICES ── */}
      <section className="perspective-section bg-shade-2">
        <div className="container">
          <div className="text-center mb-5" ref={officesHeaderRef}>
            <span className="unified-section-label mx-auto mb-3">Locations</span>
            <h2 className="perspective-main-title">
              Global <span className="gradient-highlight">Offices</span>
            </h2>
            <p className="perspective-intro mx-auto">We're here to serve you across multiple continents</p>
          </div>

          <div className="office-grid">
            {[
              { flag: '🇮🇳', country: 'India (HQ)', city: 'Kolkata', phone: '+91 33 3591 6556', label: 'Headquarters' },
              { flag: '🇦🇪', country: 'UAE', city: 'Dubai', phone: '+971 XX XXX XXXX', label: 'Middle East Operations' },
              { flag: '🇧🇩', country: 'Bangladesh', city: 'Dhaka', phone: '+880 XX XXX XXXX', label: 'South Asia Operations' },
              { flag: '🇬🇧', country: 'Europe', city: 'London', phone: '+44 XX XXX XXXX', label: 'European Operations' },
            ].map((office, i) => (
              <div className="office-card d-flex flex-column align-items-center text-center" key={i} ref={el => officeRefs.current[i] = el}>
                <span className="office-flag" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{office.flag}</span>
                <span className="office-name" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{office.country}</span>
                <p className="small text-muted mb-2 d-flex align-items-center gap-1"><MapPin size={14} /> {office.city}</p>
                <p className="small text-muted mb-3 d-flex align-items-center gap-1"><Phone size={14} /> {office.phone}</p>
                <span className="trusted-badge" style={{ fontSize: '0.65rem' }}>{office.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="premium-separator"></div>

      {/* ── SOCIAL MEDIA ── */}
      <section className="perspective-section">
        <div className="container">
          <div className="text-center mb-5" ref={socialHeaderRef}>
            <span className="unified-section-label mx-auto mb-3">Follow Us</span>
            <h2 className="perspective-main-title">Connect on <span className="gradient-highlight">Social Media</span></h2>
            <p className="perspective-intro mx-auto">Follow us for the latest updates and insights</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-5 col-md-6" ref={el => socialCardsRef.current[0] = el}>
              <a href="https://www.linkedin.com/company/intime-it-services-private-limited" target="_blank" rel="noopener noreferrer" className="channel-card channel-card-blue h-100 text-center d-flex flex-column align-items-center text-decoration-none" style={{ cursor: 'pointer' }}>
                <div className="mvp-icon-container mx-auto mb-4" style={{ background: 'rgba(108, 143, 255, 0.1)', color: '#6c8fff', borderColor: 'rgba(108, 143, 255, 0.2)' }}>
                  <Network size={28} />
                </div>
                <h3 className="mb-2">LinkedIn</h3>
                <p className="mb-3 flex-grow-1">Connect with us professionally and stay updated with our latest enterprise solutions and thought leadership.</p>
                <span style={{ color: '#6c8fff', fontWeight: '600', fontSize: '0.95rem' }}>@InTime IT Services</span>
              </a>
            </div>
            <div className="col-lg-5 col-md-6" ref={el => socialCardsRef.current[1] = el}>
              <a href="https://x.com/intimeinc" target="_blank" rel="noopener noreferrer" className="channel-card channel-card-green h-100 text-center d-flex flex-column align-items-center text-decoration-none" style={{ cursor: 'pointer' }}>
                <div className="mvp-icon-container mx-auto mb-4" style={{ background: 'rgba(0, 210, 160, 0.1)', color: '#00d2a0', borderColor: 'rgba(0, 210, 160, 0.2)' }}>
                  <Rss size={28} />
                </div>
                <h3 className="mb-2">X (Twitter)</h3>
                <p className="mb-3 flex-grow-1">Follow us for real-time updates, industry insights, and quick tips on AI, SAP, and BI technologies.</p>
                <span style={{ color: '#00d2a0', fontWeight: '600', fontSize: '0.95rem' }}>@intimeinc</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
