import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

// Component Definition

const Footer = () => {
  return (
<footer className="p-4 bg-blue-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-8 dark:bg-gray-800 footer">
      


      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text">
        Developed by Mak Trnka
      </span>
      


      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 footer-contact">
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

