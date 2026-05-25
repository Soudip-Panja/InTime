import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SEO from '../Components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
    { id: 'acceptance-terms', label: '1. Acceptance of Terms' },
    { id: 'platform-services', label: '2. Platform Services' },
    { id: 'account-responsibility', label: '3. Account Responsibility' },
    { id: 'payments-access', label: '4. Payments and Access' },
    { id: 'intellectual-property', label: '5. Intellectual Property' },
    { id: 'suspension-termination', label: '6. Suspension and Termination' },
    { id: 'liability-updates', label: '7. Liability and Updates' },
    { id: 'contact', label: 'Contact' }
];

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState('acceptance-terms');
    const [backHovered, setBackHovered] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const pageRef = useRef(null);
    const isClickScrolling = useRef(false);
    const clickTimeoutRef = useRef(null);

    const handleSidebarClick = (id) => {
        setActiveSection(id);
        isClickScrolling.current = true;
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current);
        }
        clickTimeoutRef.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 800);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        // GSAP Entry Animations
        const ctx = gsap.context(() => {
            gsap.from('.terms-hero-animate', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });

            gsap.from('.terms-sidebar-animate', {
                x: -30,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power3.out'
            });

            // Scroll Trigger card entrance animation
            const cards = gsap.utils.toArray('.terms-section-card');
            cards.forEach((card) => {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.97
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                );
            });

            // Background glowing orbs parallax scrolling
            gsap.to('.terms-glow-orb-1', {
                y: 120,
                ease: 'none',
                scrollTrigger: {
                    trigger: pageRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.2
                }
            });

            gsap.to('.terms-glow-orb-2', {
                y: -120,
                ease: 'none',
                scrollTrigger: {
                    trigger: pageRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.2
                }
            });
        }, pageRef);

        // Scroll Spy Logic using IntersectionObserver
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            if (isClickScrolling.current) return;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => {
            ctx.revert();
            observer.disconnect();
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
            }
        };
    }, []);

    // Design Tokens / Styles
    const wrapperStyle = {
        background: 'var(--bg-black)',
        minHeight: '100vh',
        color: 'var(--text-white)',
        position: 'relative'
    };

    const gradientTitleStyle = {
        fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
        fontWeight: '800',
        background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em',
        marginBottom: '1rem'
    };

    const metaBarStyle = {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px 24px',
        color: 'var(--text-grey)',
        fontSize: '0.95rem',
        borderBottom: '1px solid var(--card-border-color)',
        paddingBottom: '2rem',
        marginBottom: '3rem'
    };

    const sidebarStyle = {
        position: 'sticky',
        top: '120px',
        alignSelf: 'start',
        paddingLeft: '0',
        borderLeft: '1px solid var(--card-border-color)'
    };

    const sectionCardStyle = {
        background: 'var(--bg-shade-2)',
        border: '1px solid var(--card-border-color)',
        borderRadius: '20px',
        padding: '2.5rem',
        marginBottom: '2.5rem',
        transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease, box-shadow 0.3s ease',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
    };

    const sectionTitleStyle = {
        color: 'var(--text-white)',
        fontSize: '1.4rem',
        fontWeight: '700',
        marginBottom: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    };

    return (
        <div className="terms-page-wrapper" style={wrapperStyle} ref={pageRef}>
            <SEO 
                title="Terms & Conditions | InTime Global"
                description="Read the terms and conditions for using the InTime Global website and our services."
                keywords="terms and conditions, user agreement, legal terms"
            />
            {/* Scope Smooth Scroll Styles */}
            <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 140px;
        }
        .terms-glow-orb-1 {
          position: absolute;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.12;
          width: 600px;
          height: 600px;
          top: -100px;
          right: -100px;
          background: var(--grad-start);
          animation: pulse-glow-1 15s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }
        .terms-glow-orb-2 {
          position: absolute;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.1;
          width: 500px;
          height: 500px;
          bottom: 100px;
          left: -150px;
          background: var(--grad-end);
          animation: pulse-glow-2 12s ease-in-out infinite alternate-reverse;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes pulse-glow-1 {
          0% { transform: scale(1) translate(0, 0); opacity: 0.1; }
          100% { transform: scale(1.15) translate(80px, 50px); opacity: 0.18; }
        }
        @keyframes pulse-glow-2 {
          0% { transform: scale(1) translate(0, 0); opacity: 0.08; }
          100% { transform: scale(1.15) translate(-50px, 80px); opacity: 0.15; }
        }
        .terms-sidebar-link {
          color: var(--text-grey);
          font-weight: 500;
          font-size: 0.95rem;
          border-left: 3px solid transparent;
          margin-left: -2px;
          transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: transparent;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 1.25rem;
          padding-right: 1rem;
        }
        .terms-sidebar-link:hover {
          color: var(--text-white);
          padding-left: 1.5rem;
          background: transparent !important;
        }
        .terms-sidebar-link.active {
          color: var(--icon-blue) !important;
          font-weight: 700;
          border-left: 3px solid var(--icon-blue);
          padding-left: 1.75rem;
          background: transparent !important;
        }
      `}</style>

            {/* Floating Glow Background Orbs */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                <div className="terms-glow-orb-1" />
                <div className="terms-glow-orb-2" />
            </div>

            <Navbar />

            <main style={{ padding: '160px 0 100px', position: 'relative', zIndex: 1 }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    {/* Back Button */}
                    <div className="terms-hero-animate">
                        <Link
                            to="/"
                            className="d-inline-flex align-items-center gap-2 mb-4 text-decoration-none"
                            style={{
                                color: 'var(--icon-blue)',
                                fontWeight: '600',
                                transform: backHovered ? 'translateX(-4px)' : 'none',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={() => setBackHovered(true)}
                            onMouseLeave={() => setBackHovered(false)}
                        >
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </div>

                    {/* Header Section */}
                    <div className="text-start mb-4">
                        <h1 className="terms-hero-animate" style={gradientTitleStyle}>
                            Terms and Conditions
                        </h1>
                        <p className="terms-hero-animate" style={{ color: 'var(--text-grey)', fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            These terms govern access to and use of the learning platform, including account registration, course delivery, and online payments.
                        </p>
                        <div className="terms-hero-animate" style={metaBarStyle}>
                            <span className="d-flex align-items-center gap-2">
                                <Clock size={16} style={{ color: 'var(--icon-blue)' }} />
                                Effective date: <strong>May 5, 2026</strong>
                            </span>
                            <span style={{ opacity: 0.3 }}>|</span>
                            <span>
                                Platform: <strong style={{ color: 'var(--text-white)' }}>InTime</strong>
                            </span>
                        </div>
                    </div>

                    {/* Grid Layout: Sidebar + Sections */}
                    <div className="row g-5 terms-sections-container">

                        {/* Sticky Sidebar Navigation */}
                        <div className="col-lg-3 d-none d-lg-block terms-sidebar-animate">
                            <div style={sidebarStyle}>
                                {sections.map((sec) => {
                                    const isActive = activeSection === sec.id;
                                    return (
                                        <a
                                            key={sec.id}
                                            href={`#${sec.id}`}
                                            className={`d-block text-decoration-none terms-sidebar-link ${isActive ? 'active' : ''}`}
                                            onClick={() => handleSidebarClick(sec.id)}
                                        >
                                            {sec.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Main Terms Content */}
                        <div className="col-lg-9 col-12">

                            {/* Section 1 */}
                            <div
                                id="acceptance-terms"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'acceptance-terms' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'acceptance-terms' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'acceptance-terms' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('acceptance-terms')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>01 /</span>
                                    Acceptance of Terms
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    By accessing or using the platform, you agree to follow these terms and all applicable laws and regulations. If you do not agree, you should not use the platform.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    These terms apply to learners, instructors, administrators, and any visitor who accesses public pages or creates an account.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div
                                id="platform-services"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'platform-services' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'platform-services' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'platform-services' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('platform-services')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>02 /</span>
                                    Platform Services
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    The platform provides access to online courses, learning materials, live classes, assessments, and related account services.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We may update, improve, suspend, or discontinue features from time to time in order to maintain security, reliability, and product quality.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div
                                id="account-responsibility"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'account-responsibility' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'account-responsibility' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'account-responsibility' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('account-responsibility')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>03 /</span>
                                    Account Responsibility
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    You are responsible for the accuracy of the information you submit during registration and for maintaining the confidentiality of your login credentials.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    You must not share accounts, attempt unauthorized access, interfere with platform operations, or misuse content, student data, or payment workflows.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div
                                id="payments-access"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'payments-access' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'payments-access' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'payments-access' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('payments-access')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>04 /</span>
                                    Payments and Access
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Paid enrollments, subscriptions, or other billable services must be completed through approved payment channels shown on the platform.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Access to paid content may begin only after successful payment authorization and confirmation. Taxes, processing charges, and promotional discounts are applied as displayed at checkout.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div
                                id="intellectual-property"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'intellectual-property' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'intellectual-property' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'intellectual-property' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('intellectual-property')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>05 /</span>
                                    Intellectual Property
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Platform software, course content, videos, documents, graphics, and branding remain the property of their respective owners unless explicitly stated otherwise.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    You may use course materials only for your personal or authorized organizational learning purposes and may not copy, resell, distribute, or publish them without permission.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div
                                id="suspension-termination"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'suspension-termination' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'suspension-termination' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'suspension-termination' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('suspension-termination')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>06 /</span>
                                    Suspension and Termination
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We may suspend or terminate access if we reasonably believe there has been fraud, abuse, non-payment, policy violation, security risk, or unlawful activity.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Termination does not remove obligations that already arose before suspension, including payment liabilities or restrictions on misuse of proprietary content.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div
                                id="liability-updates"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'liability-updates' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'liability-updates' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'liability-updates' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('liability-updates')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>07 /</span>
                                    Liability and Updates
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    The platform is provided on an as-available basis. While we aim for reliable service, we do not guarantee uninterrupted availability or that every feature will always be error free.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We may revise these terms from time to time. Continued use after a revised version is published means you accept the updated terms.
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div
                                id="contact"
                                className="terms-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    background: 'linear-gradient(135deg, var(--bg-shade-3), rgba(0, 168, 253, 0.02))',
                                    borderLeft: '4px solid var(--icon-blue)',
                                    transform: hoveredCard === 'contact' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'contact' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'contact' ? 'var(--icon-blue)' : 'var(--card-border-color)',
                                    marginTop: '4rem'
                                }}
                                onMouseEnter={() => setHoveredCard('contact')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={{ ...sectionTitleStyle, color: 'var(--text-white)' }}>
                                    <Mail size={20} style={{ color: 'var(--icon-blue)' }} /> Contact
                                </h2>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)', marginBottom: 0 }}>
                                    Questions about this page can be directed to the platform administrator or support contact configured for your organization.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
