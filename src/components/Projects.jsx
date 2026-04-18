import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Fruit Freshness Classifier',
        description: 'AI/ML project using CNN models to detect freshness in fruits and vegetables. Developed with Python, TensorFlow, and OpenCV.',
        tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
        gradient: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        link: 'https://github.com/siva0806'
    },
    {
        id: 2,
        title: 'AI Job Matching Platform',
        description: 'System evaluating resume-job compatibility using TF-IDF and cosine similarity. Built with FastAPI backend and React frontend.',
        tags: ['React', 'FastAPI', 'Python', 'ML'],
        gradient: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))',
        link: 'https://github.com/siva0806/job-search-chatbot'
    },
    {
        id: 3,
        title: 'Online Busbooking System',
        description: 'End-to-end web portal for online ticketing and management. Features include order tracking, admin panel, and automated notifications.',
        tags: ['React.js', 'Web App', 'UI/UX'],
        gradient: 'linear-gradient(135deg, var(--secondary-color), var(--accent-2))',
        link: 'https://github.com/siva0806'
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center', fontFamily: "'Space Grotesk', serif" }}
            >
                Featured <span className="gradient-text">Projects</span>
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem',
                width: '100%',
                maxWidth: '1300px',
                padding: '0 20px'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -100 : 100,
                            rotateY: index % 2 === 0 ? -20 : 20
                        }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 80
                        }}
                        className="glass-panel"
                        whileHover={{
                            y: -15,
                            scale: 1.03,
                            rotateZ: index % 2 === 0 ? 1 : -1
                        }}
                        style={{
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Gradient accent line */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: project.gradient,
                            boxShadow: `0 0 16px ${project.gradient}`
                        }} />

                        <h3 style={{
                            fontSize: '1.8rem',
                            marginBottom: '1.2rem',
                            marginTop: '0.5rem',
                            background: project.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: '800'
                        }}>
                            {project.title}
                        </h3>

                        <p style={{ color: 'var(--text-color)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.9 }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {project.tags.map(tag => (
                                <motion.span
                                    key={tag}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    style={{
                                        fontSize: '0.9rem',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '25px',
                                        background: 'var(--glass-bg)',
                                        color: 'var(--primary-color)',
                                        border: '1px solid var(--primary-color)',
                                        fontWeight: '600',
                                        boxShadow: '0 0 5px var(--glass-border)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--accent-color)',
                                fontWeight: '700',
                                fontSize: '1rem',
                                textDecoration: 'none'
                            }}
                        >
                            View Project <FaExternalLinkAlt />
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
