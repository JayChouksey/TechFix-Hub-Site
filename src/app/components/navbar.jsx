"use client";
import React from 'react'
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#0A84FF] text-white">
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/">TechFix Hub</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="/" className="hover:text-gray-200 transition duration-300">Home</a>
        <a href="/services" className="hover:text-gray-200 transition duration-300">Services</a>
        <a href="/about" className="hover:text-gray-200 transition duration-300">About Us</a>
        <a href="/contact" className="hover:text-gray-200 transition duration-300">Contact Us</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden focus:outline-none transition duration-300" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} className="transition-transform transform rotate-180 duration-300" /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile Menu with Smooth Slide Animation */}
    <div className={`md:hidden bg-[#007BFF] overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="p-4 space-y-4">
        <a href="/" className="block text-lg hover:text-gray-300 transition duration-300">Home</a>
        <a href="/services" className="block text-lg hover:text-gray-300 transition duration-300">Services</a>
        <a href="/about" className="block text-lg hover:text-gray-300 transition duration-300">About Us</a>
        <a href="/contact" className="block text-lg hover:text-gray-300 transition duration-300">Contact Us</a>
      </div>
    </div>
  </nav>
  )
}

export default navbar