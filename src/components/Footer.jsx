import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id="contact" style={{
            padding: '6rem 2rem 3rem',
            background: 'linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%)',
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, var(--primary-color), transparent)',
                    filter: 'blur(100px)',
                    zIndex: 0
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontSize: '3rem',
                        marginBottom: '1.5rem',
                        fontFamily: "'Space Grotesk', serif"
                    }}
                >
                    Let's Build Something <span className="gradient-text">Amazing</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        color: 'var(--text-color)',
                        marginBottom: '3rem',
                        fontSize: '1.3rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        opacity: 0.9
                    }}
                >
                    Ready to bring your ideas to life? Let's collaborate and create something extraordinary together!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <a
                        href="mailto:sivakaruna2003@gmail.com"
                        className="glow-button"
                        style={{
                            padding: '1.5rem 3.5rem',
                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            color: 'var(--bg-color)',
                            borderRadius: '60px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <FaEnvelope /> Get In Touch
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    style={{
                        marginBottom: '3rem',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2.5rem'
                    }}
                >
                    {[
                        { Icon: FaGithub, link: 'https://github.com/siva0806' },
                        { Icon: FaLinkedin, link: 'https://www.linkedin.com/in/siva-k-287075253' }
                    ].map(({ Icon, link }, index) => (
                        <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10, scale: 1.2 }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                            style={{
                                fontSize: '2.5rem',
                                color: 'var(--primary-color)',
                                transition: 'all 0.3s ease'
                            }}
                            className="social-icon"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={{
                        borderTop: '1px solid var(--glass-border)',
                        paddingTop: '2rem',
                        marginTop: '2rem'
                    }}
                >
                    <p style={{
                        color: 'var(--text-color)',
                        opacity: 0.7,
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        flexWrap: 'wrap'
                    }}>
                        <span>Made with</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <FaHeart style={{ color: 'var(--secondary-color)' }} />
                        </motion.span>
                        <span>by Siva © {new Date().getFullYear()}</span>
                    </p>
                </motion.div>

                {/* Back to top button */}
                <Link
                    to="home"
                    smooth={true}
                    duration={1000}
                >
                    <motion.button
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            position: 'absolute',
                            bottom: '3rem',
                            right: '3rem',
                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            border: 'none',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 8px 25px var(--glow-blue)',
                            fontSize: '1.5rem',
                            color: 'var(--bg-color)'
                        }}
                    >
                        <FaArrowUp />
                    </motion.button>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
