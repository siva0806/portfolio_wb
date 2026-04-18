import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaStar, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import heroVideo from '../assets/hero-v3.mp4';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityScroll = useTransform(scrollY, [0, 300], [1, 0]);
    const scaleScroll = useTransform(scrollY, [0, 300], [1, 0.8]);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.15
            } 
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    const floatingIcons = [
        { Icon: FaStar, top: '15%', left: '8%', delay: 0 },
        { Icon: FaCode, top: '65%', left: '12%', delay: 1 },
        { Icon: FaLightbulb, top: '25%', right: '10%', delay: 0.5 },
        { Icon: FaRocket, top: '70%', right: '8%', delay: 1.5 }
    ];

    return (
        <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorations */}
            {floatingIcons.map(({ Icon, top, left, right, delay }, index) => (
                <motion.div
                    key={index}
                    animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, delay }}
                    style={{
                        position: 'absolute', top, left, right, zIndex: 0,
                        fontSize: '3rem', color: 'var(--primary-color)', opacity: 0.2
                    }}
                >
                    <Icon />
                </motion.div>
            ))}

            <motion.div
                className="hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ 
                    y: y1, 
                    opacity: opacityScroll, 
                    scale: scaleScroll 
                }}
            >
                {/* Text Content */}
                <motion.div className="hero-text" variants={itemVariants}>
                    <motion.div
                        style={{
                            fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: '700',
                            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem'
                        }}
                    >
                        ✨ Creative Developer
                    </motion.div>

                    <h1 style={{ lineHeight: 1.1, marginBottom: '2rem', fontSize: 'var(--h1-size, 4.5rem)', fontWeight: 900 }}>
                        Hi, I'm <br />
                        <span className="gradient-text">Siva K</span>
                    </h1>

                    <p style={{ fontSize: '1.35rem', color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8, marginBottom: '3rem', maxWidth: '650px' }}>
                        Specializing in 
                        <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}> Python, React, and Machine Learning</span>. 
                        Crafting intelligent and visually stunning user experiences.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }} className="hero-buttons">
                        <Link to="projects" smooth={true} duration={800} className="glow-button"
                            style={{
                                padding: '1.2rem 3rem', background: 'var(--primary-color)', color: '#fff',
                                borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem'
                            }}
                        >
                            View Projects
                        </Link>
                        <Link to="contact" smooth={true} duration={800}
                            style={{
                                padding: '1.2rem 3rem', background: 'transparent', color: 'var(--primary-color)',
                                border: '2px solid var(--primary-color)', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem'
                            }}
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Video Visual Content */}
                <motion.div 
                    className="hero-visual" 
                    variants={itemVariants}
                >
                    <motion.div
                        className="hero-video-container"
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '24px',
                            // Softer edge feathering
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskComposite: 'source-in',
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                            maskComposite: 'intersect',
                        }}
                    >
                        <video
                            key={heroVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                                filter: 'contrast(1.05) brightness(1.1)',
                            }}
                        >
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent-color)'
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div style={{ width: '2px', height: '50px', background: 'linear-gradient(to bottom, var(--primary-color), transparent)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;




