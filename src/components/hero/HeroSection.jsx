import React from "react";
import Wrapper from "../Wrapper";
import code from "../../assets/code.png";
import shubham from "../../assets/shubham.pdf";
import { RiContactsFill } from "react-icons/ri";
import { FaCircleDown } from "react-icons/fa6";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  return (
    <section id="About" className="py-16 w-full">
      <Wrapper className="mt-[10vh] h-full flex flex-col sm:flex-row">
        {/* Left Section */}
        <section className="flex flex-1 flex-col justify-center items-center">
          <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Hello,
              <br /> This is Shubham
            </h1>
            <p className="max-w-80 text-md sm:text-lg lg:text-xl my-6">
              I'm a professional Frontend Developer with a passion for creating
              interactive and user-friendly web applications.
            </p>
            <div className="flex gap-x-4 flex-wrap">
              <a href="#Contact">
                <button className="border-2 border-black rounded-full px-2 py-1 lg:px-5 lg:py-3 font-bold my-2 hover:scale-105 flex items-center">
                  Contact me <RiContactsFill className="ml-2" />
                </button>
              </a>
              <a href={shubham} download>
                <button className="border-2 bg-black text-white rounded-full px-2 py-1 lg:px-5 lg:py-3 font-bold my-2 hover:scale-105 flex items-center">
                  Get Resume <FaCircleDown className="ml-2" />
                </button>
              </a>
            </div>
            <div className="flex space-x-4 py-4">
              <a
                href="https://wa.me/your_whatsapp_number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-3xl hover:text-green-500 transition" />
              </a>
              <a
                href="https://github.com/your_github_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl hover:text-gray-300 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/your_linkedin_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl hover:text-blue-600 transition" />
              </a>
              <a href="mailto:your_email@example.com">
                <FaEnvelope className="text-3xl hover:text-red-600 transition" />
              </a>
            </div>
          </div>
        </section>
        {/* Right Section */}
        <div className="flex flex-1 justify-center items-center">
          <img
            className="min-w-60 sm:min-w-80"
            src={code}
            alt="Coding illustration"
          />
        </div>
      </Wrapper>
    </section>
  );
}

export default HeroSection;
