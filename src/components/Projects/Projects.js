import React from "react";
import "./Project.css";
import Icon1 from "../../Assets/Project1.jpeg";
import Icon2 from "../../Assets/Project2.jpeg";
import Icon3 from "../../Assets/Project3.jpeg";
import Icon4 from "../../Assets/Project4.jpeg";
import Icon5 from "../../Assets/Project5.jpeg";

const ProjectCard = ({ image, title, description, skills }) => {
    return (
        <div className="project-card">
            <div className="project-image" style={{ backgroundImage: `url(${image})` }} />
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-skills">
                    {skills.map((skill, index) => (
                        <div className="chip" key={index}>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="projects-section">
            {/* Description Section */}
            <div className="description-section">
                <h2 className="projects-heading">My Projects</h2>
                <p className="projects-description">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Lorem ipsum.
                </p>
            </div>

            <div className="projects-row">
                <ProjectCard
                    image={Icon1}
                    title="How to make Flyer Design"
                    description="Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum..."
                    skills={["Typescript", "ReactJs", "NextJs","CSS","HTML","MongoDB"]}
                />
                <ProjectCard
                    image={Icon2}
                    title="Portfolio Website"
                    description="A personal portfolio website built with React."
                    skills={["Typescript", "ReactJs", "NextJs","CSS"    ]}
                />
                <ProjectCard
                    image={Icon3}
                    title="E-commerce Site"
                    description="An e-commerce website with user authentication."
                    skills={["Typescript", "ReactJs", "NextJs","CSS","HTML","MongoDB"]}
                />
            </div>
            <div className="projects-row">
                <ProjectCard
                    image={Icon4}
                    title="Weather App"
                    description="A weather forecasting app with live updates."
                    skills={["Typescript", "ReactJs", "NextJs","CSS","HTML","MongoDB"]}
                />
                <ProjectCard
                    image={Icon1}
                    title="Chat Application"
                    description="A real-time chat application using WebSocket."
                    skills={["Typescript", "ReactJs", "NextJs","CSS","HTML","MongoDB"]}
                />
                <ProjectCard
                    image={Icon5}
                    title="Blog Website"
                    description="A blog site with dynamic content using React."
                    skills={["Typescript", "ReactJs", "NextJs","CSS","HTML","MongoDB"]}
                />
            </div>
        </div>
    );
};

export default Projects;
