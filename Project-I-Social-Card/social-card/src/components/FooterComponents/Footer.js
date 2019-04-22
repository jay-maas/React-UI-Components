import React from 'react';
import './Footer.css';

const clickButton = function(e) {
  e.preventDefault();
  alert("This Function is not fully supported...Yet")
}

const Footer = () => {
    return (
      <div className="footer">
        <img onClick={clickButton} className="click" src="assets/message.png" alt="footer" />
        <img onClick={clickButton} className="click" src="assets/refresh.png" alt="footer" />
        <img onClick={clickButton} className="click" src="assets/heart.png" alt="footer" />
        <img onClick={clickButton} className="click" src="assets/mail.png" alt="footer" />
      </div>
    );
  };
  
  export default Footer;