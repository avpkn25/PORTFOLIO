import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextReveal = ({ text, delay = 0, duration = 1, className = '' }) => {
  const textRef = useRef(null);
  const charRefs = useRef([]);
  
  // Clear references array
  charRefs.current = [];
  
  // Add or update refs function
  const addToCharRefs = (el) => {
    if (el && !charRefs.current.includes(el)) {
      charRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    // Setup initial state
    gsap.set(charRefs.current, { 
      y: 60,
      opacity: 0,
      rotateX: -90
    });
    
    // Create staggered animation
    gsap.to(charRefs.current, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.04,
      duration: duration,
      delay: delay,
      ease: "back.out(1.7)",
    });
  }, [delay, duration, text]);
  
  // Split text into individual characters for animation
  const characters = text.split('').map((char, index) => {
    return (
      <span 
        key={index} 
        ref={addToCharRefs}
        className="text-reveal-char"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    );
  });
  
  return (
    <div className={`text-reveal-container ${className}`} ref={textRef}>
      {characters}
    </div>
  );
};

export default TextReveal;