"use client";

import Header from "@/app/Utils/Header";
import TabSlider from "../TabSlider";

export default function AboutMe() {
  return (
    <section className="py-10 relative">
      <div className="flex flex-col items-center text-center justify-center gap-6 mb-10">
        <Header tag="About Me" bgColor="bg-indigo-100" />
      </div>

      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12">
          {/* Left Image Section */}
          <div className="w-full flex justify-center">
            <img
              className="rounded-xl object-cover max-h-[500px] w-full max-w-md"
              src="/about1.png"
              alt="About"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-gray-900 text-4xl font-bold leading-snug">
                My Journey as a Developer
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Results-driven Frontend Developer with hands-on experience in
                developing dynamic and scalable web applications using React.js,
                Next.js, and TypeScript. Skilled in implementing real-time
                functionalities, optimizing performance, and ensuring mobile
                responsiveness. Adept at integrating APIs and writing clean,
                maintainable code. Passionate about continuous learning and
                delivering high-quality solutions in collaborative environments.
              </p>
            </div>

            {/* Tabs Section */}
            <div className="w-full">
              {/* <TabSlider /> */}
              <TabSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
