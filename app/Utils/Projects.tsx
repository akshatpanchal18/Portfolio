import React from "react";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";

const demoProjects = [
  {
    title: "Temp-Mail",
    category: "Temporory Mail Service",
    imgSrc: "/email.png",
    link: "https://tempmail-3lr6.onrender.com/",
  },
  {
    title: "Online Store",
    category: "E-commerce Solution",
    imgSrc: "/ecom.png",
    link: "https://e-commerce-ui-5bol.onrender.com/",
  },
  {
    title: "Chat Application",
    category: "chat Service",
    imgSrc: "/chatbot1.png",
    liink: "https://chat-application-frontend-uajp.onrender.com/",
  },
  {
    title: "ENQCODE",
    category: "Company Website",
    imgSrc: "/chatbot1.png",
    liink: "https://chat-application-frontend-uajp.onrender.com/",
  },
];

const Projects = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
          {demoProjects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-2xl overflow-hidden relative group">
                <div className="flex justify-center items-center bg-gray-100 group-hover:bg-indigo-100">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={150}
                    height={160}
                    className="object-cover w-80 rounded-tl-md rounded-tr-md group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="lg:mt-4 ml-3">
                  <h3 className="text-xl font-bold text-black group-hover:text-indigo-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 lg:text-lg md:text-[16px] text-sm">
                    {project.category}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0">
                  <button className="bg-gray-100 text-black group-hover:text-white px-8 py-4 rounded-tl-xl group-hover:bg-indigo-500 transition">
                    <IoIosArrowDropdown
                      fontSize={25}
                      className="group-hover:-rotate-90 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
