import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center pt-30 bg-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="src\assets\WhatsApp Image 2025-03-28 at 00.22.11_1bb5a358.jpg"
            alt="Sanchita Rajurkar"
            className="w-70 h-70 object- cover"
          />
        </div>

        {/* Right Side - Info Box */}
        <div className="w-full md:w-1/2 bg-dark-navy p-8 hover-lift rounded-lg shadow-lg">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Sanchita Rajurkar
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-md">
            I am an aspiring entrepreneur and a Computer Engineering student
            with a strong passion for business strategy, innovation, and
            leadership. With experience in team management, startup ideation,
            and market research, I thrive in dynamic environments, blending
            creativity with analytical problem-solving to drive impactful
            solutions. Beyond entrepreneurship, I am a creative and
            detail-oriented frontend developer passionate about UI/UX design.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/sanchita-rajurkar-840180297"
              target="_blank"
              rel="noreferrer"
              className="animated-button flex items-center space-x-2 text-white"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Sanchitaprajurkar"
              target="_blank"
              rel="noreferrer"
              className="animated-button flex items-center space-x-2 text-white"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
