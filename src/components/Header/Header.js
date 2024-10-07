// Header.js
import "./Header.css";
import LogoImage from "../../Assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">
          <img src={LogoImage} alt="Logo" />
        </label>
        <ul>
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => document.getElementById("check").checked = false}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/skillspage" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => document.getElementById("check").checked = false}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/education" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => document.getElementById("check").checked = false}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => document.getElementById("check").checked = false}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/recommendation" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => document.getElementById("check").checked = false}
            >
              Recommendation
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => document.getElementById("check").checked = false}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
