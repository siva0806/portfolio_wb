import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlassCard = ({
  children,
  className = '',
  style = {},
  onClick = null,
  interactive = true,
  sweepOnScroll = true,
  hoverGlow = true,
  ...props
}) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    const shine = shineRef.current;

    let triggerInstance = null;

    // Viewport-entry glare sweep
    if (sweepOnScroll && shine) {
      triggerInstance = ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            shine,
            { left: '-150%' },
            {
              left: '150%',
              duration: 1.4,
              ease: 'power2.inOut',
            }
          );
        },
        once: true // Trigger only once when entering viewport
      });
    }

    // 3D Tilt interactive effects
    if (interactive && card) {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x coordinate within the element.
        const y = e.clientY - rect.top;  // y coordinate within the element.

        // Calculate rotation angles (-10deg to 10deg max for subtle tilt)
        const tiltX = -((y / rect.height) - 0.5) * 12;
        const tiltY = ((x / rect.width) - 0.5) * 12;

        // Position glare gradient coordinates
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        if (glare) {
          glare.style.setProperty('--mouse-x', `${glareX}%`);
          glare.style.setProperty('--mouse-y', `${glareY}%`);
          gsap.to(glare, { opacity: 1, duration: 0.2 });
        }

        gsap.to(card, {
          rotateX: tiltX,
          rotateY: tiltY,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.3,
        });
      };

      const handleMouseEnter = () => {
        if (glare) {
          gsap.to(glare, { opacity: 1, duration: 0.2 });
        }
      };

      const handleMouseLeave = () => {
        if (glare) {
          gsap.to(glare, { opacity: 0, duration: 0.4 });
        }
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: 'power2.out',
          duration: 0.5,
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
        if (triggerInstance) triggerInstance.kill();
      };
    }

    return () => {
      if (triggerInstance) triggerInstance.kill();
    };
  }, [interactive, sweepOnScroll]);

  return (
    <div 
      ref={containerRef} 
      className={`glass-card-wrapper ${className}`} 
      style={{ ...style }}
      onClick={onClick}
      {...props}
    >
      <div 
        ref={cardRef} 
        className="glass-card-interactive glass-panel"
        style={{ height: '100%', width: '100%', margin: 0, padding: style.padding || '2rem' }}
      >
        {/* Dynamic Interactive Glare */}
        {interactive && <div ref={glareRef} className="glass-card-glare" />}

        {/* Scroll sweep shine ray */}
        {sweepOnScroll && <div ref={shineRef} className="glass-card-shine-sweep" />}

        {/* Card content */}
        <div style={{ position: 'relative', zIndex: 4, height: '100%', width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
