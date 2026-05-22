import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
    { id: 'info-collect', label: '1. Information We Collect' },
    { id: 'use-info', label: '2. How We Use Information' },
    { id: 'share-info', label: '3. Sharing of Information' },
    { id: 'retention-security', label: '4. Data Retention & Security' },
    { id: 'choices-rights', label: '5. Choices and Rights' },
    { id: 'changes', label: '6. Policy Changes' },
    { id: 'contact', label: 'Contact' }
];

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState('info-collect');
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
            gsap.from('.privacy-hero-animate', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });

            gsap.from('.privacy-sidebar-animate', {
                x: -30,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power3.out'
            });

            // Scroll Trigger card entrance animation
            const cards = gsap.utils.toArray('.privacy-section-card');
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
            gsap.to('.privacy-glow-orb-1', {
                y: 120,
                ease: 'none',
                scrollTrigger: {
                    trigger: pageRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.2
                }
            });

            gsap.to('.privacy-glow-orb-2', {
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
        <div className="privacy-page-wrapper" style={wrapperStyle} ref={pageRef}>
            {/* Scope Smooth Scroll Styles */}
            <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 140px;
        }
        .privacy-glow-orb-1 {
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
        .privacy-glow-orb-2 {
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
        .privacy-sidebar-link {
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
        .privacy-sidebar-link:hover {
          color: var(--text-white);
          padding-left: 1.5rem;
          background: transparent !important;
        }
        .privacy-sidebar-link.active {
          color: var(--icon-blue) !important;
          font-weight: 700;
          border-left: 3px solid var(--icon-blue);
          padding-left: 1.75rem;
          background: transparent !important;
        }
      `}</style>

            {/* Floating Glow Background Orbs */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                <div className="privacy-glow-orb-1" />
                <div className="privacy-glow-orb-2" />
            </div>

            <Navbar />

            <main style={{ padding: '160px 0 100px', position: 'relative', zIndex: 1 }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    {/* Back Button */}
                    <div className="privacy-hero-animate">
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
                        <h1 className="privacy-hero-animate" style={gradientTitleStyle}>
                            Privacy Policy
                        </h1>
                        <p className="privacy-hero-animate" style={{ color: 'var(--text-grey)', fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '750px', lineHeight: '1.6' }}>
                            This policy explains what information we collect, how it is used, and how we protect personal data when you use the platform.
                        </p>
                        <div className="privacy-hero-animate" style={metaBarStyle}>
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
                    <div className="row g-5 privacy-sections-container">

                        {/* Sticky Sidebar Navigation */}
                        <div className="col-lg-3 d-none d-lg-block privacy-sidebar-animate">
                            <div style={sidebarStyle}>
                                {sections.map((sec) => {
                                    const isActive = activeSection === sec.id;
                                    return (
                                        <a
                                            key={sec.id}
                                            href={`#${sec.id}`}
                                            className={`d-block text-decoration-none privacy-sidebar-link ${isActive ? 'active' : ''}`}
                                            onClick={() => handleSidebarClick(sec.id)}
                                        >
                                            {sec.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Main Policy Content */}
                        <div className="col-lg-9 col-12">

                            {/* Section 1 */}
                            <div
                                id="info-collect"
                                className="privacy-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'info-collect' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'info-collect' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'info-collect' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('info-collect')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>01 /</span>
                                    Information We Collect
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We may collect personal information such as your name, email address, login credentials, account role, learning activity, payment status, and support messages.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Technical information such as browser type, device details, IP address, cookies, and usage logs may also be collected to operate and secure the platform.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div
                                id="use-info"
                                className="privacy-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'use-info' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'use-info' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'use-info' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('use-info')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>02 /</span>
                                    How We Use Information
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We use collected information to provide platform services, manage accounts, process enrollments, deliver learning content, support customer service, and improve the product experience.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Information may also be used for security monitoring, fraud prevention, compliance requirements, internal analytics, and service communications related to your account or purchases.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div
                                id="share-info"
                                className="privacy-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'share-info' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'share-info' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'share-info' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('share-info')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>03 /</span>
                                    Sharing of Information
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We do not sell personal information. Data may be shared with trusted service providers that help us operate the platform, process payments, host infrastructure, or provide communication tools.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Information may also be disclosed when required by law, to enforce platform policies, or to protect users, the organization, or the public from fraud or abuse.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div
                                id="retention-security"
                                className="privacy-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'retention-security' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'retention-security' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'retention-security' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('retention-security')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>04 /</span>
                                    Data Retention and Security
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    We retain information for as long as needed to provide services, comply with legal and accounting obligations, resolve disputes, and enforce agreements.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    Reasonable administrative, technical, and organizational safeguards are used to protect data against unauthorized access, loss, misuse, or disclosure.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div
                                id="choices-rights"
                                className="privacy-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'choices-rights' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'choices-rights' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'choices-rights' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('choices-rights')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>05 /</span>
                                    Your Choices and Rights
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    You may request correction of inaccurate profile details and may contact the organization regarding account access, data deletion requests, or privacy concerns, subject to applicable law and legitimate business needs.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    You can also manage certain browser-level settings such as cookie preferences, cached data, and saved credentials on your own devices.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div
                                id="changes"
                                className="privacy-section-card"
                                style={{
                                    ...sectionCardStyle,
                                    transform: hoveredCard === 'changes' ? 'translateY(-4px)' : 'none',
                                    boxShadow: hoveredCard === 'changes' ? '0 12px 30px rgba(0, 168, 253, 0.08)' : 'none',
                                    borderColor: hoveredCard === 'changes' ? 'var(--icon-blue)' : 'var(--card-border-color)'
                                }}
                                onMouseEnter={() => setHoveredCard('changes')}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h2 style={sectionTitleStyle}>
                                    <span style={{ color: 'var(--icon-blue)', fontSize: '1.05rem', fontWeight: '800', fontFamily: 'monospace' }}>06 /</span>
                                    Policy Changes
                                </h2>
                                <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    This policy may be updated from time to time to reflect platform, legal, or operational changes.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-grey)' }}>
                                    When updates are material, the revised version will be posted on this page with an updated effective date.
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div
                                id="contact"
                                className="privacy-section-card animate-contact-card"
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