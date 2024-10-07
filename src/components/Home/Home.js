import React from "react";
import Hero from "../Hero/Hero";
import Project from "../Projects/Projects";
import Recommendations from "../Recommendations/RecommendationSection";
import Form from "../Form/Form";
import Footer from "../Footer/Footer"; // Make sure the path is correct

const Home = () => {
    return (
        <div className="">
            
            <Hero />
            <Project />
            <Recommendations />
            <Form />
            <Footer />
        </div>
    );
};

export default Home;
