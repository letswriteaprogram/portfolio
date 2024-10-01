import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import Wrapper from "../Wrapper";
import "./Skills.css";

const skillsData = [
  {
    name: "React",
    icon: <FaReact className="text-black hover:text-blue-400 text-7xl" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-black hover:text-orange-600 text-7xl" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-black hover:text-blue-500 text-7xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-black hover:text-yellow-500 text-7xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-black hover:text-red-600 text-7xl" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-black hover:text-purple-600 text-7xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-black hover:text-cyan-400 text-7xl" />,
  },
];

function Skills() {
  return (
    <section className="w-full  overflow-hidden">
      <Wrapper className=" w-full items-center  overflow-hidden ">
        <div className="w-full flex justify-center items-center mb-20">
          <span className="w-40 border-2 border-black"></span>
          <button className="border-2 border-black px-4 py-2 rounded-lg font-semibold text-xl mx-4 hover:bg-black hover:text-white">
            Skills
          </button>
          <span className="w-40 border-2 border-black"></span>
        </div>

        {/* Scrolling Container */}
        <div className="flex">
          <div className="animate-marquee  flex w-full  items-center gap-9 skill_container py-4">
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="min-w-36  min-h-36  border-2 border-black rounded-lg flex justify-center items-center flex-col hover:shadow-sm hover:scale-105 transition-all duration-1000"
              >
                {skill.icon}
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            ))}
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="min-w-36  min-h-36  border-2 border-black rounded-lg flex justify-center items-center flex-col hover:shadow-sm hover:scale-105 transition-all duration-1000"
              >
                {skill.icon}
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Skills;
