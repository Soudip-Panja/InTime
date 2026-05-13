import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  AlertTriangle, Cloud, Database, Zap, MapPin, Brain, Headphones, CheckCircle2, ArrowRight,
  Shield, Rocket, Settings, Trophy, Users, Award, Target, Download
} from "lucide-react";

export default function SAP() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      {/* HERO SECTION */}
      <main className="sap-hero-section text-center">
        <div className="container">
          <div className="sap-hero-content mx-auto d-flex flex-column align-items-center">
            <h1 className="sap-hero-title">
              Intelligent SAP: Powering Your<br />
              <span className="sap-gradient-text">Real-Time, Resilient, and Autonomous</span><br />
              Enterprise
            </h1>

            <p className="sap-hero-description text-center mx-auto">
              Your SAP system is more than an ERP; it's your enterprise's digital backbone. InTime Global specializes in transforming SAP landscapes – from complex S/4HANA migrations and RISE with SAP journeys to AI-driven process optimization – turning your core system into a strategic asset for growth and innovation.
            </p>

            <button className="sap-hero-cta mt-4">
              Transform Your SAP Landscape
            </button>
          </div>
        </div>
      </main>

      {/* ASSESSMENT SECTION (LIGHT) */}
      <section className="sap-assessment-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="sap-badge sap-badge-orange mx-auto mb-3">SAP Landscape Assessment</div>
            <h2 className="sap-section-title text-dark">
              Is Your SAP Landscape a Strategic Enabler<br />
              <span className="sap-text-orange">or an Operational Bottleneck?</span>
            </h2>
          </div>
          
          <div className="row g-4 justify-content-center mt-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div className="sap-assessment-card">
                <div className="sap-icon-box sap-icon-orange">
                  <AlertTriangle size={20} />
                </div>
                <p className="mb-0 text-dark">
                  Is your current SAP system (e.g., ECC) struggling to keep pace with evolving business demands for agility, real-time insights, and advanced analytics?
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div className="sap-assessment-card">
                <div className="sap-icon-box sap-icon-orange">
                  <Cloud size={20} />
                </div>
                <p className="mb-0 text-dark">
                  Are you navigating the complexities of an SAP S/4HANA migration, upgrade, or considering the strategic move to RISE with SAP?
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-6">
              <div className="sap-assessment-card">
                <div className="sap-icon-box sap-icon-orange">
                  <Database size={20} />
                </div>
                <p className="mb-0 text-dark">
                  Do you need to recover a stalled or underperforming SAP project and extract maximum value from your investment?
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-12 col-md-6">
              <div className="sap-assessment-card">
                <div className="sap-icon-box sap-icon-orange">
                  <Zap size={20} />
                </div>
                <p className="mb-0 text-dark">
                  Are you looking to integrate intelligent automation and AI directly into your SAP workflows to drive unprecedented efficiency?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES TABS SECTION */}
      <section className="sap-capabilities-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="sap-badge sap-badge-blue mx-auto mb-3">Core SAP Excellence</div>
            <h2 className="sap-section-title text-dark">
              Our Comprehensive SAP<br />
              <span className="sap-text-cyan">Transformation Capabilities</span>
            </h2>
            <p className="sap-section-subtitle mx-auto mt-3">
              From strategic advisory to intelligent optimization, we deliver end-to-end SAP<br />
              excellence that transforms your business into an autonomous enterprise.
            </p>
          </div>

          {/* TABS HEADER */}
          <div className="sap-tabs-container mx-auto mb-4">
            <button 
              className={`sap-tab-btn ${activeTab === 1 ? 'active-tab-1' : ''}`}
              onClick={() => setActiveTab(1)}
            >
              <MapPin size={18} className="me-2"/> Strategic Advisory
            </button>
            <button 
              className={`sap-tab-btn ${activeTab === 2 ? 'active-tab-2' : ''}`}
              onClick={() => setActiveTab(2)}
            >
              <Cloud size={18} className="me-2"/> Implementation
            </button>
            <button 
              className={`sap-tab-btn ${activeTab === 3 ? 'active-tab-3' : ''}`}
              onClick={() => setActiveTab(3)}
            >
              <Brain size={18} className="me-2"/> AI Optimization
            </button>
            <button 
              className={`sap-tab-btn ${activeTab === 4 ? 'active-tab-4' : ''}`}
              onClick={() => setActiveTab(4)}
            >
              <Headphones size={18} className="me-2"/> Managed Services
            </button>
          </div>

          {/* TAB CONTENT AREA */}
          <div className="sap-tab-content-card">
            {activeTab === 1 && (
              <div className="sap-tab-pane fade-in">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="sap-feature-icon bg-blue">
                    <MapPin size={24} color="white"/>
                  </div>
                  <div>
                    <h3 className="sap-feature-title mb-1">Strategic SAP Advisory & Roadmap Development</h3>
                    <p className="sap-feature-subtitle mb-0">Aligning your SAP strategy with overarching business objectives for maximum impact.</p>
                  </div>
                </div>
                
                <hr className="sap-divider" />
                
                <div className="row mt-4">
                  <div className="col-lg-7">
                    <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Our Services</h4>
                    <ul className="sap-feature-list">
                      <li><CheckCircle2 size={18} className="sap-check icon-blue"/> SAP S/4HANA Transformation Roadmaps (Greenfield, Brownfield, Bluefield/Hybrid approaches)</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-blue"/> RISE with SAP & GROW with SAP: Strategic planning, assessment, and migration advisory</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-blue"/> SAP Business Technology Platform (BTP) strategy and utilization</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-blue"/> Intelligent Enterprise assessment and maturity modeling</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-blue"/> SAP Project Recovery and Turnaround strategy for challenged implementations</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="sap-benefit-box">
                      <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Key Benefits</h4>
                      <p className="sap-benefit-text">Gain a clear, actionable roadmap to a modernized, intelligent SAP landscape that drives tangible business value and positions your enterprise for future growth with reduced risk and accelerated time-to-value.</p>
                      <a href="#" className="sap-benefit-link text-blue">40% faster transformation <ArrowRight size={14} className="ms-1"/></a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="sap-tab-pane fade-in">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="sap-feature-icon bg-teal">
                    <Cloud size={24} color="white"/>
                  </div>
                  <div>
                    <h3 className="sap-feature-title mb-1">SAP S/4HANA & Cloud Implementation Excellence</h3>
                    <p className="sap-feature-subtitle mb-0">Delivering seamless, on-time, and on-budget SAP S/4HANA implementations and cloud migrations.</p>
                  </div>
                </div>
                
                <hr className="sap-divider" />
                
                <div className="row mt-4">
                  <div className="col-lg-7">
                    <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Implementation Services</h4>
                    <ul className="sap-feature-list">
                      <li><CheckCircle2 size={18} className="sap-check icon-teal"/> End-to-end SAP S/4HANA (Private & Public Cloud) and ECC Implementation</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-teal"/> Complex Data Migration and System Conversion to S/4HANA</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-teal"/> Expertise across core modules: FI/CO, MM, SD, PP, HCM, EWM, TM</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-teal"/> Advanced module implementation: SuccessFactors, Ariba, Concur, IBP, SAC, Fiori UX</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="sap-benefit-box">
                      <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Delivery Excellence</h4>
                      <p className="sap-benefit-text">Achieve a stable, scalable, and high-performing SAP S/4HANA core, ready to support future growth and innovation with minimal disruption to business operations.</p>
                      <a href="#" className="sap-benefit-link text-teal">95% on-time delivery <ArrowRight size={14} className="ms-1"/></a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="sap-tab-pane fade-in">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="sap-feature-icon bg-purple">
                    <Brain size={24} color="white"/>
                  </div>
                  <div>
                    <h3 className="sap-feature-title mb-1">Intelligent SAP Optimization & AI Integration</h3>
                    <p className="sap-feature-subtitle mb-0">Enhancing your existing SAP investment with intelligent automation and advanced analytics.</p>
                  </div>
                </div>
                
                <hr className="sap-divider" />
                
                <div className="row mt-4">
                  <div className="col-lg-7">
                    <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>AI-Powered Services</h4>
                    <ul className="sap-feature-list">
                      <li><CheckCircle2 size={18} className="sap-check icon-purple"/> Integration of AI Agents (NeuraCore™/ExecuCore™ based, e.g., FinanceBot, Task Agents)</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-purple"/> Automate complex SAP workflows (order-to-cash, procure-to-pay, record-to-report)</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-purple"/> Intelligent Reporting & Analytics: Real-time BI dashboards with predictive capabilities</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-purple"/> SAP Process Mining and Optimization for continuous improvement</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-purple"/> Custom Fiori app development for enhanced user experience and mobility</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="sap-benefit-box">
                      <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Intelligent Outcomes</h4>
                      <p className="sap-benefit-text">Unlock new levels of efficiency, reduce manual effort by up to 70%, and gain deeper insights from your SAP data through intelligent automation and AI-driven optimization.</p>
                      <a href="#" className="sap-benefit-link text-purple">70% manual effort reduction <ArrowRight size={14} className="ms-1"/></a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="sap-tab-pane fade-in">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="sap-feature-icon bg-green">
                    <Headphones size={24} color="white"/>
                  </div>
                  <div>
                    <h3 className="sap-feature-title mb-1">SAP Managed Services & Continuous Support</h3>
                    <p className="sap-feature-subtitle mb-0">Ensuring the ongoing stability, performance, and evolution of your SAP environment.</p>
                  </div>
                </div>
                
                <hr className="sap-divider" />
                
                <div className="row mt-4">
                  <div className="col-lg-7">
                    <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Support Services</h4>
                    <ul className="sap-feature-list">
                      <li><CheckCircle2 size={18} className="sap-check icon-green"/> Flexible SAP Application Management Services (AMS) Packages</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-green"/> Proactive System Monitoring, Tuning, and Performance Optimization</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-green"/> Post-Go-Live Support, End-User Training, and Change Management</li>
                      <li><CheckCircle2 size={18} className="sap-check icon-green"/> Version Upgrades and Enhancement Pack Implementation</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="sap-benefit-box">
                      <h4 className="sap-list-title"><ArrowRight size={16} className="me-2"/>Continuous Value</h4>
                      <p className="sap-benefit-text">Maximize uptime (99.9% SLA), reduce operational risk, and ensure your SAP system continuously adapts to your business needs with expert support and proactive maintenance.</p>
                      <a href="#" className="sap-benefit-link text-green">99.9% uptime guarantee <ArrowRight size={14} className="ms-1"/></a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS SECTION (DARK) */}
      <section className="sap-engagement-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="sap-section-title text-dark">
              Our Engagement Models: <span className="sap-text-cyan">Tailored for Your SAP Journey</span>
            </h2>
            <p className="sap-section-subtitle mx-auto mt-3">
              Choose the engagement model that best fits your organization's needs and transformation objectives.
            </p>
          </div>

          <div className="row g-4 justify-content-center mt-4">
            {/* Model 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-model-card sap-model-card-1">
                <div className="sap-model-icon-box sap-model-icon-box-1 mx-auto mb-4">
                  <Shield size={24} color="white" />
                </div>
                <div className="sap-model-badge badge-essential mb-3">Essential</div>
                <h3 className="sap-model-title">Foundation Support</h3>
                <p className="sap-model-desc">Reliable, expert monthly support for all your SAP modules.</p>
                <ul className="sap-model-features">
                  <li><div className="sap-dot sap-dot-1" /> Monthly retainer packages</li>
                  <li><div className="sap-dot sap-dot-1" /> Expert consultants on-demand</li>
                  <li><div className="sap-dot sap-dot-1" /> Basic monitoring and maintenance</li>
                </ul>
              </div>
            </div>
            
            {/* Model 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-model-card sap-model-card-2">
                <div className="sap-model-icon-box sap-model-icon-box-2 mx-auto mb-4">
                  <Zap size={24} color="white" />
                </div>
                <div className="sap-model-badge badge-popular mb-3">Popular</div>
                <h3 className="sap-model-title">Advanced Optimization</h3>
                <p className="sap-model-desc">Comprehensive support combined with targeted automation and BI reporting enhancements.</p>
                <ul className="sap-model-features">
                  <li><div className="sap-dot sap-dot-2" /> Foundation support included</li>
                  <li><div className="sap-dot sap-dot-2" /> Automation implementations</li>
                  <li><div className="sap-dot sap-dot-2" /> BI dashboard development</li>
                  <li><div className="sap-dot sap-dot-2" /> Performance tuning</li>
                </ul>
              </div>
            </div>

            {/* Model 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-model-card sap-model-card-3">
                <div className="sap-model-icon-box sap-model-icon-box-3 mx-auto mb-4">
                  <Rocket size={24} color="white" />
                </div>
                <div className="sap-model-badge badge-premium mb-3">Premium</div>
                <h3 className="sap-model-title">Full Transformation</h3>
                <p className="sap-model-desc">End-to-end SAP modernization, full-stack automation with Agentic AI, custom and predictive BI.</p>
                <ul className="sap-model-features">
                  <li><div className="sap-dot sap-dot-3" /> Complete SAP transformation</li>
                  <li><div className="sap-dot sap-dot-3" /> Agentic AI integration</li>
                  <li><div className="sap-dot sap-dot-3" /> Predictive analytics</li>
                  <li><div className="sap-dot sap-dot-3" /> Continuous optimization</li>
                </ul>
              </div>
            </div>

            {/* Model 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-model-card sap-model-card-4">
                <div className="sap-model-icon-box sap-model-icon-box-4 mx-auto mb-4">
                  <Settings size={24} color="white" />
                </div>
                <div className="sap-model-badge badge-flexible mb-3">Flexible</div>
                <h3 className="sap-model-title">Custom Project Engagements</h3>
                <p className="sap-model-desc">Bespoke solutions designed to address your unique business challenges and strategic SAP objectives.</p>
                <ul className="sap-model-features">
                  <li><div className="sap-dot sap-dot-4" /> Tailored solutions</li>
                  <li><div className="sap-dot sap-dot-4" /> Project-based engagement</li>
                  <li><div className="sap-dot sap-dot-4" /> Specialized expertise</li>
                  <li><div className="sap-dot sap-dot-4" /> Strategic alignment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF OF EXCELLENCE SECTION (LIGHT) */}
      <section className="sap-proof-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="sap-badge sap-badge-blue mx-auto mb-3 text-white" style={{background: '#2563eb', border: 'none'}}>Proven Excellence</div>
            <h2 className="sap-section-title text-dark">
              Proof of SAP Excellence & Client Trust
            </h2>
            <p className="sap-proof-subtitle mx-auto mt-3">
              Our track record speaks for itself – delivering SAP success for enterprises worldwide.
            </p>
          </div>

          <div className="row g-4 justify-content-center mt-4">
            {/* Stat Card 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-proof-card">
                <div className="sap-proof-icon-box mx-auto mb-4">
                  <Trophy size={28} color="white" />
                </div>
                <h3 className="sap-proof-title">Comprehensive Enterprise Transformation</h3>
                <p className="sap-proof-desc">Successfully delivered 2 SAP implementations, 1 merger integration, 2 rollouts, and 1 BI project for a Big Group of companies - all completed within 12 months, demonstrating our ability to handle complex, multi-faceted transformations at scale.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-proof-card">
                <div className="sap-proof-icon-box mx-auto mb-4">
                  <Users size={28} color="white" />
                </div>
                <h3 className="sap-proof-title">200+ SAP Consultants Trained</h3>
                <p className="sap-proof-desc">Successfully upskilled over 200+ SAP consultants since 2016, ensuring a deep talent pool for your projects.</p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-proof-card">
                <div className="sap-proof-icon-box mx-auto mb-4">
                  <Award size={28} color="white" />
                </div>
                <h3 className="sap-proof-title">Complex Implementation Success</h3>
                <p className="sap-proof-desc">Delivered complex SAP solutions, including 500+ custom objects and 150+ KPIs for the EGCB SAP Implementation (Major Public Utility).</p>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="sap-proof-card">
                <div className="sap-proof-icon-box mx-auto mb-4">
                  <Target size={28} color="white" />
                </div>
                <h3 className="sap-proof-title">Project Recovery Expertise</h3>
                <p className="sap-proof-desc">Proven track record in project recovery, turning around challenged SAP initiatives for global clients with measurable results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (DARK) */}
      <section className="sap-cta-section">
        <div className="container">
          <div className="sap-cta-card">
            <h2 className="sap-cta-title">Ready to Transform Your SAP Landscape into an Engine for Growth?</h2>
            <p className="sap-cta-desc mx-auto">
              Discuss your SAP challenges and modernization goals with our certified experts. Let us show you how to turn your SAP investment into a strategic advantage.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mt-4">
              <button className="sap-cta-btn-light">
                Request an SAP Strategy Consultation <ArrowRight size={16} className="ms-2" />
              </button>
              <button className="sap-cta-btn-dark">
                <Download size={16} className="me-2" /> CIO's S/4HANA Migration Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
