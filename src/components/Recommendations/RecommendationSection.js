// RecommendationsSection.js
import React from "react";
import RecommendationsCarousel from "../Recommendations/RecommendationsCarousel/RecommendationsCarousel";
import RecommendationsHeader from "../Recommendations/RecommendationsHeader/RecommendationsHeader";
import './RecommendationsSection.css';

const RecommendationsSection = () => {
  return (
    <div className="recommendations-section">
      <RecommendationsHeader />
      <RecommendationsCarousel />
    </div>
  );
};

export default RecommendationsSection;