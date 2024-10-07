// SkillsSection.js
import React, { useState } from 'react';
import AddSkillModal from '../Modal/Modal';
import './SkillsSection.css';

const SkillCard = ({ skillTitle, skills }) => {
  return (
    <div className="skill-card">
      <h4 className="skill-card-title">{skillTitle}</h4>
      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-name">{skill.name}</div>
          <span className="skill-percentage">{skill.percentage}%</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SkillsSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [skillCardsData, setSkillCardsData] = useState([
    {
      skillTitle: 'Front End Development',
      skills: [
        { name: 'Html', percentage: 90 },
        { name: 'Css', percentage: 85 },
        { name: 'Js', percentage: 80 },
        { name: 'PHP', percentage: 90 },
        { name: 'WordPress', percentage: 85 },
      ],
    },
    {
      skillTitle: 'Languages',
      skills: [
        { name: 'Hindi', percentage: 75 },
        { name: 'English', percentage: 70 },
      ],
    },
    {
      skillTitle: 'Back End Development',
      skills: [
        { name: 'NodeJS', percentage: 85 },
        { name: 'SSR', percentage: 80 },
      ],
    },
    {
      skillTitle: 'Front End Development',
      skills: [
        { name: 'Html', percentage: 90 },
        { name: 'Css', percentage: 85 },
        { name: 'Js', percentage: 80 },
        { name: 'PHP', percentage: 90 },
        { name: 'WordPress', percentage: 85 },
      ],
    },
    {
      skillTitle: 'Languages',
      skills: [
        { name: 'Hindi', percentage: 75 },
        { name: 'English', percentage: 70 },
      ],
    },
    {
      skillTitle: 'Back End Development',
      skills: [
        { name: 'NodeJS', percentage: 85 },
        { name: 'SSR', percentage: 80 },
      ],
    },
  ]);

  const handleAddSkillClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddSkill = ({ name, percentage, category }) => {
    setSkillCardsData((prevData) => {
      const updatedData = [...prevData];
      const targetCard = updatedData.find(card => card.skillTitle === category);

      if (targetCard) {
        targetCard.skills.push({ name, percentage });
      } else {
        // If the category does not exist, create a new one
        updatedData.push({
          skillTitle: category,
          skills: [{ name, percentage }],
        });
      }
      return updatedData;
    });
  };

  return (
    <div className="skills-page">
      <div className="skills-section">
        <h2 className="skills-heading">Skills & Languages</h2>
        <p className="skills-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Lorem ipsum.
        </p>
        <div className="skills-container">
          {skillCardsData.map((cardData, index) => (
            <SkillCard
              key={index}
              skillTitle={cardData.skillTitle}
              skills={cardData.skills}
            />
          ))}
        </div>
      </div>
      <button onClick={handleAddSkillClick} className="add-skill-button">
        ADD SKILL
      </button>
      <AddSkillModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onAddSkill={handleAddSkill} 
      />
    </div>
  );
};

export default SkillsSection;
