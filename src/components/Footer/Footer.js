import React from "react";
import "./Footer.css";
import Tech1 from "../../Assets/Tech1.png";
import Tech2 from "../../Assets/Tech2.png";
import Tech3 from "../../Assets/Tech3.png";
import Tech4 from "../../Assets/Tech4.png";
import Logo from "../../Assets/Logo.png";
import Icon1 from "../../Assets/Icon1.jpeg";
import Icon2 from "../../Assets/Icon2.jpeg";
import Icon3 from "../../Assets/Icon3.jpeg";
import LinkedIn from "../../Assets/LinkedIn.png";
import Facebook from "../../Assets/Facebook.png";
import Instagram from "../../Assets/Instagram.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="technologies">
                <img src={Tech2} alt="Tech1" className="Tech-image" />
                <img src={Tech3} alt="Tech2" className="Tech-image" />
                <img src={Tech4} alt="Tech3" className="Tech-image" />
                <img src={Tech1} alt="Tech4" className="Tech-image" />
            </div>
            <div className="main-footer">
                <img src={Logo} alt="Logo" className="logoimage" />
            </div>
            <div className="lists">
                <ul>
                    <div className="Icons">
                        <img src={Icon1} alt="Icon1" className="Icon" />
                        <div className="icon-rating">4.5/5 rating on Lorem</div>
                    </div>
                    <div className="Icons">
                        <img src={Icon2} alt="Icon2" className="Icon" />
                        <div className="icon-rating">4.5/5 rating on Lorem</div>
                    </div>
                    <div className="Icons">
                        <img src={Icon3} alt="Icon3" className="Icon" />
                        <div className="icon-rating">4.5/5 rating on Lorem</div>
                    </div>
                </ul>
                <ul>
                    <p>Quick Links</p>
                    <div>Home</div>
                    <div>Skills</div>
                    <div>Education</div>
                    <div>Projects</div>
                    <div>Recommendations</div>
                </ul>
                <ul>
                    <p>Postfolio</p>
                    <div>Frontend Development</div>
                    <div>Backend Development</div>
                    <div>Website Design</div>
                    <div>Machine Learning</div>
                    <div>Problem Solving & DSA</div>
                </ul>
                <ul >
                    <p>Connect</p>
                    <div><img src={LinkedIn} width="100px" height="25px"></img></div>
                    <div><img src={Instagram} width="100px" height="25px"></img></div>
                    <div><img src={Facebook} width="100px" height="25px"></img></div>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
