
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import hero from './hero.png';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="text-container">
          <h1 className="typewriter-text">
            <Typewriter
              words={[
                '"Crafting websites with precision, purpose, and passion."',
                '"Innovative Solutions for Web Development"',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              delaySpeed={1000}
            />
          </h1>
          <p className="subheading">
            We are a passionate web development startup dedicated to crafting innovative, responsive, and user-focused websites that drive success for businesses of all sizes.
          </p>
          <button className="contact-button">Start Your Journey !</button>
        </div>
        <div className="image-container">
          <img className="hero" src={hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Home;
