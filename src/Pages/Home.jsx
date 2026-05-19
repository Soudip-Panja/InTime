import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { 
  ChevronLeft, ChevronRight, ArrowUpRight, Cloud, Triangle, Activity, GitBranch, 
  ShieldCheck, CheckCircle, Star, Award, Medal, Cpu, CloudLightning, BarChart3, 
  Database, Server, Box, Trophy, Target, CheckCircle2, Globe, Users, TrendingUp, 
  Zap, Search, Wrench, Heart, Quote, ArrowRight 
} from 'lucide-react';

import brand1 from "../assets/Brand Logos/Brand1.png";
import brand2 from "../assets/Brand Logos/Brand2.png";
import brand3 from "../assets/Brand Logos/Brand3.png";
import brand4 from "../assets/Brand Logos/Brand4.png";
import brand5 from "../assets/Brand Logos/Brand5.png";
import brand6 from "../assets/Brand Logos/Brand6.png";
import brand7 from "../assets/Brand Logos/Brand7.png";
import brand8 from "../assets/Brand Logos/Brand8.png";
import brand9 from "../assets/Brand Logos/Brand9.png";
import brand10 from "../assets/Brand Logos/Brand10.png";
import brand11 from "../assets/Brand Logos/Brand11.png";
import brand12 from "../assets/Brand Logos/Brand12.png";
import brand13 from "../assets/Brand Logos/Brand13.png";
import brand14 from "../assets/Brand Logos/Brand14.png";
import brand15 from "../assets/Brand Logos/Brand15.png";
import perspectiveImg from "../assets/Our Perspective.jpg";

// ==========================================
// TrustedByCarousel
// ==========================================
const logos = [
  brand1, brand2, brand3, brand4, brand5, 
  brand6, brand7, brand8, brand9, brand10, 
  brand11, brand12, brand13, brand14, brand15
];

