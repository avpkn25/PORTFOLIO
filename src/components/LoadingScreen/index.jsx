import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import CubeAnimation from './CubeAnimation';
import ProgressBar from './ProgressBar';
import TextReveal from './TextReveal';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const loadingScreenRef = useRef(null);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 400);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (progress === 100) {
      // Add a slight delay before transition animation
      const timeout = setTimeout(() => {
        // Start exit animation
        const tl = gsap.timeline({
          onComplete: () => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }
        });
        
        tl.to(loadingScreenRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut"
        });
        
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [progress, onLoadingComplete]);
  
  if (!isVisible) return null;
  
  return (
    <div className="loading-screen" ref={loadingScreenRef}>
      
      <div className="loading-content">
        <CubeAnimation progress={progress} />
        
        <div className="loading-text-container">
          <TextReveal 
            text="Welcome to My Portfolio" 
            delay={0.8} 
            duration={1.6} 
            className="loading-title"
          />
          
          <TextReveal 
            text="Welcome to My Portfolio Website" 
            delay={1.5} 
            duration={1.2} 
            className="loading-subtitle"
          />
        </div>
        
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default LoadingScreen;