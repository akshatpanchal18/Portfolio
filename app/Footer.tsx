"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-between h-[30vh]">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" height={100} width={100} alt="logo" />
            {/* <span className="text-lg font-semibold">Akshat</span> */}
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 mt-4 md:mt-0 text-gray-300">
            <ScrollLink to="home" smooth={true} className="hover:text-white">
              Home
            </ScrollLink>
            <ScrollLink to="work" smooth={true} className="hover:text-white">
              Work
            </ScrollLink>
            <ScrollLink
              to="about-me"
              smooth={true}
              className="hover:text-white"
            >
              About Me
            </ScrollLink>

            {/* <a href="#" className="hover:text-white">
              Support
            </a> */}
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full cursor-pointer">
            <FaTwitter className="text-white text-sm" />
          </div> */}
          <a
            href="mailto:akshatpanchal08.com?subject=Proposal for [Project Name] – Let's Get Started&body=I would like to connect with you!"
            className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-700"
          >
            <FaEnvelope className="text-white hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-panchal08"
            className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaLinkedin className="text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://github.com/akshatpanchal18"
            className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaGithub className="text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400 text-sm">
        © Akshat Panchal 2025, All rights reserved.
      </div>
    </footer>
  );
}
