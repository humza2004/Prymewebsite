/** 
 * Elegant Dissolve Effect
 * Sophisticated fade with subtle particle dust
 */

import { useRef, type PropsWithChildren, useCallback } from 'react';
import {
  m,
  useAnimate,
} from 'motion/react';

const DURATION_SECONDS = 1.0;

export function ThanosSnapEffect({ children }: PropsWithChildren) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const dissolveTargetRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const createElegantDust = useCallback(() => {
    const dustContainer = dustRef.current;
    if (!dustContainer) return;

    // Create subtle floating dust particles
    for (let i = 0; i < 12; i++) {
      const dust = document.createElement('div');
      dust.className = 'absolute pointer-events-none';
      dust.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(248, 245, 240, 0.6);
        border-radius: 50%;
        opacity: 0;
      `;
      
      dustContainer.appendChild(dust);
      
      // Animate dust with elegant float
      setTimeout(() => {
        dust.style.transition = 'all 2s cubic-bezier(0.25, 0.1, 0.25, 1)';
        dust.style.transform = `translateY(-${Math.random() * 30 + 20}px) translateX(${(Math.random() - 0.5) * 40}px)`;
        dust.style.opacity = '0.4';
        
        setTimeout(() => {
          dust.style.opacity = '0';
          setTimeout(() => {
            if (dust.parentNode) {
              dust.parentNode.removeChild(dust);
            }
          }, 500);
        }, 1000);
      }, Math.random() * 300);
    }
  }, []);

  const handleClick = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const element = dissolveTargetRef.current;
    const overlay = overlayRef.current;
    if (!element || !overlay) return;

    // Create elegant dust effect
    createElegantDust();

    // Elegant dissolve animation
    await Promise.all([
      // Main element fade with subtle scale
      animate(
        element,
        { 
          scale: [1, 1.02, 0.98, 0.95],
          opacity: [1, 0.8, 0.4, 0],
          filter: [
            'blur(0px) brightness(1)',
            'blur(0.5px) brightness(1.05)',
            'blur(1px) brightness(0.9)',
            'blur(2px) brightness(0.7)'
          ]
        },
        { 
          duration: DURATION_SECONDS,
          times: [0, 0.2, 0.6, 1],
          ease: [0.25, 0.1, 0.25, 1]
        }
      ),
      // Elegant overlay fade
      animate(
        overlay,
        {
          opacity: [0, 0.1, 0.2, 0],
          scale: [1, 1.05, 1.1, 1.05]
        },
        {
          duration: DURATION_SECONDS,
          times: [0, 0.3, 0.7, 1],
          ease: [0.25, 0.1, 0.25, 1]
        }
      )
    ]);

    // Auto-scroll to the next section
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Reset after delay
    setTimeout(() => {
      animate(element, { 
        scale: 1, 
        opacity: 1,
        filter: 'blur(0px) brightness(1)'
      }, { duration: 0 });
      animate(overlay, {
        opacity: 0,
        scale: 1
      }, { duration: 0 });
      isAnimating.current = false;
    }, 600);
  };

  return (
    <div ref={scope} className="relative">
      <m.div
        ref={dissolveTargetRef}
        onClick={handleClick}
        className="cursor-pointer relative z-10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </m.div>
      
      {/* Elegant overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(248,245,240,0.3) 0%, rgba(196,130,91,0.1) 50%, transparent 100%)',
          opacity: 0,
          zIndex: 5
        }}
      />
      
      {/* Subtle dust container */}
      <div 
        ref={dustRef}
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
        style={{ zIndex: 15 }}
      />
    </div>
  );
};
