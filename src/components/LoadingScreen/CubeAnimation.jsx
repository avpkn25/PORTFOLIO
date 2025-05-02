import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CubeAnimation = ({ progress }) => {
  const cubeRef = useRef(null);
  const facesRef = useRef([]);
  
  // Clear all previous refs
  facesRef.current = [];
  
  // Add or update refs function
  const addToFacesRef = (el) => {
    if (el && !facesRef.current.includes(el)) {
      facesRef.current.push(el);
    }
  };
  
  useEffect(() => {
    // Initial animation setup
    gsap.set(facesRef.current, {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    });
    
    // Setup event listener for mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate relative position from center (values between -1 and 1)
      const relativeX = (clientX - centerX) / centerX;
      const relativeY = (clientY - centerY) / centerY;
      
      // Apply rotation based on mouse position
      gsap.to(cubeRef.current, {
        rotateY: relativeX * 15,
        rotateX: -relativeY * 15,
        duration: 0.5,
        ease: "power1.out"
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Effect for progress-based animations
  useEffect(() => {
    if (progress >= 25) {
      gsap.to(facesRef.current[0], { // front face
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    }
    
    if (progress >= 50) {
      gsap.to(facesRef.current[1], { // top face
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
      gsap.to(facesRef.current[2], { // right face
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    }
    
    if (progress >= 75) {
      gsap.to(facesRef.current[3], { // bottom face
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
      gsap.to(facesRef.current[4], { // left face
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    }
    
    if (progress >= 100) {
      gsap.to(facesRef.current[5], { // back face
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
      
      // Unfold animation when loading completes
      gsap.to(cubeRef.current, {
        rotateX: 360,
        rotateY: 360,
        scale: 1.5,
        duration: 1.5,
        ease: "power3.inOut"
      });
    }
  }, [progress]);
  
  return (
    <div className="cube-container">
      <div className="cube" ref={cubeRef}>
        <div className="cube-face front" ref={addToFacesRef}></div>
        <div className="cube-face top" ref={addToFacesRef}></div>
        <div className="cube-face right" ref={addToFacesRef}></div>
        <div className="cube-face bottom" ref={addToFacesRef}></div>
        <div className="cube-face left" ref={addToFacesRef}></div>
        <div className="cube-face back" ref={addToFacesRef}></div>
      </div>
    </div>
  );
};

export default CubeAnimation;