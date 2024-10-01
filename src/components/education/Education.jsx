import React from "react";
import { FaGraduationCap } from "react-icons/fa"; // Icon for education
import Wrapper from "../Wrapper";

const educationData = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Government Holkar Science College, Indore (M.P.)",
    year: "2020 - 2023",
    details: "Computer fundamentals and understanding Web Technologies.",
  },
  {
    degree: "Master of Computer Applications",
    institution: "LNCT University Bhopal (M.P.)",
    year: "2023 - Present",
    details: "Focus on Full Stack Development and Data Structures.",
  },
];

const Education = () => {
  return (
    <section className="py-8 w-full" id="Education">
      <Wrapper className="max-w-screen-lg mx-auto">
        <div className="w-full flex justify-center items-center mb-20">
          <span className="w-40 border-2 border-black"></span>
          <button className="border-2 border-black px-4 py-2 rounded-lg font-semibold text-xl mx-4 hover:bg-black hover:text-white">
            Education
          </button>
          <span className="w-40 border-2 border-black"></span>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border-2 border-gray-400  bg-white hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-center space-x-4">
                <FaGraduationCap className="text-black text-5xl" />
                <div>
                  <h3 className="text-md sm:text-lg lg:text-2xl font-semibold text-black">
                    {edu.degree}
                  </h3>
                  <p className="text-md sm:text-lg lg:text-2xl text-black/70 ">
                    {edu.institution}
                  </p>
                  <span className="block text-md font-medium text-black/50">
                    {edu.year}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-md text-black/80 text-center">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Education;
