import React from "react";
import "./About.css";
import { FaUsers, FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-us">
      {/* <div className="about-header">
        <p className="about-subheading">
        Welcome to <span className="highlight">Soli Connects</span> – Your Partner for Success!        </p>
      </div> */}

      <div className="about-content">
        {/* Container Row 1 */}
        <div className="about-row">
          <div className="about-card">
            <div className="card-icon">
              <FaUsers size={40} />
            </div>
            <h2 className="card-heading">Who We Are</h2>
            <p className="card-text">
            We are a passionate team of dedicated professionals committed to fostering meaningful connections, driving innovation, empowering growth, and delivering transformative success for individuals and businesses in today’s dynamic and ever-evolving world.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FaBullseye size={40} />
            </div>
            <h2 className="card-heading">Our Mission</h2>
            <p className="card-text">
            At Soli Connects, our mission is to unlock the untapped potential in every connection by fostering meaningful collaborations, delivering innovative and high-impact solutions, and empowering individuals and organizations to inspire progress, drive measurable success, and create lasting change.            </p>
          </div>
        </div>

        {/* Container Row 2 */}
        <div className="about-row">
            <div className="about-card">
                <div className="card-icon">
                <FaLightbulb size={40} />
                </div>
                <h2 className="card-heading">What We Do</h2>
                <p className="card-text">
                At the heart of our work lies a commitment to innovation, collaboration, and impact. We offer solutions designed to streamline operations, foster meaningful connections, and drive growth. Through advanced technology, strategic insights, and a focus on building stronger communities.
                </p>
            </div>

            <div className="about-card">
                <div className="card-icon">
                    <FaHandshake size={40} />
                </div>
                <h2 className="card-heading">Why Choose Us?</h2>
                <p className="card-text">
                Choosing Soli Connects means trusting a team focused on your vision, with proven expertise and a commitment to delivering impactful results. We prioritize your goals, fostering sustainable growth and ensuring long-term success together.                </p>
                </div>
            </div>
        </div>

      {/* Call-to-Action Button */}
      <div className="cta">
        <button className="cta-button">Join Us Today!</button>
      </div>
    </div>
  );
};

export default About;
