import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProgressBar = ({ progress }) => {
  const barRef = useRef(null);
  const fillRef = useRef(null);
  const percentRef = useRef(null);
  const displayedProgressRef = useRef(0);
  
  useEffect(() => {
    // Animate the progress bar fill
    gsap.to(fillRef.current, {
      width: `${progress}%`,
      duration: 0.6,
      ease: "power1.out"
    });
    
    // Animate the progress text
    const updateProgressText = () => {
      if (displayedProgressRef.current < progress) {
        displayedProgressRef.current += 1;
        
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.floor(displayedProgressRef.current)}%`;
        }
        
        if (displayedProgressRef.current < progress) {
          requestAnimationFrame(updateProgressText);
        }
      }
    };
    
    requestAnimationFrame(updateProgressText);
    
    // Interactive effects based on progress milestones
    if (progress >= 25 && progress < 30) {
      gsap.to(barRef.current, {
        boxShadow: '0 0 20px rgba(130, 87, 230, 0.7)',
        duration: 0.5
      });
    }
    
    if (progress >= 50 && progress < 55) {
      gsap.to(barRef.current, {
        boxShadow: '0 0 25px rgba(130, 87, 230, 0.8)',
        duration: 0.5
      });
    }
    
    if (progress >= 75 && progress < 80) {
      gsap.to(barRef.current, {
        boxShadow: '0 0 30px rgba(130, 87, 230, 0.9)',
        duration: 0.5
      });
    }
    
    if (progress >= 100) {
      // Celebration animation when complete
      gsap.to(barRef.current, {
        boxShadow: '0 0 40px rgba(130, 87, 230, 1)',
        scale: 1.05,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
        onComplete: () => {
          gsap.to(barRef.current, {
            scale: 1,
            duration: 0.5
          });
        }
      });
    }
    
  }, [progress]);
  
  return (
    <div className="progress-container">
      <div className="progress-bar" ref={barRef}>
        <div className="progress-bar-fill" ref={fillRef}></div>
      </div>
      <div className="progress-percentage" ref={percentRef}>0%</div>
    </div>
  );
};

export default ProgressBar;