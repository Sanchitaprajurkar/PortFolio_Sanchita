import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaBrain,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiPostman,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  const technicalSkills = [
    {
      id: 1,
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "Java"],
      icon: <FaCode />,
    },
    {
      id: 2,
      category: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      icon: <FaLaptopCode />,
    },
    {
      id: 3,
      category: "UI/UX & Design Tools",
      skills: ["Figma", "Typography", "Color Theory"],
      icon: <FaPalette />,
    },
  ];

  const softSkills = [
    "Leadership",
    "Teamwork",
    "Adaptability",
    "Problem-solving",
    "Creativity",
  ];

  return (
    <div id="skills" className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-white inline-block">
            Technical Skills
          </h2>
        </div>

        {/* Technical Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {technicalSkills.map(({ id, category, skills, icon }) => (
            <div
              key={id}
              className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4 text-xl font-semibold">
                {icon} <span className="ml-3">{category}</span>
              </div>
              <ul className="list-disc ml-6 text-gray-300">
                {skills.map((skill, index) => (
                  <li key={index} className="py-1">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4 flex items-center justify-center">
            <FaUsers className="mr-2" /> Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 py-2 px-4 rounded-lg text-gray-300 shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
