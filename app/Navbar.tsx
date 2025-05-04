"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About Me", path: "about-me" },
    { name: "Work", path: "work" },
  ];

  return (
    <>
      <nav
        className={`transition-all duration-300 w-full z-50 ${
          isSticky
            ? "fixed backdrop-blur-lg shadow-sm py-2"
            : "mx-auto max-w-7xl bg-indigo-100 rounded-bl-xl rounded-br-xl shadow-lg py-2"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="object-contain w-20 h-20 rounded-2xl"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.path}
                smooth
                duration={500}
                spy
                className="text-black text-lg font-semibold cursor-pointer hover:text-indigo-800 hover:font-bold transition-all"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <ScrollLink to="contact" smooth duration={500} spy>
              <button
                aria-label="Contact Me"
                className={`bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md `}
              >
                Contact Me
              </button>
            </ScrollLink>
          </div>

          {/* Mobile Menu Toggle (ABSOLUTE) */}
          <button
            aria-label="Mobile Menu"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden text-black z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IoClose size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu - always bg-indigo-900, prevent blur effect */}
      {mobileMenuOpen && (
        <div
          ref={dropdownRef}
          className={`fixed top-0 right-0 h-full w-64 bg-indigo-900 shadow-lg z-50 p-6 flex flex-col items-start space-y-6 transform transition-transform duration-300 ${
            isSticky ? "backdrop-blur-none" : ""
          }`}
        >
          {/* Close Button - Ensure it stays on top */}
          <button
            aria-label="Close Menu"
            className="absolute top-4 right-4 z-60 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <IoClose size={28} />
          </button>

          <div className="flex flex-col space-y-4 pt-4 text-left w-full">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.path}
                smooth
                duration={500}
                spy
                className="text-white text-lg font-semibold cursor-pointer hover:text-blue-300 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink to="contact" smooth duration={500} spy>
              <button
                aria-label="Contact Me"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-4 py-2 rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-md transition"
              >
                Contact Me
              </button>
            </ScrollLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
