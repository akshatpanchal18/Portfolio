"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi"; // Icons for mobile menu
import { IoClose } from "react-icons/io5";

type Props = {};

function Navbar({}: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const shakeTimeout = setTimeout(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1000); // Stop shaking after 1s
    }, 5000); // Shake after 5 seconds

    return () => clearTimeout(shakeTimeout);
  }, []);

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
    // { name: "About", path: "about" },
    { name: "About Me", path: "about-me" },
    { name: "Work", path: "work" },
    // { name: "Testimonials", path: "testimonial" },
  ];

  return (
    <>
      {/* <nav
        className={`transition-all duration-300 z-50 ${
          isSticky
            ? "fixed top-0 bg-indigo-100 shadow-sm w-full"
            : "absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200 max-w-7xl w-full rounded-full shadow-lg px-4 py-2"
        }`}
      > */}
      {/* <nav
        className={`transition-all duration-300 z-50 xl:w-full 2xl:w-full w-full ${
          isSticky
            ? "fixed top-0 bg-indigo-100 shadow-sm"
            : " bg-gray-200 max-w-7xl mx-auto absolute top-4 left-34 w-full rounded-xl shadow-lg"
        }`}
      > */}
      <nav
        className={`transition-all duration-300 z-50 w-full ${
          isSticky
            ? "fixed top-0  backdrop-blur-lg shadow-sm py-2"
            : "absolute top-4 left-0 right-0 mx-auto max-w-7xl bg-indigo-100 rounded-xl shadow-lg px-4 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="object-contain w-20 h-20 sm:w-20 sm:h-20 rounded-2xl   "
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                key={index}
                className="text-black text-lg font-semibold cursor-pointer transition-all duration-100 hover:text-indigo-800 hover:font-bold"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Contact Button (Visible in Desktop) */}
          <div className="hidden md:block">
            <ScrollLink to="contact" smooth={true} duration={500} spy={true}>
              <button
                className={`bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md animate-bounce${
                  isShaking ? "animate-shake" : ""
                }`}
              >
                Contact Me
              </button>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IoClose size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* <AnimatePresence> */}
        {mobileMenuOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-indigo-500 shadow-lg z-40 p-6 flex flex-col items-center space-y-6"
          >
            <div className="flex  items-start">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority
                className="object-contain w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <div className="flex flex-col space-y-4 py-4 text-center items-start">
              {navLinks.map((link, index) => (
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  key={index}
                  className="text-white text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md border border-black mx-auto w-40">
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
        {/* </AnimatePresence> */}
      </nav>
    </>
  );
}

export default Navbar;
