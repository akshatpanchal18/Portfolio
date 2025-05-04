"use client";

import Header from "@/app/Utils/Header";
import TabSlider from "../TabSlider";
import Image from "next/image";

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
            <Image
              height={100}
              width={100}
              src="/about1.png"
              alt="Tech Illustration"
              className="rounded-xl w-full max-w-sm md:max-w-md lg:max-w-lg"
              priority // Ensures it loads quickly for above-the-fold content
              layout="responsive" // Ensures the image scales properly on different screen sizes
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Dynamically adjusts image size based on screen width
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-gray-900 text-4xl font-bold leading-snug">
                My Journey as a Developer
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Hi, I&apos;m Akshat Panchal, a results-driven Frontend Developer
                with a strong passion for crafting dynamic and scalable web
                applications. With hands-on experience in React.js, Next.js, and
                TypeScript, I specialize in implementing real-time
                functionalities, optimizing performance, and ensuring seamless
                mobile responsiveness. I am proficient in integrating APIs,
                writing clean and maintainable code, and prioritizing the user
                experience across all devices. I am always eager to explore new
                technologies and continuously improve my skill set. My focus is
                on delivering high-quality, efficient solutions while
                collaborating effectively in team environments.
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
