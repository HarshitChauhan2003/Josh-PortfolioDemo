import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Information</h2>

      {/* Location Section */}
      <div className="contact-box location-box">
        <div className="ellipse-icon">
          <div className="location-icon"></div>
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
          <div className="email-icon"></div>
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
          <div className="phone-icon"></div>
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
  );
};

export default Contact;
