import React from "react";
import "./Hero.css";  // Import the CSS file
import Graphic from "../../Assets/graphic.jpg";  // Import the graphic from the Assets folder
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content"> {/* Combine both left and right sections */}
        {/* Left part containing the text */}
        <div className="hero-left">
          <h1 className="hero-name">
            I’m Rayan Adlrdard <br /> Front-end Developer
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat
          </p>
          <p className="hero-description">
          placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
          </p>
          
          {/* Hire Me Button */}
          <button className="hire-me-button">
            <span>HIRE ME</span>
            <FaArrowRight className="arrow"/>
          </button>
        </div>

        {/* Right part containing the graphic */}
        <div className="hero-right">
          <img src={Graphic} alt="Graphic" className="hero-graphic" />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="shapes">
        <div className="ellipse ellipse-12"></div>
        <div className="ellipse ellipse-16"></div>
        <div className="ellipse ellipse-13"></div>
        <div className="ellipse ellipse-15"></div>
        <div className="rectangle rectangle-51"></div>
        <div className="polygon polygon-1"></div>
      </div>
    </section>
  );
};

export default Hero;
