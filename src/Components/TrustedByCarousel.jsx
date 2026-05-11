import React from 'react';
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

import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  brand1, brand2, brand3, brand4, brand5, 
  brand6, brand7, brand8, brand9, brand10, 
  brand11, brand12, brand13, brand14, brand15
];

export default function Carousel() {
  const trackRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
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

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="brand-carousel-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container trusted-header-container">
        <div className="trusted-header-layout">
          
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
            {/* Render twice for a seamless infinite loop */}
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