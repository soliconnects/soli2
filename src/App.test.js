import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links li');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navbar links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li>
          <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">About Us</a></li>
          <li className={activeSection === 'services' ? 'active' : ''}><a href="#services">Services</a></li>
          <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <section id="home" className="section home">
        <h1>Home</h1>
        <p>Welcome to our website!</p>
      </section>

      <section id="about" className="section about">
        <h1>About Us</h1>
        <p>We are a team of passionate developers.</p>
      </section>

      <section id="services" className="section services">
        <h1>Services</h1>
        <p>We offer a variety of services to meet your needs.</p>
      </section>

      <section id="contact" className="section contact">
        <h1>Contact Us</h1>
        <p>Get in touch with us!</p>
      </section>
    </div>
  );
}

export default App;
