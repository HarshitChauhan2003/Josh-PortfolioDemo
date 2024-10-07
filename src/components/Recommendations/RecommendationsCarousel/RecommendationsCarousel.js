import React from "react";
import Slider from "react-slick";
import './RecommendationsCarousel.css';
import DP1 from "../../../Assets/DP1.jpeg";
import DP2 from "../../../Assets/DP2.jpeg";
import P3 from "../../../Assets/P3.jpeg";

const RecommendationsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
    focusOnSelect: false,
    pauseOnHover: false,
    swipeToSlide: true,
    appendDots: dots => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className={`dot ${i === 2 ? 'highlighted-dot' : ''}`}></div>
    )
  };

  const recommendations = [
    {
      title: "Amazing work!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      profile: "Tiana Philips",
      occupation: "Photographer",
      rating: 5,
      image: DP1,
    },
    {
      title: "Incredible!",
      text: "Suspendisse at erat lectus. Nulla facilisi. Praesent malesuada urna lorem, eget suscipit ipsum commodo sit amet.",
      profile: "John Doe",
      occupation: "Designer",
      rating: 4,
      image: DP2,
    },
    {
      title: "Top-notch quality!",
      text: "Vivamus pharetra scelerisque lectus, a hendrerit elit. Nam fringilla elit vel sapien lobortis, vitae tincidunt.",
      profile: "Jane Smith",
      occupation: "Developer",
      rating: 5,
      image: P3,
    },
    {
      title: "Outstanding service!",
      text: "Donec sit amet nisi nec orci dignissim tristique non non eros. Nullam varius congue massa, nec condimentum dolor.",
      profile: "Mark Benson",
      occupation: "Engineer",
      rating: 5,
      image: DP2,
    },
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Slider {...settings}>
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <div className="rating">
                {Array(rec.rating).fill().map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <h4>{rec.title}</h4>
              <p>{rec.text}</p>
              <div className="profile-section">
                <div 
                  className="profile-pic"
                  style={{ backgroundImage: `url(${rec.image})` }}
                ></div>
                <div>
                  <h4>{rec.profile}</h4>
                  <p>{rec.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendationsCarousel;
