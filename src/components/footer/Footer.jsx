import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center  text-white bg-black py-4">
      <div className="flex space-x-4">
        <a
          href="https://wa.me/+9109009833533"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
        >
          <FaWhatsapp className="text-xl sm:text-2xl lg:text-3xl hover:text-green-500 transition" />
        </a>
        <a
          href="https://github.com/letswriteaprogram"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
        >
          <FaGithub className="text-xl sm:text-2xl lg:text-3xl hover:text-gray-300 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-patidar-6170081ba"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
        >
          <FaLinkedin className="text-xl sm:text-2xl lg:text-3xl hover:text-blue-600 transition" />
        </a>
        <a href="mailto:shubhampatidarsp07@gmail.com" className="px-2">
          <FaEnvelope className="text-xl sm:text-2xl lg:text-3xl hover:text-red-600 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

