import React from "react";
import { FaUniversity, FaClipboardList } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Core Committee Member",
      organization: "ELC, KKWIEER",
      icon: <FaUniversity className="text-blue-400 text-4xl mb-2" />,
    },
    {
      id: 2,
      title: "Member",
      organization: "ISTE Club",
      icon: <FaClipboardList className="text-green-400 text-4xl mb-2" />,
    },
    {
      id: 3,
      title: "Class Representative",
      organization: "K.K Wagh Institute",
      icon: <FaUniversity className="text-purple-400 text-4xl mb-2" />,
    },
    {
      id: 4,
      title: "Member",
      organization: "Career Katta",
      icon: <FaClipboardList className="text-red-400 text-4xl mb-2" />,
    },
  ];

  return (
    <div id="experience" className="w-full bg-black py-16 text-white">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {experiences.map(({ id, title, organization, icon }) => (
            <div
              key={id}
              className="bg-gray-900 shadow-lg rounded-lg p-6 flex items-center hover:scale-105 duration-300 hover:shadow-xl transition-transform"
            >
              <div className="mr-6">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
                <p className="text-gray-400">{organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
