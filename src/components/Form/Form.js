import React, { useState } from "react";
import "./Form.css";
import "../Contact/Contact.css";
import Vector1 from "../../Assets/Vector1.png";
import Vector2 from "../../Assets/Vector2.png";
import Vector3 from "../../Assets/Vector3.png";

const Form = () => {
  // State to store form input values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div className="form-contact-container">
      {/* Form Section */}
      <div className="form-section">
        <h2 className="form-title">Leave me your info</h2>
        <form className="form-field-group" onSubmit={handleSendMessage}>
          <div className="form-field">
            <label className="field-label">Your Full Name (Required)</label>
            <input
              type="text"
              className="input-box"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Your Email (Required)</label>
            <input
              type="email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Subject</label>
            <input
              type="text"
              className="input-box"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Your Message</label>
            <textarea
              className="input-box message-box"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="send-message-button">
            <span className="button-text">Send Message</span>
          </button>
        </form>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2 className="contact-title">Contact Information</h2>

        {/* Location Section */}
        <div className="contact-box location-box">
          <div className="ellipse-icon">
            <img src={Vector1}></img>
          </div>
          <div className="location-details">
            <div className="contact-detail">
              <span className="contact-label">Country:</span>
              <span className="contact-info">Bangladesh</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">City:</span>
              <span className="contact-info">Dhaka</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Street:</span>
              <span className="contact-info">35 Vhatara, Badda</span>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="contact-box email-box">
          <div className="ellipse-icon">
          <img src={Vector2}></img>
          </div>
          <div className="email-details">
            <div className="contact-detail">
              <span className="contact-label">Email:</span>
              <span className="contact-info">youremail@gmail.com</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Skype:</span>
              <span className="contact-info">@yourusername</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Telegram:</span>
              <span className="contact-info">@yourusername</span>
            </div>
          </div>
        </div>

        {/* Phone Section */}
        <div className="contact-box phone-box">
          <div className="ellipse-icon">
          <img src={Vector3}></img>
          </div>
          <div className="phone-details">
            <div className="contact-detail">
              <span className="contact-label">Support services:</span>
              <span className="contact-info">15369</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Office:</span>
              <span className="contact-info">+58 (021) 356 587 235</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Personal:</span>
              <span className="contact-info">+58 (021) 356 587 235</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
