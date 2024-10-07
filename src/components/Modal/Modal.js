import React, { useState } from 'react';
import './Modal.css'; // Ensure this CSS file is included

const AddSkillModal = ({ isOpen, onClose, onAddSkill }) => {
  // State to manage the domain and skills
  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState([
    { skillName: '', proficiency: '' },
    { skillName: '', proficiency: '' },
    { skillName: '', proficiency: '' },
    { skillName: '', proficiency: '' },
    { skillName: '', proficiency: '' },
  ]);

  // If the modal is not open, return null to prevent rendering
  if (!isOpen) return null;

  // Handle input change for skills
  const handleSkillChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  // Handle form submission
  const handleAddSkills = (e) => {
    e.preventDefault();
    
    // Filter out empty skills
    const validSkills = skills.filter(skill => skill.skillName && skill.proficiency);
    
    if (domain && validSkills.length > 0) {
      // Call the onAddSkill function passed as a prop
      onAddSkill(domain, validSkills);
      // Reset the form
      setDomain('');
      setSkills([
        { skillName: '', proficiency: '' },
        { skillName: '', proficiency: '' },
        { skillName: '', proficiency: '' },
        { skillName: '', proficiency: '' },
        { skillName: '', proficiency: '' },
      ]);
      onClose(); // Close the modal after adding
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="modal-overlay"> {/* This is the overlay for the modal */}
      <div className="modal-container">
        <h2 className="modal-title">Add New Skill</h2>
        
        {/* Domain Section */}
        <div className="domain-section">
          <div className="domain-title">Domain</div>
          <div className="domain-input-container">
            <input 
              type="text" 
              placeholder="Front End Developer" 
              className="domain-input" 
              value={domain} 
              onChange={(e) => setDomain(e.target.value)} 
            />
          </div>
        </div>

        {/* Skills Input Section */}
        <div className="inputs-section">
          <div className="skills-start">Skills</div>
          {skills.map((skill, index) => (
            <div className="input-group" key={index}>
              <div className="input-skill-container"> 
                <input 
                  type="text" 
                  placeholder="Skill" 
                  name="skillName" 
                  className="skill-input" 
                  value={skill.skillName} 
                  onChange={(e) => handleSkillChange(index, e)} 
                />
              </div>
              <div className="input-proficiency-container">
                <input 
                  type="text" 
                  name="proficiency" 
                  placeholder="Proficiency(%)" 
                  className="proficiency-input" 
                  value={skill.proficiency} 
                  onChange={(e) => handleSkillChange(index, e)} 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="buttons">
          {/* Add Skill Button */}
          <button className="add-skill-button" onClick={handleAddSkills}>
            ADD SKILL
          </button>
          {/* CANCEL button */}
          <button className="cancel-button" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;


