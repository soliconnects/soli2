import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSendEmail = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const mailtoLink = `mailto:soliconnectscbe@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      {/* Left Side */}
      <div className="contact-left">
        <div className="contact-section">
          <h1 className="contact-title">
            <img
              src="https://i.ibb.co/M8DSCKj/phone-call.png"
              alt="Phone Icon"
              className="icon"
            />
            Let's Talk
          </h1>
          <p className="contact-info">9943207021</p>
        </div>

        <div className="contact-section">
          <h1 className="contact-title">
            <img
              src="https://i.ibb.co/3TLvM7T/circle.png"
              alt="Location Icon"
              className="icon"
            />
            Address
          </h1>
          <p className="contact-info">
            4/207, Thangavel Nagar, Kovai Road, Karur - 639008
          </p>
        </div>

        <div className="contact-section">
          <h1 className="contact-title">
            <img
              src="https://i.ibb.co/KL0hq3K/image.png"
              alt="Email Icon"
              className="icon"
            />
            General Support
          </h1>
          <p className="contact-info">soliconnectscbe@gmail.com</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <h2 className="form-title">Message Us</h2>
        <form onSubmit={handleSendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
