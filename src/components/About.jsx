import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import GlassCard from './GlassCard';

const About = () => {
    const skills = [
        { icon: <FaCode />, label: 'Python & JS', color: 'var(--primary-color)' },
        { icon: <FaRocket />, label: 'React JS', color: 'var(--accent-color)' },
        { icon: <FaLightbulb />, label: 'AI & ML', color: 'var(--secondary-color)' },
        { icon: <FaPalette />, label: 'Web Design', color: 'var(--accent-2)' }
    ];

    return (
        <section id="about" style={{ background: 'linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%)' }}>
            <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5rem', maxWidth: '1300px', width: '100%', padding: '0 20px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    style={{ flex: '1 1 500px' }}
                    className="about-content"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="section-title"
                        style={{ fontSize: '3.5rem', marginBottom: '2rem', fontFamily: "'Space Grotesk', serif" }}
                    >
                        About <span className="gradient-text">Me</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ fontSize: '1.25rem', lineHeight: '2', color: 'var(--text-color)', marginBottom: '1.5rem', opacity: 0.9 }}
                    >
                        I have completed my <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}>MCA</span> with a solid academic background in 
                        <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}> Computer Science</span>. 
                        Proficient in core front-end concepts and hands-on experience in building 
                        <span style={{ color: 'var(--accent-pink)', fontWeight: 'bold' }}> responsive applications</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ fontSize: '1.25rem', lineHeight: '2', color: 'var(--text-color)', marginBottom: '2.5rem', opacity: 0.9 }}
                    >
                        Experienced in <span style={{ color: 'var(--accent-pink)' }}>DOM manipulation</span>, 
                        <span style={{ color: 'var(--accent-pink)' }}> state management</span>, and 
                        <span style={{ color: 'var(--accent-pink)' }}> REST API integration</span>. 
                        Passionate about AI platform development and modern UI/UX.
                    </motion.p>

                    {/* Skills Icons with enhanced animations */}
                    <div className="about-skills" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.label}
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6 + index * 0.1,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{
                                    y: -15,
                                    scale: 1.15,
                                    rotate: 5
                                }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    color: skill.color,
                                    background: `${skill.color}20`,
                                    padding: '1.5rem',
                                    borderRadius: '50%',
                                    border: `2px solid ${skill.color}`,
                                    boxShadow: `0 0 15px ${skill.color}20`,
                                    transition: 'all 0.2s ease'
                                }}>
                                    {skill.icon}
                                </div>
                                <span style={{ fontSize: '1rem', color: skill.color, fontWeight: '700' }}>
                                    {skill.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    style={{ flex: '1 1 500px' }}
                    className="about-content"
                >
                    <GlassCard className="shine-effect" style={{ padding: '3.5rem 2.5rem', position: 'relative' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: "'Space Grotesk', serif" }}>Education</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { title: 'MCA', school: 'Dhanalakshmi Srinivasan Engineering College', score: 'SGPA: 7.5', color: 'var(--primary-color)' },
                                { title: 'B.Sc. Computer Science', school: "St Joseph's College, Trichy", score: 'CGPA: 7.4', color: 'var(--accent-color)' }
                            ].map((edu, index) => (
                                <motion.div
                                    key={edu.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.2 }}
                                    style={{ borderLeft: `4px solid ${edu.color}`, paddingLeft: '1.5rem' }}
                                >
                                    <h4 style={{ color: edu.color, fontSize: '1.4rem', fontWeight: '800' }}>{edu.title}</h4>
                                    <p style={{ color: 'var(--text-color)', opacity: 0.9, fontWeight: '600' }}>{edu.school}</p>
                                    <p style={{ color: 'var(--text-color)', opacity: 0.7, fontSize: '0.9rem' }}>{edu.score}</p>
                                </motion.div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
