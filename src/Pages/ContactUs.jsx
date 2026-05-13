import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {
  Phone, Mail, Calendar, Briefcase, MapPin, Clock,
  Send, Linkedin, Twitter, ChevronDown
} from 'lucide-react';

export default function ContactUs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', inquiryType: '', timeline: '',
    budget: '', challenge: '', message: '', agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const h = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
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
    <>
      <Navbar />
      <div
        className="contact-page"
        style={{ '--bg-mouse-x': `${mousePos.x}px`, '--bg-mouse-y': `${mousePos.y}px` }}
      >
        <div className="contact-cursor-glow" />

        {/* ── HERO ── */}
        <section className="contact-hero text-center">
          <div className="contact-hero-bg" />
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <span className="contact-hero-badge mb-4 d-inline-flex align-items-center gap-2">
              <span className="contact-hero-dot" /> 24-Hour Response Time
            </span>
            <h1 className="contact-hero-title mt-3">Let's Connect</h1>
            <p className="contact-hero-sub mx-auto mt-3">
              Connect with our experts. Our team is ready to assist with your challenges and transform your enterprise with AI, SAP, and BI solutions.
            </p>
            <div className="contact-hero-chip mt-4 d-inline-flex align-items-center gap-2">
              <Clock size={16} /> 24/7 Account Managers for Global Clients
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-form-card mx-auto" style={{ maxWidth: '760px' }}>
              <h2 className="contact-form-title text-center">Send Your Message</h2>
              <p className="contact-form-sub text-center mt-2">Fill out the form below and we'll get back to you within 24 hours</p>
              <p className="contact-form-note text-center mt-1">
                <Clock size={14} className="me-1" style={{ color: '#00d2a0' }} />
                <span style={{ color: '#00d2a0', fontWeight: 600 }}>Principal consultant responds within 4 hours</span>
              </p>

              {submitted && (
                <div className="contact-success-msg mt-3 text-center">
                  ✅ Message sent! We'll be in touch within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="contact-label">Name <span className="text-danger">*</span></label>
                    <input name="name" value={form.name} onChange={handleChange}
                      className="contact-input" placeholder="Your full name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="contact-label">Company <span className="text-danger">*</span></label>
                    <input name="company" value={form.company} onChange={handleChange}
                      className="contact-input" placeholder="Your company name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="contact-label">Email <span className="text-danger">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      className="contact-input" placeholder="your.email@company.com" required />
                  </div>
                  <div className="col-md-6">
                    <label className="contact-label">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      className="contact-input" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="col-md-6">
                    <label className="contact-label">Country <span className="text-danger">*</span></label>
                    <select name="country" value={form.country} onChange={handleChange}
                      className="contact-select" required>
                      <option value="">Select your country</option>
                      {['India', 'UAE', 'Saudi Arabia', 'United Kingdom', 'United States', 'Bangladesh', 'Other'].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="contact-label">Inquiry Type <span className="text-danger">*</span></label>
                    <select name="inquiryType" value={form.inquiryType} onChange={handleChange}
                      className="contact-select" required>
                      <option value="">Select inquiry type</option>
                      {['SAP Implementation', 'AI & Automation', 'Business Intelligence', 'Enterprise Training', 'Strategic Talent', 'General Inquiry'].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="contact-label">Project Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange} className="contact-select">
                      <option value="">Select timeline</option>
                      {['Immediate (< 1 month)', '1–3 Months', '3–6 Months', '6–12 Months', 'Exploring options'].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="contact-label">Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className="contact-select">
                      <option value="">Select budget</option>
                      {['< $50K', '$50K – $150K', '$150K – $500K', '$500K – $1M', '$1M+', 'Not sure'].map(b => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="contact-label">Primary Challenge</label>
                    <select name="challenge" value={form.challenge} onChange={handleChange} className="contact-select">
                      <option value="">Main challenge</option>
                      {['Legacy Systems', 'Data Silos', 'Manual Processes', 'Talent Gap', 'Compliance', 'Scalability'].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="contact-label">Message <span className="text-danger">*</span></label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      className="contact-textarea" rows={5}
                      placeholder="Tell us about your project requirements, challenges, or questions..." required />
                  </div>
                  <div className="col-12">
                    <label className="contact-checkbox-label d-flex align-items-start gap-2">
                      <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} required className="mt-1" />
                      <span>
                        I agree to the <a href="#" className="contact-link">Privacy Policy</a> and consent to InTime Global processing my personal data for the purpose of responding to my inquiry. <span className="text-danger">*</span>
                      </span>
                    </label>
                  </div>
                  <div className="col-12 mt-2">
                    <button type="submit" className="contact-submit-btn w-100 d-flex align-items-center justify-content-center gap-2">
                      <Send size={18} /> Send Your Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ── GET IN TOUCH ── */}
        <section className="contact-section">
          <div className="container">
            <h2 className="contact-section-title text-center">Get In Touch</h2>
            <p className="contact-section-sub text-center mx-auto mt-2">Choose the best way to connect with our team</p>

            {/* Contact Details card */}
            <div className="contact-details-card mx-auto mt-5" style={{ maxWidth: '500px' }}>
              <h5 className="contact-details-title text-center mb-4">Contact Details</h5>
              <div className="d-flex flex-column align-items-center gap-3">
                <a href="tel:+919051615690" className="contact-detail-row">
                  <Phone size={16} style={{ color: '#6c8fff' }} /> +91 905 161 5690
                </a>
                <a href="tel:+913335916556" className="contact-detail-row">
                  <Phone size={16} style={{ color: '#00d2a0' }} /> +91 333 591 6556
                </a>
                <a href="mailto:enquiry@intimeinc.co.in" className="contact-detail-row">
                  <Mail size={16} style={{ color: '#00d2a0' }} /> enquiry@intimeinc.co.in
                </a>
              </div>
            </div>

            {/* 3 channel cards */}
            <div className="row g-4 mt-4">
              <div className="col-lg-4">
                <div onMouseMove={handleCardMouseMove} className="contact-channel-card contact-channel-blue">
                  <Calendar size={32} className="mb-3" style={{ color: '#6c8fff' }} />
                  <h5 className="contact-channel-title">Schedule a Consultation</h5>
                  <p className="contact-channel-desc mt-2">Book a strategic consultation with our experts to discuss your specific needs.</p>
                  <button className="contact-channel-btn-blue mt-4">Book a Strategy Call</button>
                </div>
              </div>
              <div className="col-lg-4">
                <div onMouseMove={handleCardMouseMove} className="contact-channel-card contact-channel-green">
                  <Mail size={32} className="mb-3" style={{ color: '#00d2a0' }} />
                  <h5 className="contact-channel-title">General Inquiries</h5>
                  <p className="contact-channel-desc mt-2">For general questions about our services and solutions.</p>
                  <a href="mailto:enquiry@intimeinc.co.in" className="contact-channel-btn-green mt-4 d-block text-center">enquiry@intimeinc.co.in</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div onMouseMove={handleCardMouseMove} className="contact-channel-card contact-channel-purple">
                  <Briefcase size={32} className="mb-3" style={{ color: '#b57bff' }} />
                  <h5 className="contact-channel-title">Career Opportunities</h5>
                  <p className="contact-channel-desc mt-2">Interested in joining our team? Send us your resume and portfolio.</p>
                  <a href="mailto:careers@intimeinc.co.in" className="contact-channel-btn-purple mt-4 d-block text-center">careers@intimeinc.co.in</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GLOBAL OFFICES ── */}
        <section className="contact-section">
          <div className="container">
            <h2 className="contact-section-title text-center">Global Office Locations</h2>
            <p className="contact-section-sub text-center mx-auto mt-2">We're here to serve you across multiple continents</p>
            <div className="row g-4 mt-4 justify-content-center">
              {[
                { flag: '🇮🇳', country: 'India (HQ)', city: 'Kolkata', phone: '+91 33 3591 6556', label: 'Headquarters' },
                { flag: '🇦🇪', country: 'UAE', city: 'Dubai', phone: '+971 XX XXX XXXX', label: 'Middle East Operations' },
                { flag: '🇧🇩', country: 'Bangladesh', city: 'Dhaka', phone: '+880 XX XXX XXXX', label: 'South Asia Operations' },
                { flag: '🇬🇧', country: 'Europe', city: 'London', phone: '+44 XX XXX XXXX', label: 'European Operations' },
              ].map((office, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                  <div onMouseMove={handleCardMouseMove} className="contact-office-card text-center">
                    <div className="contact-office-flag">{office.flag}</div>
                    <h5 className="contact-office-country mt-3">{office.country}</h5>
                    <p className="contact-office-city"><MapPin size={13} /> {office.city}</p>
                    <p className="contact-office-phone"><Phone size={13} /> {office.phone}</p>
                    <span className="contact-office-label">{office.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL MEDIA ── */}
        <section className="contact-section">
          <div className="container">
            <h2 className="contact-section-title text-center">Connect With Us on Social Media</h2>
            <p className="contact-section-sub text-center mx-auto mt-2">Follow us for the latest updates and insights</p>
            <div className="row g-4 mt-4 justify-content-center">
              <div className="col-lg-5 col-md-6">
                <div onMouseMove={handleCardMouseMove} className="contact-social-card contact-social-blue">
                  <Linkedin size={36} className="mb-3" style={{ color: '#6c8fff' }} />
                  <h5 className="contact-channel-title">LinkedIn</h5>
                  <p className="contact-channel-desc mt-2">Connect with us professionally and stay updated with our latest enterprise solutions and thought leadership.</p>
                  <a href="#" className="contact-social-handle mt-3 d-block">@InTimeGlobal</a>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div onMouseMove={handleCardMouseMove} className="contact-social-card contact-social-cyan">
                  <Twitter size={36} className="mb-3" style={{ color: '#00d2ff' }} />
                  <h5 className="contact-channel-title">Twitter/X</h5>
                  <p className="contact-channel-desc mt-2">Follow us for real-time updates, industry insights, and quick tips on AI, SAP, and BI technologies.</p>
                  <a href="#" className="contact-social-handle mt-3 d-block">@InTimeGlobal</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="contact-section pb-5">
          <div className="container">
            <div className="contact-cta-banner text-center">
              <div className="contact-cta-bg" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h2 className="contact-section-title">Start Your Journey</h2>
                <p className="contact-section-sub mx-auto mt-3">
                  Discuss your needs with us. Our experts are ready to help you transform your enterprise with the right technology.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                  <button className="contact-cta-primary">Schedule a Demo</button>
                  <button className="contact-cta-secondary">Download Brochure</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
