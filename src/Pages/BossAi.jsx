import React, { useEffect, useState } from 'react';
import {
  Brain,
  MessageSquare,
  BarChart3,
  Workflow,
  Mic,
  Network,
  Users,
  Database,
  Search,
  Cpu,
  Target,
  FileText,
  Briefcase,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SEO from '../Components/SEO';


export default function BossAi() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleGlobalMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <SEO 
        title="BOSS AI | Autonomous Business Intelligence & Operations"
        description="Discover BOSS AI, our proprietary autonomous business intelligence platform that automates complex data operations and decision-making."
        keywords="BOSS AI, autonomous BI, AI operations, AI business intelligence"
      />
      <Navbar />
      <div className="boss-page-container" style={{ '--bg-mouse-x': `${mousePos.x}px`, '--bg-mouse-y': `${mousePos.y}px` }}>
      {/* Background Elements */}
      <div className="boss-ambient-bg">
        <div className="ai-bg-spotlight"></div>
        <div className="boss-glow-orb orb-1"></div>
        <div className="boss-glow-orb orb-2"></div>
        <div className="boss-glow-orb orb-3"></div>
      </div>

      <div className="container position-relative z-1">
        {/* HERO SECTION */}
        <section className="boss-hero-section">
          <div className="boss-hero-badge">
            <SparklesIcon className="badge-icon" /> AI-Powered Enterprise OS
          </div>
          <h1 className="boss-hero-title">
            Meet <span className="boss-text-gradient">Boss AI</span>
          </h1>
          <p className="boss-hero-subtitle">
            A centralized AI layer that helps organizations run operations, intelligence, communication, and decision-making from one unified platform.
          </p>
          <div className="boss-hero-cta-group">
            <button className="nav-cta-btn boss-hero-btn">
              Deploy Boss AI <ArrowRight size={18} className="arrow" />
            </button>
            <button className="boss-secondary-btn">
              Explore Capabilities
            </button>
          </div>
          
          {/* Neural Network Graphic */}
          <div className="boss-neural-graphic">
            <div className="neural-center">
              <Brain size={48} className="boss-text-gradient" />
            </div>
            <div className="neural-node node-1"><MessageSquare size={20} /></div>
            <div className="neural-node node-2"><BarChart3 size={20} /></div>
            <div className="neural-node node-3"><Workflow size={20} /></div>
            <div className="neural-node node-4"><Mic size={20} /></div>
            <div className="neural-node node-5"><Network size={20} /></div>
            <div className="neural-node node-6"><Users size={20} /></div>
          </div>
        </section>

        <div className="section-separator"></div>

        {/* CORE CAPABILITY */}
        <section className="boss-section text-center">
          <h2 className="boss-section-title">Ask. Analyze. Act.</h2>
          <p className="boss-section-desc mx-auto" style={{ maxWidth: '800px' }}>
            Ask business questions in natural language and get live, data-backed answers instantly. Boss AI combines multiple intelligence dimensions to empower your workforce.
          </p>
          
          <div className="row g-4 mt-5">
            {[
              { icon: MessageSquare, title: 'Conversational AI', desc: 'Interact seamlessly via chat, voice, and multi-channel messaging.' },
              { icon: BarChart3, title: 'Business Intelligence', desc: 'Live KPI dashboards and predictive revenue analytics.' },
              { icon: Workflow, title: 'Workflow Automation', desc: 'Automate repetitive tasks across your enterprise stack.' },
              { icon: Network, title: 'Multi-Agent Orchestration', desc: 'Specialized agents working together to solve complex problems.' }
            ].map((feature, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div onMouseMove={handleCardMouseMove} className="boss-glass-card boss-feature-card text-center">
                  <div className="boss-icon-wrapper mx-auto mb-3">
                    <feature.icon size={28} className="boss-text-gradient" />
                  </div>
                  <h4 className="boss-card-title">{feature.title}</h4>
                  <p className="boss-card-text">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATIONS & DATA */}
        <section className="boss-section">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="boss-badge">Enterprise Data Connected</div>
              <h2 className="boss-section-title mt-3 text-start">Connects to Your Entire Ecosystem</h2>
              <p className="boss-section-desc text-start">
                Boss AI acts as the connective tissue for your enterprise data, pulling from structured and unstructured sources to provide a unified source of truth.
              </p>
              
              <div className="boss-integration-grid mt-4">
                {['PostgreSQL', 'MSSQL', 'MySQL', 'SAP', 'CSV/XLSX', 'Google Sheets', 'Vector Databases'].map((db, i) => (
                  <div key={i} className="boss-db-pill-alt">
                    <Database size={16} /> {db}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card boss-integration-visual-alt p-0 text-center d-flex align-items-center justify-content-center position-relative overflow-hidden">
                 <div className="image1-dashed-ring"></div>
                 <div className="image1-icon-circle">
                    <Database size={32} color="#0072ff" strokeWidth={1.5} />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZED AGENTS */}
        <section className="boss-section">
          <div className="text-center mb-5">
            <div className="boss-badge mx-auto">Multi-Agent System</div>
            <h2 className="boss-section-title mt-3">Specialized AI Agents</h2>
            <p className="boss-section-desc mx-auto" style={{ maxWidth: '600px' }}>
              Deploy purpose-built agents to handle specific departmental tasks with precision and speed.
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { icon: Database, name: 'SQL Agent', role: 'Data Queries & Analysis' },
              { icon: Calendar, name: 'Meeting Agent', role: 'Scheduling & Transcription' },
              { icon: Users, name: 'Talent Agent', role: 'HR & Recruiting Intelligence' },
              { icon: Search, name: 'Research Agent', role: 'Market & Competitor Insights' },
              { icon: Cpu, name: 'Data Processing Agent', role: 'ETL & Data Cleaning' },
              { icon: Target, name: 'Project Management Agent', role: 'Task Assignment & Tracking' }
            ].map((agent, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div onMouseMove={handleCardMouseMove} className="boss-glass-card boss-agent-card">
                  <div className="d-flex align-items-center gap-3">
                    <div className="boss-icon-wrapper-small">
                      <agent.icon size={22} className="boss-text-gradient" />
                    </div>
                    <div>
                      <h4 className="boss-card-title m-0">{agent.name}</h4>
                      <p className="boss-card-text m-0" style={{ fontSize: '0.85rem' }}>{agent.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-separator"></div>

        {/* INTELLIGENCE MODULES (Grid Layout) */}
        <section className="boss-section">
          <div className="text-center mb-5">
            <h2 className="boss-section-title">Comprehensive Intelligence Modules</h2>
          </div>

          <div className="row g-4">
            {/* KPI Analytics */}
            <div className="col-lg-6">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card h-100 p-5">
                <div className="boss-icon-wrapper mb-4"><BarChart3 size={32} color="#00a8fd" /></div>
                <h3 className="boss-module-title">Executive Dashboards & KPI Analytics</h3>
                <p className="boss-module-desc">Monitor over 1000+ business KPIs in real-time. Make data-driven decisions instantly.</p>
                <ul className="boss-feature-list">
                  <li><CheckCircle2 size={16} /> Revenue analytics & forecasting</li>
                  <li><CheckCircle2 size={16} /> Profitability & operational monitoring</li>
                  <li><CheckCircle2 size={16} /> Inventory tracking</li>
                  <li><CheckCircle2 size={16} /> Automated compliance reporting</li>
                </ul>
              </div>
            </div>

            {/* Meeting Intelligence */}
            <div className="col-lg-6">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card h-100 p-5">
                <div className="boss-icon-wrapper mb-4"><Calendar size={32} color="#00d2ff" /></div>
                <h3 className="boss-module-title">AI-Powered Meeting Workflows</h3>
                <p className="boss-module-desc">Transform meetings from time-sinks into actionable intelligence centers.</p>
                <ul className="boss-feature-list">
                  <li><CheckCircle2 size={16} /> Google Meet / Teams automated booking</li>
                  <li><CheckCircle2 size={16} /> Real-time AI transcription & MOM generation</li>
                  <li><CheckCircle2 size={16} /> Summary & action item extraction</li>
                </ul>
              </div>
            </div>

            {/* Talent Intelligence */}
            <div className="col-lg-4">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card h-100 p-4">
                <div className="boss-icon-wrapper-small mb-3"><Briefcase size={20} color="#00a8fd" /></div>
                <h4 className="boss-card-title">Talent Intelligence</h4>
                <ul className="boss-feature-list mt-3">
                  <li><CheckCircle2 size={14} /> Resume parsing & skill extraction</li>
                  <li><CheckCircle2 size={14} /> Employee suitability analysis</li>
                  <li><CheckCircle2 size={14} /> AI-based task assignment</li>
                </ul>
              </div>
            </div>

            {/* Document Intelligence */}
            <div className="col-lg-4">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card h-100 p-4">
                <div className="boss-icon-wrapper-small mb-3"><FileText size={20} color="#00d2ff" /></div>
                <h4 className="boss-card-title">Document Intelligence</h4>
                <ul className="boss-feature-list mt-3">
                  <li><CheckCircle2 size={14} /> RFQ analysis & Tender evaluation</li>
                  <li><CheckCircle2 size={14} /> OCR & Compliance checking</li>
                  <li><CheckCircle2 size={14} /> Automated Risk scoring</li>
                </ul>
              </div>
            </div>

            {/* Voice Architecture */}
            <div className="col-lg-4">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card h-100 p-4">
                <div className="boss-icon-wrapper-small mb-3"><Mic size={20} color="#0072ff" /></div>
                <h4 className="boss-card-title">Voice-First Architecture</h4>
                <ul className="boss-feature-list mt-3">
                  <li><CheckCircle2 size={14} /> Real-time voice transcription</li>
                  <li><CheckCircle2 size={14} /> Multi-language AI voice assistants</li>
                  <li><CheckCircle2 size={14} /> Advanced noise handling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNANCE & PHILOSOPHY */}
        <section className="boss-section">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-lg-2">
              <div onMouseMove={handleCardMouseMove} className="boss-glass-card p-4 boss-governance-visual position-relative overflow-hidden">
                 <div className="gov-glow position-absolute top-0 end-0"></div>
                 <ShieldCheck size={48} className="boss-text-gradient mb-4" />
                 <h4 className="boss-card-title">Enterprise Governance Focus</h4>
                 <div className="d-flex flex-column gap-2 mt-3">
                    <div className="boss-gov-item"><ShieldCheck size={16} className="text-success" /> Audit trails & Role-based access</div>
                    <div className="boss-gov-item"><ShieldCheck size={16} className="text-success" /> SQL governance & Compliance controls</div>
                    <div className="boss-gov-item"><Users size={16} className="text-warning" /> Human Approvals Required</div>
                 </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="boss-badge">Strategic Philosophy</div>
              <h2 className="boss-section-title mt-3 text-start">AI Handles Analysis.<br/>Humans Retain Judgment.</h2>
              <p className="boss-section-desc text-start mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Boss AI is designed to augment human intelligence, not replace it. The AI operates at the speed of thought, processing vast amounts of data, running analytics, and automating workflows. 
                <br/><br/>
                However, critical decision-making authority and final judgments always remain in the hands of your executives and managers, supported by robust governance and human-in-the-loop approvals.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="boss-section text-center mb-5 pb-5">
          <div className="boss-cta-banner-alt p-5 rounded-4 position-relative overflow-hidden">
             <div className="boss-cta-bg-alt"></div>
             <div className="position-relative z-1">
               <h2 className="boss-cta-title mb-3">Ready for the Future of Operations?</h2>
               <p className="boss-cta-desc mx-auto mb-4" style={{ maxWidth: '600px' }}>
                 Implement the centralized AI layer that unifies operations, intelligence, and communication in one platform.
               </p>
               <button className="nav-cta-btn boss-cta-button">
                 <span>Schedule Boss AI Demo</span> <ArrowRight size={18} className="arrow" />
               </button>
             </div>
          </div>
        </section>

      </div>
      </div>
      <Footer />
    </>
  );
}

// Sparkles Icon component
function SparklesIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>
      </defs>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="url(#sparkle-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}