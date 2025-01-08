import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

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
        <div className="navbar-left">
        <span className="navbar-logo-soli">Soli</span>
        <span className="navbar-logo-connects">c o n n e c t s</span> 
        </div>
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
        {/* <h1>Soli connects!</h1>
        <br></br>
        <p>Welcome to our website!</p> */}
        <Home/>
      </section>

      <section id="about" className="section about">
        <About/>
        {/* <h1>About Us</h1>
        <p>We are a team of passionate developers.</p>
        <img src={soliconnectslogo1} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt=''>
        </img> */}
      </section>

      <section id="services" className="section services">
        {/* <<p>We offer a variety of services to meet your needs.</p> */}
        {/* <h1>Services</h1> */}
        <Services/>
      </section>

      <section id="contact" className="section contact">
        <Contact/>
        {/* <p>Get in touch with us!</p> */}
      </section>
    </div>
  );
}

export default App