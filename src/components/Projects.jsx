import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sorting Algorithm Visualiser",
      description: "Interactive visualization of sorting algorithms.",
      link: "https://github.com/Sanchitaprajurkar/SORTING-ALGORITHM-VISUALISER",
    },
    {
      id: 2,
      title: "PredictorGuru",
      description: "Predictive analysis tool for various scenarios.",
      link: "https://github.com/Sanchitaprajurkar/Predictor-Guru",
    },
    {
      id: 3,
      title: "INDIC",
      description: "Innovative project exploring technological solutions.",
      link: "https://github.com/Sanchitaprajurkar/indic",
    },
    {
      id: 4,
      title: "Color Code Converter",
      description:
        "Utility for converting color codes between different formats.",
      link: "https://github.com/Sanchitaprajurkar/color-canvas",
    },
  ];

  return (
    <div id="projects" className="w-full bg-black py-16 text-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {projects.map(({ id, title, description, link }) => (
            <div
              key={id}
              className="bg-gray-900 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {title}
              </h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-500 transition-colors"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
