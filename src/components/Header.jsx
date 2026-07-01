import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={scrolled ? 'scrolled header-container' : 'header-container'}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'var(--bg-color)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        padding: scrolled ? '1rem 3rem' : '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        boxShadow: scrolled ? 'var(--nav-shadow), 0 0 10px var(--glow-cyan)' : 'none',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="logo"
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: 'pointer'
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaCode style={{ color: 'var(--primary-color)', filter: 'drop-shadow(0 0 10px var(--primary-color))' }} />
        </motion.div>
        <span className="gradient-text" style={{ fontFamily: "'Space Grotesk', serif" }}>Siva K</span>
      </motion.div>

      <nav>
        <ul className="nav-list">
          {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                style={{
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                className="nav-link"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
