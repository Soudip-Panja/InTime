import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {
  Rocket, TrendingUp, Globe, BookOpen, Lightbulb,
  MapPin, Clock, Briefcase, Search, Upload, Users, ChevronDown
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allJobs = [
  {
    id: 1,
    title: 'Senior SAP Consultant',
    location: 'Dubai, UAE',
    experience: '5+ years',
    type: 'Full-time',
    category: 'SAP',
    desc: 'Lead SAP implementations for enterprise clients across the Middle East.',
    tags: ['S/4HANA', 'FICO', 'MM', 'Remote'],
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    location: 'Remote',
    experience: '3+ years',
    type: 'Full-time',
    category: 'AI',
    desc: 'Develop and deploy machine learning solutions for enterprise automation.',
    tags: ['Python', 'TensorFlow', 'AWS', 'MLOps'],
  },
  {
    id: 3,
    title: 'BI Analyst',
    location: 'Riyadh, Saudi Arabia',
    experience: '2+ years',
    type: 'Full-time',
    category: 'BI',
    desc: 'Create data visualizations and analytics solutions for business intelligence.',
    tags: ['Power BI', 'Tableau', 'SQL', 'Data Modeling'],
  },
  {
    id: 4,
    title: 'Project Manager',
    location: 'London, UK',
    experience: '4+ years',
    type: 'Full-time',
    category: 'Management',
    desc: 'Manage complex enterprise transformation projects from inception to delivery.',
    tags: ['PMP', 'Agile', 'Scrum', 'Enterprise'],
  },
  {
    id: 5,
    title: 'SAP Basis Administrator',
    location: 'Dubai, UAE',
    experience: '3+ years',
    type: 'Full-time',
    category: 'SAP',
    desc: 'Manage and optimize SAP system landscapes for large-scale enterprise environments.',
    tags: ['SAP Basis', 'HANA', 'Cloud'],
  },
  {
    id: 6,
    title: 'Data Engineer',
    location: 'Remote',
    experience: '3+ years',
    type: 'Full-time',
    category: 'BI',
    desc: 'Build robust data pipelines and infrastructure to support enterprise analytics platforms.',
    tags: ['Python', 'Spark', 'Azure', 'Databricks'],
  },
];

const locations = ['All Locations', 'Dubai, UAE', 'Remote', 'Riyadh, Saudi Arabia', 'London, UK'];
const categories = ['All Categories', 'SAP', 'AI', 'BI', 'Management'];

export default function Carrers() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [category, setCategory] = useState('All Categories');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const whyCardsRef = useRef([]);
  const pillarCardsRef = useRef([]);
  const jobCardsRef = useRef([]);
  const openCardRef = useRef(null);
  const joinBannerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);

    // GSAP Animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }

    whyCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    pillarCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    if (openCardRef.current) {
      gsap.fromTo(openCardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: openCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    if (joinBannerRef.current) {
      gsap.fromTo(joinBannerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: joinBannerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const filteredJobs = allJobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.desc.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchLocation = location === 'All Locations' || job.location === location;
    const matchCategory = category === 'All Categories' || job.category === category;
    return matchSearch && matchLocation && matchCategory;
  });

  useEffect(() => {
    jobCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, [filteredJobs]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  // Reset job refs before rendering
  jobCardsRef.current = [];

  return (
    <>
      <Navbar />
      <div
        className="careers-page"
        style={{ '--bg-mouse-x': `${mousePos.x}px`, '--bg-mouse-y': `${mousePos.y}px` }}
      >
        {/* Cursor glow */}
        <div className="careers-cursor-glow" />

        {/* ── HERO ── */}
        <section className="careers-hero text-center">
          <div className="careers-hero-orb orb-a" />
          <div className="careers-hero-orb orb-b" />
          <div className="container position-relative" style={{ zIndex: 1 }} ref={heroRef}>
            <div className="careers-badge mb-4">We're Hiring</div>
            <h1 className="careers-hero-title">
              Shape the Future<br />
              <span className="careers-hero-accent">with InTime</span>
            </h1>
            <p className="careers-hero-sub mx-auto mt-3">
              Build your career with cutting-edge AI, SAP, and BI projects that transform global enterprises and push the boundaries of technology.
            </p>
            <a href="#openings" className="careers-cta-btn mt-4 d-inline-flex align-items-center gap-2">
              Explore Career Opportunities <ChevronDown size={18} />
            </a>
          </div>
        </section>

        {/* ── WHY INTIME ── */}
        <section className="careers-section" id="why">
          <div className="container">
            <h2 className="careers-section-title text-center">Why Build Your Career at InTime?</h2>
            <p className="careers-section-sub text-center mx-auto mt-2">
              Our projects offer unmatched AI exposure and the opportunity to work on global AI/SAP projects that make a real impact.
            </p>
            <div className="row g-4 mt-4">
              {[
                { icon: <Rocket size={26} />, title: 'High-Impact Projects', desc: 'Work on enterprise transformations that reshape industries' },
                { icon: <TrendingUp size={26} />, title: 'Cutting-Edge Technologies', desc: 'Master the latest AI, SAP, and BI innovations' },
                { icon: <Globe size={26} />, title: 'Global Exposure', desc: 'Collaborate with clients across 6+ countries' },
                { icon: <BookOpen size={26} />, title: 'Continuous Learning', desc: '80% of our team earns certifications annually' },
                { icon: <Lightbulb size={26} />, title: 'Entrepreneurial Spirit', desc: 'Drive innovation and take ownership of your solutions' },
                { icon: <Users size={26} />, title: 'Collaborative Culture', desc: 'Work alongside passionate experts in a team-first environment.' },
              ].map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div onMouseMove={handleCardMouseMove} className="careers-why-card" ref={el => whyCardsRef.current[i] = el}>
                    <div className="careers-icon-box">{item.icon}</div>
                    <h4 className="careers-card-title mt-3">{item.title}</h4>
                    <p className="careers-card-desc mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIFE AT INTIME ── */}
        <section className="careers-section careers-life-section">
          <div className="container">
            <h2 className="careers-section-title text-center">Life at InTime</h2>
            <p className="careers-section-sub text-center mx-auto mt-2">
              We foster curiosity, collaboration, and innovation. Our culture is built on three fundamental pillars that guide everything we do.
            </p>
            <div className="row g-4 mt-4">
              {[
                { title: 'Innovation', desc: 'We push boundaries and embrace new technologies to deliver cutting-edge solutions.' },
                { title: 'Client Centricity', desc: "Our clients' success is our success — we're committed to delivering exceptional value." },
                { title: 'Integrity', desc: 'We operate with transparency, honesty, and ethical practices in everything we do.' },
              ].map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div onMouseMove={handleCardMouseMove} className="careers-pillar-card" ref={el => pillarCardsRef.current[i] = el}>
                    <h4 className="careers-pillar-title">{item.title}</h4>
                    <p className="careers-card-desc mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CURRENT OPENINGS ── */}
        <section className="careers-section" id="openings">
          <div className="container">
            <h2 className="careers-section-title text-center">Current Openings</h2>
            <p className="careers-section-sub text-center mx-auto mt-2">
              Searchable, filterable job listings across location, expertise, and experience levels.
            </p>

            {/* Filters */}
            <div className="careers-filters mt-4 d-flex flex-wrap gap-3">
              <div className="careers-search-wrap flex-grow-1">
                <Search size={16} className="careers-search-icon" />
                <input
                  className="careers-search"
                  placeholder="Search jobs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select className="careers-select" value={location} onChange={(e) => setLocation(e.target.value)}>
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
              <select className="careers-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Job Cards */}
            <div className="row g-4 mt-2">
              {filteredJobs.length === 0 ? (
                <div className="col-12 text-center py-5 careers-no-results">No roles match your filters.</div>
              ) : filteredJobs.map((job, index) => (
                <div key={job.id} className="col-lg-6">
                  <div onMouseMove={handleCardMouseMove} className="careers-job-card" ref={el => jobCardsRef.current[index] = el}>
                    <h4 className="careers-job-title">{job.title}</h4>
                    <div className="careers-job-meta d-flex flex-wrap gap-3 mt-2">
                      <span><MapPin size={14} /> {job.location}</span>
                      <span><Clock size={14} /> {job.experience}</span>
                      <span><Briefcase size={14} /> {job.type}</span>
                    </div>
                    <p className="careers-job-desc mt-3">{job.desc}</p>
                    <div className="careers-tags d-flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <span key={tag} className="careers-tag">{tag}</span>
                      ))}
                    </div>
                    <button className="careers-apply-btn mt-4 w-100">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DON'T SEE A ROLE ── */}
        <section className="careers-section">
          <div className="container">
            <div onMouseMove={handleCardMouseMove} className="careers-open-card text-center" ref={openCardRef}>
              <h3 className="careers-open-title">Don't See the Perfect Role?</h3>
              <p className="careers-section-sub mx-auto mt-3">
                Send your resume if no current role fits. We're always looking for exceptional talent to join our growing team and shape the future of enterprise technology.
              </p>
              <button className="careers-outline-btn mt-4 d-inline-flex align-items-center gap-2">
                <Upload size={18} /> Submit Your Profile
              </button>
            </div>
          </div>
        </section>

        {/* ── JOIN OUR TEAM CTA ── */}
        <section className="careers-section pb-5">
          <div className="container">
            <div className="careers-join-banner text-center" ref={joinBannerRef}>
              <div className="careers-join-bg" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h2 className="careers-section-title">Join Our Team</h2>
                <p className="careers-section-sub mx-auto mt-3">
                  Innovate with us and be part of a team that's transforming enterprises through cutting-edge AI, SAP, and BI solutions.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                  <a href="#openings" className="careers-outline-btn d-inline-flex align-items-center gap-2">
                    <Users size={18} /> View Open Roles →
                  </a>
                  <a href="#why" className="careers-dark-btn d-inline-flex align-items-center gap-2">
                    Learn About Our Culture
                  </a>
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