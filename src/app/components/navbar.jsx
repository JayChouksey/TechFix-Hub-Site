'use client';
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-32">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
          </div>
          <span className="text-xl font-semibold">Flowbite</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                active === item ? "text-blue-400" : "hover:text-gray-400"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
