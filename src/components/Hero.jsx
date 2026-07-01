import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaStar, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import gsap from 'gsap';
import GlassCard from './GlassCard';
import heroVideo from '../assets/hero-v3.mp4';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    
    // We keep the scroll-linked transform for the container using Framer Motion
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityScroll = useTransform(scrollY, [0, 300], [1, 0]);
    const scaleScroll = useTransform(scrollY, [0, 300], [1, 0.8]);

    const floatingIcons = [
        { Icon: FaStar, top: '15%', left: '8%' },
        { Icon: FaCode, top: '65%', left: '12%' },
        { Icon: FaLightbulb, top: '25%', right: '10%' },
        { Icon: FaRocket, top: '70%', right: '8%' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

            // Initial states
            gsap.set('.gsap-hero-badge', { opacity: 0, y: 30 });
            gsap.set('.gsap-hero-title', { opacity: 0, y: 40 });
            gsap.set('.gsap-hero-desc', { opacity: 0, y: 30 });
            gsap.set('.gsap-hero-btn', { opacity: 0, y: 20 });
            gsap.set('.gsap-hero-card', { opacity: 0, scale: 0.9, y: 40 });
            gsap.set('.gsap-hero-icon', { opacity: 0, scale: 0 });

            // Timeline Sequence
            tl.to('.gsap-hero-badge', { opacity: 1, y: 0, delay: 0.2 })
              .to('.gsap-hero-title', { opacity: 1, y: 0 }, '-=0.6')
              .to('.gsap-hero-desc', { opacity: 1, y: 0 }, '-=0.6')
              .to('.gsap-hero-btn', { opacity: 1, y: 0, stagger: 0.15 }, '-=0.6')
              .to('.gsap-hero-card', { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.2)' }, '-=0.7')
              .to('.gsap-hero-icon', { 
                  opacity: 0.2, 
                  scale: 1, 
                  stagger: 0.1,
                  ease: 'back.out(1.5)',
                  onComplete: () => {
                      // Staggered floating micro-animations
                      floatingIcons.forEach((_, index) => {
                          gsap.to(`.gsap-icon-${index}`, {
                              y: -20,
                              duration: 3 + index * 0.5,
                              repeat: -1,
                              yoyo: true,
                              ease: 'sine.inOut'
                          });
                      });
                  }
              }, '-=0.8');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            id="home" 
            ref={heroRef}
            className="hero-section" 
            style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                position: 'relative', 
                overflow: 'hidden' 
            }}
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                    opacity: 0.45,
                    pointerEvents: 'none',
                    filter: 'brightness(0.55) contrast(1.1)'
                }}
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Background Decorations */}
            {floatingIcons.map(({ Icon, top, left, right }, index) => (
                <div
                    key={index}
                    className={`gsap-hero-icon gsap-icon-${index}`}
                    style={{
                        position: 'absolute', top, left, right, zIndex: 2,
                        fontSize: '3rem', color: 'var(--primary-color)', opacity: 0
                    }}
                >
                    <Icon />
                </div>
            ))}

            <motion.div
                className="hero-container"
                style={{ 
                    y: y1, 
                    opacity: opacityScroll, 
                    scale: scaleScroll 
                }}
            >
                {/* Text Content */}
                <div className="hero-text">
                    <div
                        className="gsap-hero-badge"
                        style={{
                            fontSize: '1.4rem', color: 'var(--accent-pink)', fontWeight: '700',
                            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem'
                        }}
                    >
                        ✨ Creative Developer
                    </div>

                    <h1 
                        className="gsap-hero-title"
                        style={{ lineHeight: 1.1, marginBottom: '2rem', fontSize: 'var(--h1-size, 4.5rem)', fontWeight: 900 }}
                    >
                        Hi, I'm <br />
                        <span className="gradient-text">Siva K</span>
                    </h1>

                    <p 
                        className="gsap-hero-desc"
                        style={{ fontSize: '1.35rem', color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8, marginBottom: '3rem', maxWidth: '650px' }}
                    >
                        Specializing in 
                        <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}> Python, React, and Machine Learning</span>. 
                        Crafting intelligent and visually stunning user experiences.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }} className="hero-buttons">
                        <Link to="projects" smooth={true} duration={800} className="glow-button gsap-hero-btn"
                            style={{
                                padding: '1.2rem 3rem', background: 'var(--primary-color)', color: '#fff',
                                borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem'
                            }}
                        >
                            View Projects
                        </Link>
                        <Link to="contact" smooth={true} duration={800} className="gsap-hero-btn"
                            style={{
                                padding: '1.2rem 3rem', background: 'transparent', color: 'var(--primary-color)',
                                border: '2px solid var(--primary-color)', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem'
                            }}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Description Visual Content */}
                <div className="hero-visual gsap-hero-card">
                    <GlassCard
                        className="shine-effect"
                        interactive={true}
                        sweepOnScroll={true}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '500px',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Glow effect */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%)',
                            pointerEvents: 'none'
                        }} />
                        
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-pink)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            About Me
                        </h3>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', lineHeight: 1.8, opacity: 0.9, marginBottom: '1.5rem' }}>
                            I'm currently pursuing an <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}>MCA</span> with a solid foundation in Computer Science. I specialize in building responsive front-end applications and have a deep passion for <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}>AI platform development</span>.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-color)', lineHeight: 1.8, opacity: 0.9, marginBottom: '2rem' }}>
                            My expertise spans <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}>DOM manipulation, state management</span>, and <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}>REST API integration</span> to deliver modern UI/UX experiences.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {['Python', 'React', 'Machine Learning', 'UI/UX'].map((tech) => (
                                <span key={tech} style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--accent-pink)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-pink)',
                                    fontWeight: '600',
                                    boxShadow: '0 2px 10px var(--glow-pink)'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;





