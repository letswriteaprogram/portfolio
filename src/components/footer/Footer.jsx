import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center  text-white bg-black py-4">
      <div className="flex space-x-4">
        <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl hover:text-green-500 transition" />
        </a>
        <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-gray-300 transition" />
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin_username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-blue-600 transition" />
        </a>
        <a href="mailto:your_email@example.com">
          <FaEnvelope className="text-3xl hover:text-red-600 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
