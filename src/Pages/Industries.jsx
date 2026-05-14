import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { 
  Building2, 
  Factory, 
  HardHat, 
  Users, 
  ShoppingBag, 
  Globe, 
  Cpu, 
  Layers, 
  BarChart3, 
  Settings,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const sectionRef = React.useRef(null);
  const heroRef = useRef(null);
  const iconsRowRef = useRef(null);
  const focusSectionHeaderRef = useRef(null);
  const focusCardsRef = useRef([]);
  const solutionsSectionHeaderRef = useRef(null);
  const solutionCardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // ── Hero entrance (immediate, no scroll trigger)
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: 'power3.out' }
      );
    }

    // ── Industry icons row (stagger from below)
    if (iconsRowRef.current) {
      const icons = iconsRowRef.current.children;
      gsap.fromTo(
        icons,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: iconsRowRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // ── Focus section header
    if (focusSectionHeaderRef.current) {
      gsap.fromTo(
        focusSectionHeaderRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: focusSectionHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // ── Focus area cards (y + opacity stagger)
    focusCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // ── Solutions section header
    if (solutionsSectionHeaderRef.current) {
      gsap.fromTo(
        solutionsSectionHeaderRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: solutionsSectionHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // ── Solution cards (scale + opacity stagger)
    solutionCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.92, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // ── CTA section (scale in)
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.focus-card, .solution-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div className="industries-page" ref={sectionRef} onMouseMove={handleMouseMove}>
      <Navbar />
      
      {/* Icon Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="industry-icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00a8ff" />
            <stop offset="100%" stopColor="#0066cc" />
          </linearGradient>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <div className="hero-content text-center" ref={heroRef}>
            <div className="unified-section-label mx-auto">Industry Expertise</div>
            <h1 className="hero-heading mt-4">
              Tailored Expertise for
              <span className="hero-heading-bold gradient-text-primary">Your Industry</span>
            </h1>
            <p className="hero-subtext mx-auto mt-4">
              Custom AI, SAP, BI solutions designed for your specific sector requirements.
            </p>

            <div className="industry-icons-row mt-5" ref={iconsRowRef}>
              <IndustryIconItem icon={<Building2 size={44} />} label="Public Sector" />
              <IndustryIconItem icon={<Factory size={44} />} label="Manufacturing" />
              <IndustryIconItem icon={<HardHat size={44} />} label="Construction" />
              <IndustryIconItem icon={<Users size={44} />} label="Consulting" />
              <IndustryIconItem icon={<ShoppingBag size={44} />} label="Retail & CPG" />
              <IndustryIconItem icon={<Globe size={44} />} label="Utilities" />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="focus-areas-section bg-shade-1">
        <div className="container">
          <div className="section-header text-center mb-5" ref={focusSectionHeaderRef}>
            <div className="unified-section-label mx-auto">Sector Specializations</div>
            <h2 className="section-heading mt-3">Our Industry Focus Areas</h2>
            <p className="section-subtext mx-auto mt-3">
              Deep vertical expertise that outperforms generic providers by addressing unique industry challenges.
            </p>
          </div>

          <div className="focus-grid mt-5">
            <FocusCard 
              ref={el => focusCardsRef.current[0] = el}
              icon={<Building2 size={32} />} 
              title="Public Sector & Utilities" 
              desc="Digital government initiatives and smart resource optimization strategies." 
              badge="60% faster reporting"
              color="blue"
            />
            <FocusCard 
              ref={el => focusCardsRef.current[1] = el}
              icon={<Factory size={32} />} 
              title="Manufacturing" 
              desc="Smart factories and advanced automation for higher production efficiency." 
              badge="70% invoice automation"
              color="orange"
            />
            <FocusCard 
              ref={el => focusCardsRef.current[2] = el}
              icon={<HardHat size={32} />} 
              title="Construction & Real Estate" 
              desc="Comprehensive project lifecycle management and digital twin integration." 
              badge="25% project delivery improvement"
              color="green"
            />
            <FocusCard 
              ref={el => focusCardsRef.current[3] = el}
              icon={<Users size={32} />} 
              title="Consulting & Services" 
              desc="Data-driven advisory services powered by advanced predictive analytics." 
              badge="90% enhanced insights"
              color="purple"
            />
            <FocusCard 
              ref={el => focusCardsRef.current[4] = el}
              icon={<ShoppingBag size={32} />} 
              title="Retail & CPG" 
              desc="Personalized customer experiences and AI-driven inventory management." 
              badge="30% inventory optimization"
              color="pink"
            />
            <FocusCard 
              ref={el => focusCardsRef.current[5] = el}
              icon={<Globe size={32} />} 
              title="Energy & Resources" 
              desc="Operational efficiency gains and sustainable digital transformation." 
              badge="35% energy cost reduction"
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* Universal Solutions Section */}
      <section className="universal-solutions-section">
        <div className="container">
          <div className="section-header text-center mb-5" ref={solutionsSectionHeaderRef}>
            <div className="unified-section-label mx-auto">Universal Solutions</div>
            <h2 className="section-heading mt-3">Universal Challenges,<br/><span className="gradient-text-primary">Tailored Solutions</span></h2>
            <p className="section-subtext mx-auto mt-3">
              Our core technological pillars deliver consistent value across all industrial landscapes.
            </p>
          </div>

          <div className="solutions-grid mt-5">
            <SolutionCard 
              ref={el => solutionCardsRef.current[0] = el}
              icon={<Cpu size={32} />} 
              title="AI-Powered Intelligence" 
              desc="Intelligent automation that reduces manual overhead significantly." 
              badge="Reduces manual work by 85%"
            />
            <SolutionCard 
              ref={el => solutionCardsRef.current[1] = el}
              icon={<Layers size={32} />} 
              title="SAP Excellence" 
              desc="Seamless implementations and modernizations for any scale." 
              badge="Accelerates ROI by 45%"
            />
            <SolutionCard 
              ref={el => solutionCardsRef.current[2] = el}
              icon={<BarChart3 size={32} />} 
              title="BI Platforms" 
              desc="Real-time analytics tailored to specific industry KPIs." 
              badge="Improves decision speed by 50%"
            />
            <SolutionCard 
              ref={el => solutionCardsRef.current[3] = el}
              icon={<Settings size={32} />} 
              title="Process Optimization" 
              desc="Streamlined workflows for maximum operational efficiency." 
              badge="Enhances productivity by 40%"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industries-cta text-center">
        <div className="container">
          <div className="cta-box-premium" ref={ctaRef}>
            <div className="card-border-glow"></div>
            <div className="card-crosshairs" aria-hidden="true"></div>
            <h2 className="cta-heading">Ready to Transform<br/><span className="gradient-text-primary">Your Operations?</span></h2>
            <p className="cta-subtext mt-4">
              Let's discuss how InTime Global can deliver sector-specific AI, SAP, and BI solutions for you.
            </p>
            <div className="cta-actions-row mt-5">
              <a href="#" className="nav-cta-btn">
                Explore Solutions <ArrowRight size={18} />
              </a>
              <a href="#" className="explore-link ms-md-4">
                Schedule Consultation <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function IndustryIconItem({ icon, label }) {
  return (
    <div className="industry-icon-item">
      <div className="icon-box">
        {React.cloneElement(icon, { stroke: "url(#industry-icon-gradient)" })}
      </div>
      <span className="icon-label">{label}</span>
    </div>
  );
}

const FocusCard = React.forwardRef(function FocusCard({ icon, title, desc, badge, color }, ref) {
  return (
    <div className={`focus-card focus-card-${color}`} ref={ref}>
      <div className="focus-card-icon">{icon}</div>
      <h3 className="focus-card-title">{title}</h3>
      <p className="focus-card-desc">{desc}</p>
      <div className="focus-card-badge">{badge}</div>
    </div>
  );
});

const SolutionCard = React.forwardRef(function SolutionCard({ icon, title, desc, badge }, ref) {
  return (
    <div className="solution-card" ref={ref}>
      <div className="solution-card-icon">{icon}</div>
      <h3 className="solution-card-title">{title}</h3>
      <p className="solution-card-desc">{desc}</p>
      <div className="solution-card-badge">{badge}</div>
    </div>
  );
});

