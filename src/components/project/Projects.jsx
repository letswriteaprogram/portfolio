import React from "react";
import Wrapper from "../Wrapper";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePhonelink } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

// Import images directly
import notesImage from "/src/assets/notes.jpg";
import restcountriesImage from "/src/assets/restcountries.jpg";
import hdPngWorldImage from "/src/assets/hdpngworld.jpg";

const projects = [
  {
    name: "Notes Taking",
    githublink: "https://github.com/letswriteaprogram/NoteTakingApp",
    livelink: "https://notetakingapp05.netlify.app/",
    image: notesImage, // Updated to use imported image
  },
  {
    name: "Rest Countries",
    githublink: "https://github.com/letswriteaprogram/restcountries",
    livelink: "https://restcountries07.netlify.app",
    image: restcountriesImage, // Updated to use imported image
  },
  {
    name: "Hd Png World",
    livelink: "https://hdpngworld.com/",
    image: hdPngWorldImage, // Updated to use imported image
  },
];

function Projects() {
  return (
    <>
      <section id="Projects" className="w-full">
        <Wrapper className="w-full h-full  my-10 p-10">
          <div className="w-full flex justify-center items-center mb-10">
            <span className="w-40 border-2 border-black"></span>
            <button className="border-2 border-black px-4 py-2 rounded-lg font-semibold text-xl mx-4 hover:bg-black hover:text-white hover:shadow-lg">
              Projects
            </button>
            <span className="w-40 border-2 border-black"></span>
          </div>
          <div className="flex gap-8 flex-wrap justify-evenly">
            {projects.map((project, id) => (
              <div
                key={id} 
                className="max-w-[400px] border-2 border-black rounded-lg mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-1000"
              >
                <div className="flex justify-between items-center px-4">
                  <p className="p-1 font-semibold">{project.name} </p>
                  <HiDotsHorizontal className="text-2xl" />
                </div>
                <img
                  className="border-y-2 border-black"
                  src={project.image} // Using the imported image reference
                  alt={`project/${project.name}`}
                />
                <div className="w-full flex justify-evenly py-1">
                  {project?.githublink && (
                    <a href={project?.githublink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-3xl" />
                    </a>
                  )}
                  {project?.livelink && (
                    <a href={project?.livelink} target="_blank" rel="noopener noreferrer">
                      <MdOutlinePhonelink className="text-3xl" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Projects;
