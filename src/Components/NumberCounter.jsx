import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NumberCounter({ end, duration = 2, suffix = "", prefix = "", className = "", style = {} }) {
  const numberRef = useRef(null);

  useEffect(() => {
    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        { innerText: 0 },
        {
          innerText: end,
          duration: duration,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: numberRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onUpdate: function() {
            numberRef.current.innerText = prefix + Math.ceil(this.targets()[0].innerText) + suffix;
          }
        }
      );
    }
  }, [end, duration, prefix, suffix]);

  return (
    <span ref={numberRef} className={className} style={style}>
      {prefix}0{suffix}
    </span>
  );
}
