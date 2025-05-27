import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css';
import profileLogo from '../assets/profile.jpg'; // Use your image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={profileLogo} alt="Rakesh" className="logo-img" />
        <h1 className="logo-text">Rakesh<span>.</span></h1>
      </div>

      <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div
        className="menu-icon"
        ref={menuIconRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </header>
  );
};

export default Header;
