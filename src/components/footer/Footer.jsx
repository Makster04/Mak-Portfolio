import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

// Component Definition

const Footer = () => {
  return (
    <footer 
      className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-8 footer"
      style={{
        background: "linear-gradient(135deg, #0f3328 0%, #061a12 100%)",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      <span className="text-sm text-gray-300 sm:text-center footer-left-text">
        Developed by Mak Trnka
      </span>
      
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-300 sm:mt-0 footer-contact">
        <li>
          <a href="https://github.com/Makster04" className="mr-4 hover:underline md:mr-6">
            <BsGithub style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mak-trnka/" className="mr-4 hover:underline md:mr-6">
            <BsLinkedin style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mt_b0sniak/" className="mr-4 hover:underline md:mr-6">
            <BsInstagram style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/mt_b0sniak/" className="mr-4 hover:underline md:mr-6">
            <SiLeetcode style={{ color: '#87CEEB', width: "200%", height: "auto" }} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

// Export Component

export default Footer;