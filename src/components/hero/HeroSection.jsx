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
            I'm a Frontend Developer specializing in React, focused on building interactive web applications. I'm available for freelance and remote opportunities
            </p>
            <div className="flex gap-x-4 flex-wrap">
              <div className="flex space-x-4 py-4">
                <a
                  href="https://wa.me/+9109009833533"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl hover:text-green-500 transition" />
                </a>
                <a
                  href="https://github.com/letswriteaprogram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl sm:text-3xl lg:text-4xl hover:text-gray-300 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-patidar-6170081ba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl sm:text-3xl lg:text-4xl hover:text-blue-600 transition" />
                </a>
                <a href="mailto:shubhampatidarsp07@gmail.com">
                  <FaEnvelope className="text-2xl sm:text-3xl lg:text-4xl hover:text-red-600 transition" />
                </a>
              </div>
              <div>
                <a href={shubham} download>
                  <button className="border-2 bg-black text-white rounded-full px-2 py-1 lg:px-5 lg:py-3 font-bold my-2 hover:scale-105 flex items-center">
                    Get Resume <FaCircleDown className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm sm:text-md lg:text-lg py-2">
                <span className="font-medium ">Email : </span>
                shubhampatidarsp07@gmail.com
              </p>
              <p className="text-sm sm:text-md lg:text-lg">
                <span className="font-medium">Contact : </span>
                9009833533
              </p>
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
