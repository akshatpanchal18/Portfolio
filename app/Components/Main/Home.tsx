"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import HireForm from "../ContactForm";
import { IoCloseCircle } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";

function HomePage() {
  const [popupShow, setPopupShow] = useState(false);
  return (
    <div className="lg:h-screen md:h-[70vh] h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hii , I&apos;m{" "}
            <span className="text-indigo-600 text-5xl">Akshat</span>
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
            Web Devloper / Freelancer
          </h1>
          <p className="text-gray-600 text-lg">
            Empowering you with the best tools to enhance your productivity and
            efficiency.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start w-max">
            <button
              aria-label="Hire Me"
              onClick={() => setPopupShow(!popupShow)}
              className="flex w-max items-center gap-4 group bg-indigo-100 text-black font-bold px-6 py-3 rounded-full hover:shadow-lg hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out"
            >
              Hire Me
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
            </button>
            <a
              aria-label="Download Resume"
              href="/Akshat_Panchal.pdf" // Replace with your file's path
              download="Akshat Panchal.pdf" // The file name that will be used during download
              className="flex items-center gap-4 group bg-indigo-100 text-black font-bold px-6 py-3 rounded-full hover:shadow-lg hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out"
            >
              Save Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            height={100}
            width={100}
            src="/landingpage.png"
            alt="Tech Illustration"
            className="rounded-xl w-full max-w-sm md:max-w-md lg:max-w-lg"
            priority // Ensures it loads quickly for above-the-fold content
            layout="responsive" // Ensures the image scales properly on different screen sizes
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
      {popupShow && (
        <div className=" p-4 fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
          <div className="bg-white rounded-2xl shadow-lg relative max-w-md w-full">
            <button
              onClick={() => setPopupShow(false)}
              className="absolute top-3 right-3 text-indigo-600 hover:text-indigo-900 text-xl"
            >
              <IoCloseCircle fontSize={25} />
            </button>
            <HireForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
