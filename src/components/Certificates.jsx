import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';

const certificates = [
    {
        id: 1,
        title: 'Front End Development With React js',
        issuer: 'Besant Technologies',
        date: '2024',
        image: cert1,
        color: 'var(--primary-color)'
    },
    {
        id: 2,
        title: 'Python (Model Training, RAG)',
        issuer: 'Advanced AI Training',
        date: '2024',
        image: cert2,
        color: 'var(--accent-color)'
    },
    {
        id: 3,
        title: 'Machine Learning Specialization',
        issuer: 'Tech Academy',
        date: '2024',
        image: cert3,
        color: 'var(--secondary-color)'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" style={{ background: 'linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-color) 100%)' }}>
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="section-title"
                style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center', fontFamily: "'Space Grotesk', serif" }}
            >
                My <span className="gradient-text">Certificates</span>
            </motion.h2>

            <div className="projects-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                gap: '3rem',
                width: '100%',
                maxWidth: '1300px',
                padding: '0 20px'
            }}>
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 80
                        }}
                        className="glass-panel"
                        whileHover={{ y: -15, scale: 1.02 }}
                        style={{
                            overflow: 'hidden',
                            padding: 0, // Image will take full top space
                            display: 'flex',
                            flexDirection: 'column',
                            border: `1px solid ${cert.color}30`
                        }}
                    >
                        {/* Certificate Image Container */}
                        <div style={{ 
                            width: '100%', 
                            height: '240px', 
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img 
                                src={cert.image} 
                                alt={cert.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                            {/* Overlay on Image */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(to bottom, transparent 60%, ${cert.color}40)`,
                            }} />
                            
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0,0,0,0.6)',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                color: cert.color,
                                backdropFilter: 'blur(5px)'
                            }}>
                                <FaAward fontSize="1.2rem" />
                            </div>
                        </div>

                        {/* Content below image */}
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{
                                fontSize: '1.4rem',
                                marginBottom: '0.75rem',
                                color: cert.color,
                                fontWeight: '800'
                            }}>
                                {cert.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-color)',
                                opacity: 0.7,
                                fontSize: '1rem',
                                fontWeight: '600',
                                marginBottom: '1.5rem'
                            }}>
                                {cert.issuer} • {cert.date}
                            </p>
                            
                            <motion.div
                                whileHover={{ x: 5 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent-color)',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                Validated Degree <FaExternalLinkAlt fontSize="0.8rem" />
                            </motion.div>
                        </div>

                        {/* Bottom Glow Line */}
                        <div style={{
                            height: '5px',
                            width: '100%',
                            background: cert.color,
                            boxShadow: `0 0 15px ${cert.color}`
                        }} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
