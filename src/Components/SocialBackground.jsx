import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Network, Rss, MessageSquare, Video, Share2, Users } from 'lucide-react';
import gsap from 'gsap';

export default function SocialBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const bubbles = containerRef.current.children;
    
    // Create random floating animations for each bubble
    Array.from(bubbles).forEach((bubble) => {
      // Add initial random positions via GSAP to scatter them slightly
      gsap.set(bubble, {
        x: gsap.utils.random(-15, 15),
        y: gsap.utils.random(-15, 15),
        rotation: gsap.utils.random(-20, 20)
      });

      // Animate floating with a constrained radius
      gsap.to(bubble, {
        x: `+=${gsap.utils.random(-30, 30)}`,
        y: `+=${gsap.utils.random(-30, 30)}`,
        rotation: `+=${gsap.utils.random(-45, 45)}`,
        duration: gsap.utils.random(15, 25),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(-20, 0),
      });
    });
  }, []);

  return (
    <div className="social-bg-container" ref={containerRef}>
      <div className="floating-social-bubble bubble-1"><Mail size={24} /></div>
      <div className="floating-social-bubble bubble-2"><Phone size={24} /></div>
      <div className="floating-social-bubble bubble-3"><Network size={28} /></div>
      <div className="floating-social-bubble bubble-4"><Rss size={24} /></div>
      <div className="floating-social-bubble bubble-5"><MessageSquare size={24} /></div>
      <div className="floating-social-bubble bubble-6"><Video size={28} /></div>
      <div className="floating-social-bubble bubble-7"><Share2 size={24} /></div>
      <div className="floating-social-bubble bubble-8"><Users size={28} /></div>
    </div>
  );
}