function Carousel() {
  const trackRef = useRef(null);
  const headerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        }
      );
    }
  }, []);

  useEffect(() => {
    let animationId;
    const scroll = () => {
      if (trackRef.current && !isHovered) {
        trackRef.current.scrollLeft += 1;
        if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
          trackRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section 
      className="brand-carousel-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container trusted-header-container">
        <div className="trusted-header-layout" ref={headerRef}>
          
          <div className="trusted-badge">
            <span className="status-dot"></span> TRUSTED BY FORWARD-THINKING COMPANIES
          </div>
          
          <div className="trusted-main-content">
            <div className="trusted-text-block">
              <h2 className="trusted-heading">
                Helping Businesses Scale Through <br className="hidden-mobile" />
                <span className="gradient-text">SAP, BI & AI Engineering</span>
              </h2>
              <p className="trusted-description">
                From enterprise modernization to intelligent automation — trusted by organizations driving digital transformation.
              </p>
            </div>
            
            <div className="trusted-stats">
              <span className="stat-number">15</span> alliance partners
            </div>
          </div>
          
        </div>
      </div>
      <div className="carousel-container-relative">
        <div className="carousel-track-wrapper js-scroll" ref={trackRef}>
          <div className="carousel-track no-anim">
            {logos.concat(logos).map((logo, index) => (
              <div className="carousel-item-logo" key={index}>
                <div 
                  className="gradient-logo-wrapper"
                  style={{
                    WebkitMaskImage: `url(${logo})`,
                    maskImage: `url(${logo})`
                  }}
                >
                  <img src={logo} alt={`Brand ${index}`} className="logo-img-invisible" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// CompanyOverView
// ==========================================
function CompanyOverView() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(leftRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );
    }
    
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.overview-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section className="company-overview-section" ref={sectionRef}>
      <div className="overview-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="container">
        <div className="overview-layout">
          <div className="overview-left" ref={leftRef}>
            <div className="unified-section-label">COMPANY OVERVIEW</div>
            <h2 className="overview-heading">
              We Are<br />
              <span className="gradient-text-primary">InTime Global</span>
            </h2>
            <p className="overview-description">
              Architects of your autonomous future. We empower enterprises with AI, SAP, and BI expertise across the Middle East, Europe, Asia, and beyond.
            </p>
            <a href="/about" className="overview-link">
              Learn about InTime <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="overview-right">
            <div className="overview-grid" onMouseMove={handleMouseMove}>
              <div className="overview-card" ref={el => cardsRef.current[0] = el}>
                <Globe className="overview-card-icon icon-blue" />
                <h3 className="overview-card-title stat-title">6+</h3>
                <div className="overview-card-subtitle">GLOBAL PRESENCE</div>
                <p className="overview-card-desc">Countries</p>
              </div>
              <div className="overview-card" ref={el => cardsRef.current[1] = el}>
                <Users className="overview-card-icon icon-blue" />
                <h3 className="overview-card-title stat-title">200+</h3>
                <div className="overview-card-subtitle">ELITE EXPERTS</div>
                <p className="overview-card-desc">Consultants</p>
              </div>
              <div className="overview-card" ref={el => cardsRef.current[2] = el}>
                <Award className="overview-card-icon icon-blue" />
                <h3 className="overview-card-title stat-title">95%</h3>
                <div className="overview-card-subtitle">PROVEN EXCELLENCE</div>
                <p className="overview-card-desc">Success Rate</p>
              </div>
              <div className="overview-card" ref={el => cardsRef.current[3] = el}>
                <TrendingUp className="overview-card-icon icon-blue" />
                <h3 className="overview-card-title stat-title">$100M+</h3>
                <div className="overview-card-subtitle">STRATEGIC ROI</div>
                <p className="overview-card-desc">Client Value Created<br/>Proven ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// OurPerspective
// ==========================================
function OurPerspective() {
  const contentRef = useRef(null);
  const featureRefs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );
    }

    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(feature,
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out",
            scrollTrigger: { trigger: feature, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });

    if (imgRef.current) {
      gsap.fromTo(imgRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );
    }
  }, []);

  return (
    <section className="perspective-section">
      <div className="container">
        <div className="perspective-grid">
          <div className="perspective-content" ref={contentRef}>
            <div className="unified-section-label">OUR PERSPECTIVE</div>
            <h2 className="perspective-main-title">
              The Future of Enterprise Growth is <br />
              <span className="gradient-highlight">Being Engineered Today.</span>
            </h2>
            <p className="perspective-intro">
              From intelligent SAP ecosystems to Business Intelligence and AI-powered innovation, 
              we help businesses transform operations, unlock insights, and scale smarter.
            </p>
            <div className="perspective-feature-list">
              <div className="feature-item" ref={el => featureRefs.current[0] = el}>
                <div className="feature-icon-wrapper">
                  <ShieldCheck size={22} />
                </div>
                <div className="feature-text">
                  <h4>Enterprise Systems, Optimized</h4>
                </div>
              </div>
              <div className="feature-item" ref={el => featureRefs.current[1] = el}>
                <div className="feature-icon-wrapper">
                  <BarChart3 size={22} />
                </div>
                <div className="feature-text">
                  <h4>Data-Driven Decision Making</h4>
                </div>
              </div>
              <div className="feature-item" ref={el => featureRefs.current[2] = el}>
                <div className="feature-icon-wrapper">
                  <Zap size={22} />
                </div>
                <div className="feature-text">
                  <h4>AI Solutions Built for Growth</h4>
                </div>
              </div>
              <div className="feature-item" ref={el => featureRefs.current[3] = el}>
                <div className="feature-icon-wrapper">
                  <CheckCircle2 size={22} />
                </div>
                <div className="feature-text">
                  <h4>Scalable & Future-Ready Technology</h4>
                </div>
              </div>
            </div>
            <div className="perspective-action">
              <a href="/roi" className="perspective-cta">
                Learn how we engineer growth <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="perspective-image-container" ref={imgRef}>
            <div className="perspective-image-wrapper">
              <img src={perspectiveImg} alt="Our Perspective" className="perspective-img" />
              <div className="perspective-img-overlay"></div>
              <div className="img-border-glow"></div>
              <div className="floating-stat-badge">
                <div className="stat-dot"></div>
                <span>Strategic Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// ColorBends
// ==========================================
const MAX_COLORS = 8;
const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    for (int j = 0; j < 5; j++) {
      if (j >= uIterations - 1) break;
      vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
      q += (rr - q) * 0.15;
    }

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    col *= uIntensity;

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

function ColorBends({
  className = '',
  style = {},
  rotation = 90,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.15,
  iterations = 1,
  intensity = 1.5,
  bandWidth = 6
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const materialRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(autoRotate);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));
  const pointerSmoothRef = useRef(8);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));
    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uTransparent: { value: transparent ? 1 : 0 },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax },
        uNoise: { value: noise },
        uIterations: { value: iterations },
        uIntensity: { value: intensity },
        uBandWidth: { value: bandWidth }
      },
      premultipliedAlpha: true,
      transparent: true
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, transparent ? 0 : 1);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
    };

    handleResize();

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      window.addEventListener('resize', handleResize);
    }

    const loop = () => {
      const dt = clock.getDelta();
      const elapsed = clock.elapsedTime;
      material.uniforms.uTime.value = elapsed;

      const deg = (rotationRef.current % 360) + autoRotateRef.current * elapsed;
      const rad = (deg * Math.PI) / 180;
      const c = Math.cos(rad);
      const s = Math.sin(rad);
      material.uniforms.uRot.value.set(c, s);

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      const amt = Math.min(1, dt * pointerSmoothRef.current);
      cur.lerp(tgt, amt);
      material.uniforms.uPointer.value.copy(cur);
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [bandWidth, frequency, intensity, iterations, mouseInfluence, noise, parallax, scale, speed, transparent, warpStrength]);

  useEffect(() => {
    const material = materialRef.current;
    const renderer = rendererRef.current;
    if (!material) return;

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;
    material.uniforms.uIterations.value = iterations;
    material.uniforms.uIntensity.value = intensity;
    material.uniforms.uBandWidth.value = bandWidth;

    const toVec3 = hex => {
      const h = hex.replace('#', '').trim();
      const v =
        h.length === 3
          ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
          : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
      return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
    };

    const arr = (colors || []).filter(Boolean).slice(0, MAX_COLORS).map(toVec3);
    for (let i = 0; i < MAX_COLORS; i++) {
      const vec = material.uniforms.uColors.value[i];
      if (i < arr.length) vec.copy(arr[i]);
      else vec.set(0, 0, 0);
    }
    material.uniforms.uColorCount.value = arr.length;

    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    if (renderer) renderer.setClearColor(0x000000, transparent ? 0 : 1);
  }, [
    rotation, autoRotate, speed, scale, frequency, warpStrength,
    mouseInfluence, parallax, noise, iterations, intensity, bandWidth,
    colors, transparent
  ]);

  useEffect(() => {
    const material = materialRef.current;
    const container = containerRef.current;
    if (!material || !container) return;

    const handlePointerMove = e => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
      pointerTargetRef.current.set(x, y);
    };

    container.addEventListener('pointermove', handlePointerMove);
    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div ref={containerRef} className={`color-bends-container ${className}`} style={style} />;
}

