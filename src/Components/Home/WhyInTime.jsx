import React from 'react';
import { Search, Cpu, Wrench, Heart, Quote, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyInTime({ handleMouseMove }) {
  return (
    <section className="pov-section bg-shade-3">
      <div className="container">
        <div className="pov-header">
          <div className="unified-section-label">WHY INTIME</div>
          <h2 className="pov-heading">
            We Bring a Point <span className="gradient-text">of View.</span>
          </h2>
        </div>

        <div className="pov-main-grid">
          <div className="pov-item">
            <div className="pov-icon-box">
              <Search size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>We diagnose before we build.</h3>
              <p>Our assessments often reveal the most important problem isn't the one the client came to us with. This saves months of misdirected effort and significant wasted investment.</p>
            </div>
          </div>

          <div className="pov-item">
            <div className="pov-icon-box">
              <Cpu size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>AI-native engineering, grounded in 20 years of discipline.</h3>
              <p>We use AI to accelerate delivery. But we never ship without the testing, security, and architecture that production demands. Speed without rigor is just faster failure.</p>
            </div>
          </div>

          <div className="pov-item">
            <div className="pov-icon-box">
              <Wrench size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>We build tools the industry depends on.</h3>
              <p>NativeBase, gluestack-ui, React Native core contributions. React Summit 2024 Productivity Award. Thousands of developers trust our foundations.</p>
            </div>
          </div>

          <div className="pov-item">
            <div className="pov-icon-box">
              <Heart size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>We stay. We don't ship and disappear.</h3>
              <p>550+ engagements. Clients who've been with us for 5+ years. We're invested in long-term success, not just the current project scope.</p>
            </div>
          </div>
        </div>

        <div className="pov-learn-more">
          <Link to="/why-intime" className="perspective-cta">
            Learn more about why InTime <ArrowRight size={18} />
          </Link>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <Quote className="quote-icon" size={32} />
            <p className="testimonial-text">
              "Their code is clean and easy to implement. The app has great ratings across devices."
            </p>
            <div className="testimonial-divider"></div>
            <div className="testimonial-footer">
              <div className="client-avatar" style={{ background: '#0047bb' }}>
                <span style={{ fontSize: '10px', color: 'white', fontWeight: '800' }}>PayPoint</span>
              </div>
              <div className="client-info">
                <h4>Head of Product Management</h4>
                <p>PayPoint plc.</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <Quote className="quote-icon" size={32} />
            <p className="testimonial-text">
              "Exceptional responsiveness and professionalism. Highly positive feedback from beta customers."
            </p>
            <div className="testimonial-divider"></div>
            <div className="testimonial-footer">
              <div className="client-avatar" style={{ background: 'white', border: '4px solid #333' }}>
                <div style={{ width: '20px', height: '20px', background: '#e31e24', borderRadius: '50%' }}></div>
              </div>
              <div className="client-info">
                <h4>Verified Review — 4.8/5 rating</h4>
                <p>Clutch (112 reviews)</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <Quote className="quote-icon" size={32} />
            <p className="testimonial-text">
              "They anticipated potential problems and recommended solutions. This a rare skill."
            </p>
            <div className="testimonial-divider"></div>
            <div className="testimonial-footer">
              <div className="client-avatar" style={{ background: '#111' }}>
                <Activity size={20} color="#666" />
              </div>
              <div className="client-info">
                <h4>Project Director, Digital Transformation</h4>
                <p>AirOps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
