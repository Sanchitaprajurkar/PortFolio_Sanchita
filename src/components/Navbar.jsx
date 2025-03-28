import React from "react";

const Navbar = () => {
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "achievements" },
    { id: 6, link: "contact" },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-6 text-white bg-gradient-to-r from-blue
    -500 to-indigo-600 fixed z-50"
    >
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">SR</h1>
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-white hover:text-gray-300 duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