// ==========================================
// WhyInTime
// ==========================================
function WhyInTime({ handleMouseMove }) {
  const headerRef = useRef(null);
  const itemsRef = useRef([]);
  const testimonialsRef = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );
    }

    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });

    testimonialsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 0.8, delay: index * 0.15, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    });
  }, []);

  return (
    <section className="pov-section bg-shade-3">
      <div className="container">
        <div className="pov-header" ref={headerRef}>
          <div className="unified-section-label">WHY INTIME</div>
          <h2 className="pov-heading">
            We Bring a Point <span className="gradient-text">of View.</span>
          </h2>
        </div>

        <div className="pov-main-grid">
          <div className="pov-item" ref={el => itemsRef.current[0] = el}>
            <div className="pov-icon-box">
              <Search size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>We diagnose before we build.</h3>
              <p>Our assessments often reveal the most important problem isn't the one the client came to us with. This saves months of misdirected effort and significant wasted investment.</p>
            </div>
          </div>

          <div className="pov-item" ref={el => itemsRef.current[1] = el}>
            <div className="pov-icon-box">
              <Cpu size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>AI-native engineering, grounded in 20 years of discipline.</h3>
              <p>We use AI to accelerate delivery. But we never ship without the testing, security, and architecture that production demands. Speed without rigor is just faster failure.</p>
            </div>
          </div>

          <div className="pov-item" ref={el => itemsRef.current[2] = el}>
            <div className="pov-icon-box">
              <Wrench size={24} className="pov-icon" />
            </div>
            <div className="pov-text">
              <h3>We build tools the industry depends on.</h3>
              <p>NativeBase, gluestack-ui, React Native core contributions. React Summit 2024 Productivity Award. Thousands of developers trust our foundations.</p>
            </div>
          </div>

          <div className="pov-item" ref={el => itemsRef.current[3] = el}>
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
          <div className="testimonial-card" ref={el => testimonialsRef.current[0] = el}>
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

          <div className="testimonial-card" ref={el => testimonialsRef.current[1] = el}>
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

          <div className="testimonial-card" ref={el => testimonialsRef.current[2] = el}>
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

// ==========================================
// HomeBody
// ==========================================
function HomeBody() {
  const practiceHeaderRef = useRef(null);
  const practiceCardsRef = useRef([]);
  const outcomesHeaderRef = useRef(null);
  const outcomeCardsRef = useRef([]);
  const partnersHeaderRef = useRef(null);
  const partnerCardsRef = useRef([]);
  const certRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (practiceHeaderRef.current) {
      gsap.fromTo(practiceHeaderRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: practiceHeaderRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
      );
    }
    practiceCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } }
        );
      }
    });

    if (outcomesHeaderRef.current) {
      gsap.fromTo(outcomesHeaderRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: outcomesHeaderRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
      );
    }
    outcomeCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, delay: (index % 3) * 0.1, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } }
        );
      }
    });

    if (partnersHeaderRef.current) {
      gsap.fromTo(partnersHeaderRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: partnersHeaderRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
      );
    }
    partnerCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } }
        );
      }
    });

    certRefs.current.forEach((cert, index) => {
      if (cert) {
        gsap.fromTo(cert,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out", scrollTrigger: { trigger: cert, start: "top 85%", toggleActions: "play none none reverse" } }
        );
      }
    });

    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ctaRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
      );
    }
  }, []);

  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.practice-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  const outcomesData = [
    {
      category: "PUBLIC SECTOR",
      highlight: "500+",
      title: "SAP Objects & KPIs Implemented",
      description: "Complete digital transformation and SAP landscape modernization for EGCB in the Middle East.",
      client: "EGCB",
      link: "#"
    },
    {
      category: "MANUFACTURING",
      highlight: "70%",
      title: "Invoice Automation Revolution",
      description: "Achieved significant invoice automation and finance process streamlining for a leading FMCG manufacturer.",
      client: "FMCG Leader",
      link: "#"
    },
    {
      category: "MANUFACTURING",
      highlight: "$M",
      title: "O2C Process Optimization",
      description: "Delivered millions in savings through strategic Order-to-Cash process optimization for major garment makers.",
      client: "Garments Manufacturer",
      link: "#"
    },
    {
      category: "ENTERTAINMENT",
      highlight: "IoT",
      title: "Integrated AI Ecosystem",
      description: "Seamless ERP, IoT, and AI ecosystem integration for large-scale sports city operations.",
      client: "Sports City",
      link: "#"
    },
    {
      category: "RETAIL",
      highlight: "30%",
      title: "Inventory Optimization Success",
      description: "Implemented advanced analytics to achieve 30% inventory optimization for a major UAE retailer.",
      client: "UAE Retailer",
      link: "#"
    },
    {
      category: "CONSTRUCTION",
      highlight: "25%",
      title: "Faster Project Delivery",
      description: "Streamlined project lifecycle management and digital tool integration for construction giants.",
      client: "Construction Giant",
      link: "#"
    }
  ];

  return (
    <>
      <section className="practices-section">
        <div className="container">
          <div className="practices-header" ref={practiceHeaderRef}>
            <div className="unified-section-label">OUR PRACTICES</div>
            <h2 className="practices-heading">
              One <span className="gradient-text">Engineering Standard.</span>
            </h2>
            <p className="practices-subheading">
              Every practice combines strategic consulting with hands-on engineering - because advice without execution is just a slide deck.
            </p>
          </div>

          <div className="practices-grid" onMouseMove={handleMouseMove}>
            <div className="practice-card" ref={el => practiceCardsRef.current[0] = el}>
              <div className="practice-content">
                <div className="practice-icon-box">
                  <Cpu size={32} strokeWidth={1.5} />
                </div>
                <h3 className="practice-title">AI & Intelligent Systems</h3>
                <p className="practice-desc">
                  From AI strategy to production-grade LLM integration, autonomous agents, and intelligent workflows - we take AI from experiment to enterprise.
                </p>
                <div className="practice-tags">
                  <span>Agentic AI</span>
                  <span>ML Model Development</span>
                  <span>AI Pods</span>
                  <span>Digital Transformation</span>
                  <span>AI Strategies</span>
                  <span>Artificial Intelligence</span>
                  <span>AI Developer</span>
                </div>
              </div>
            </div>

            <div className="practice-card">
              <div className="practice-content">
                <div className="practice-icon-box">
                  <BarChart3 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="practice-title">Business Intelligence & Power BI</h3>
                <p className="practice-desc">
                  Unlock actionable insights with enterprise-grade Power BI dashboards and data storytelling. We transform raw data into strategic assets for real-time decision making.
                </p>
                <div className="practice-tags">
                  <span>Power BI Dashboards</span>
                  <span>DAX Optimization</span>
                  <span>Data Modeling</span>
                  <span>Enterprise Reporting</span>
                  <span>Real-time Analytics</span>
                  <span>ETL Processes</span>
                </div>
              </div>
            </div>

            <div className="practice-card">
              <div className="practice-content">
                <div className="practice-icon-box">
                  <CloudLightning size={32} strokeWidth={1.5} />
                </div>
                <h3 className="practice-title">SAP Solutions & Digital Transformation</h3>
                <p className="practice-desc">
                  From S/4HANA migrations to BTP extensions and custom ABAP development - we modernize your SAP landscape for the AI-driven future.
                </p>
                <div className="practice-tags">
                  <span>S/4HANA Transformation</span>
                  <span>SAP BTP Development</span>
                  <span>Custom ABAP Solutions</span>
                  <span>Fiori UX Modernization</span>
                  <span>SAP AI Integration</span>
                  <span>Migration Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outcomes-section bg-shade-1" style={{ position: 'relative', overflow: 'hidden' }}>
        <ColorBends 
          colors={['#00d2ff', '#00a8fd', '#0072ff']} 
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent={true}
          style={{ position: 'absolute', inset: 0, opacity: 0.4 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="outcomes-header" ref={outcomesHeaderRef}>
            <div className="unified-section-label">OUTCOMES</div>
            <h2 className="outcomes-heading">
              We Measure Success in Business Impact, Not Lines<br />
              <span className="gradient-text">of Code.</span>
            </h2>
          </div>

          <div className="outcomes-grid">
            {outcomesData.map((item, index) => (
              <div className="outcome-card" key={index} ref={el => outcomeCardsRef.current[index] = el}>
                <div className="card-border-glow"></div>
                <div className="card-crosshairs" aria-hidden="true"></div>
                
                <div className="outcome-card-content">
                  <span className="outcome-category">{item.category}</span>
                  <div className="outcome-highlight">{item.highlight}</div>
                  <h3 className="outcome-title">{item.title}</h3>
                  <p className="outcome-description">{item.description}</p>
                </div>

                <div className="outcome-card-footer">
                  <span className="outcome-client">{item.client}</span>
                  <ArrowUpRight className="outcome-arrow" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnerships-section bg-shade-2">
        <div className="container">
          <div className="partnerships-header" ref={partnersHeaderRef}>
            <div className="unified-section-label">PARTNERSHIPS</div>
            <h2 className="partnerships-heading">
              Partnered With the Platforms That Power <span className="gradient-text" style={{ display: 'inline' }}>Modern<br/>Enterprise.</span>
            </h2>
            <p className="partnerships-subheading">
              We don't just use these technologies - we're recognized partners with deep integration<br/>expertise.
            </p>
          </div>

          <div className="partnerships-grid">
            <div className="partner-card" ref={el => partnerCardsRef.current[0] = el}>
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <Cloud size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">AWS</h3>
              <p className="partner-subtitle">CONSULTING PARTNER</p>
              <p className="partner-desc">
                Cloud infrastructure, serverless architectures, and managed services for production-grade deployments at scale.
              </p>
            </div>

            <div className="partner-card" ref={el => partnerCardsRef.current[1] = el}>
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <Triangle size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">Vercel</h3>
              <p className="partner-subtitle">OFFICIAL PARTNER</p>
              <p className="partner-desc">
                Next.js deployment, edge computing, and performance-optimized frontend infrastructure for modern web applications.
              </p>
            </div>

            <div className="partner-card" ref={el => partnerCardsRef.current[2] = el}>
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <CloudLightning size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">Azure</h3>
              <p className="partner-subtitle">GOLD PARTNER</p>
              <p className="partner-desc">
                Enterprise cloud solutions, hybrid infrastructure, and advanced AI services powered by Microsoft's global ecosystem.
              </p>
            </div>

            <div className="partner-card" ref={el => partnerCardsRef.current[3] = el}>
              <ArrowUpRight className="partner-arrow" size={24} />
              <div className="partner-logo">
                <GitBranch size={40} strokeWidth={1} />
              </div>
              <h3 className="partner-title">GitHub</h3>
              <p className="partner-subtitle">TECHNOLOGY PARTNER</p>
              <p className="partner-desc">
                Version control, CI/CD pipelines, code collaboration, and open-source contribution across the developer ecosystem.
              </p>
            </div>
          </div>

          <div className="certifications-row">
            <div className="cert-item" ref={el => certRefs.current[0] = el}>
              <Trophy size={20} className="cert-icon" style={{ color: '#10b981' }} />
              <div className="cert-text">
                <h4>$50M GCC Success</h4>
                <p>Financial Transformation</p>
              </div>
            </div>
            
            <div className="cert-item" ref={el => certRefs.current[1] = el}>
              <Medal size={20} className="cert-icon" style={{ color: '#f97316' }} />
              <div className="cert-text">
                <h4>SAP Partner</h4>
                <p>Excellence - Middle East 2024</p>
              </div>
            </div>

            <div className="cert-item" ref={el => certRefs.current[2] = el}>
              <ShieldCheck size={20} className="cert-icon" style={{ color: '#8b5cf6' }} />
              <div className="cert-text">
                <h4>UAE Central Bank</h4>
                <p>Digital Transformation Partner</p>
              </div>
            </div>

            <div className="cert-item" ref={el => certRefs.current[3] = el}>
              <Award size={20} className="cert-icon" style={{ color: '#06b6d4' }} />
              <div className="cert-text">
                <h4>Microsoft AI</h4>
                <p>Innovation Partner</p>
              </div>
            </div>

            <div className="cert-item" ref={el => certRefs.current[4] = el}>
              <BarChart3 size={20} className="cert-icon" style={{ color: '#3b82f6' }} />
              <div className="cert-text">
                <h4>98% Satisfaction</h4>
                <p>Independently Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyInTime handleMouseMove={handleMouseMove} />

      <section className="final-cta-section bg-shade-2">
        <div className="tech-carousel-container">
          <div className="tech-carousel-track">
            {[1, 2].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                <div className="tech-logo-item">
                  <Database size={18} className="tech-logo-icon" />
                  <span>MERN Stack</span>
                </div>
                <div className="tech-logo-item">
                  <Server size={18} className="tech-logo-icon" />
                  <span>SAP</span>
                </div>
                <div className="tech-logo-item">
                  <Box size={18} className="tech-logo-icon" />
                  <span>Docker</span>
                </div>
                <div className="tech-logo-item">
                  <Cloud size={18} className="tech-logo-icon" />
                  <span>AWS</span>
                </div>
                <div className="tech-logo-item">
                  <CloudLightning size={18} className="tech-logo-icon" />
                  <span>Azure</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="final-cta-box" ref={ctaRef}>
            <div className="card-border-glow"></div>
            <div className="card-crosshairs" aria-hidden="true"></div>
            
            <h2 className="hero-title">
              The <strong>Right Conversation</strong> Can<br/>
              <span className="gradient-text">Save You Six Months.</span>
            </h2>
            <p className="cta-subheading">
              Whether you're navigating AI adoption, modernizing legacy systems, or scaling a product - we start by listening. No pitch deck. No template. A real conversation.
            </p>
            
            <div className="cta-actions">
              <a href="#" className="nav-cta-btn">
                Schedule a Strategy Conversation <span className="arrow">→</span>
              </a>
              <a href="/why-intime" className="explore-link">
                Or Explore Our Thinking <span className="arrow">→</span>
              </a>
            </div>

            <div className="cta-footer-text">
              <p>INNOVATE • COLLABORATE • BUILD</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ==========================================
// Main Home Page Component
// ==========================================
export default function Home() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    if (heroContentRef.current) {
      gsap.fromTo(heroContentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main 
        className="hero-section" 
        ref={heroRef} 
        onMouseMove={handleMouseMove}
      >
        <div className="grid-glow-container">
          <div className="spotlight-beam"></div>
        </div>

        <div className="container">
          <div className="hero-content" ref={heroContentRef}>
            <p className="hero-label">ENGINEERING FOR THE AI ERA</p>
            
            <h1 className="hero-title">
              Turning Complex <strong>Business Challenges</strong> 
              <br />
              <span className="gradient-text">Into Intelligent Enterprise Solutions.</span>
            </h1>

            <p className="hero-description">
              From SAP transformation and business intelligence to AI engineering — we help organizations streamline operations, unlock insights, and scale smarter.
            </p>

            <div className="hero-action">
              <a href="#" className="nav-cta-btn hero-cta">
                Schedule a Strategy Conversation <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Carousel />
      <CompanyOverView />
      <div className="section-separator"></div>
      <OurPerspective />
      <div className="section-separator"></div>
      <HomeBody />
      <Footer />
    </div>
  );
}