import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://linkedin.com/in/sanchita-rajurkar-840180297"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-200"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Sanchitaprajurkar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-200"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <p className="text-center mb-2">
          © {year} Sanchita Rajurkar. All rights reserved.
        </p>
        <p className="text-sm text-center">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
