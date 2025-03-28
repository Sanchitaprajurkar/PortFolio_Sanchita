import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-lg mt-5 text-gray-300">
          I am a Computer Engineering student at K.K WAGH INSTITUTE OF
          ENGINEERING EDUCATION AND RESEARCH with a passion for entrepreneurship
          and technology. As the founder of BridgeLink, a professional
          networking platform, I am committed to creating innovative solutions
          that connect students, alumni, and institutions.
        </p>

        <p className="text-lg mt-5 text-gray-300">
          My academic achievements include maintaining a high CGPA and excelling
          in various technical competitions. I have participated in multiple
          hackathons, winning awards like the NASA Space Apps Challenge Global
          Finalist and Innov-era Hackathon Winner.
        </p>

        <p className="text-lg mt-5 text-gray-300">
          Beyond academics, I enjoy exploring creativity through sketching,
          cooking, baking, and traveling, which help me develop a holistic
          perspective in problem-solving and innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
