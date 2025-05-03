import { useState } from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GiBullseye } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa6";
import { HiBriefcase } from "react-icons/hi2";

const tabs = ["Skills", "Education", "Experience"];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Skills");
  const skills = [
    { icon: <FaReact className="text-blue-500" />, name: "React.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-black" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    {
      icon: <IoLogoJavascript className="text-yellow-400" />,
      name: "JavaScript",
    },
    { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
    { icon: <SiRedux className="text-purple-500" />, name: "Redux Toolkit" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
  ];

  const knowledge = [
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <SiTypescript className="text-blue-700" />, name: "TypeScript" },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 flex bg-white rounded-lg overflow-hidden">
      {/* Vertical Tabs */}
      <div className="w-1/4 bg-gray-100 flex flex-col p-4 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-4 py-2 rounded-md transition-all duration-300 text-left text-sm font-medium ${
              activeTab === tab
                ? "bg-indigo-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-3/4 p-6 bg-indigo-50 h-[288px] overflow-y-auto">
        {activeTab === "Skills" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-600">
              <GiBullseye fontSize={24} />
              Skills
            </h2>
            <div className="bg-white rounded-lg p-5 space-y-4">
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-1 text-sm bg-gray-100 rounded-md p-0.5"
                  >
                    {skill.icon}
                    <span className="text-gray-700">{skill.name}</span>
                  </li>
                ))}
              </ul>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-3">
                  Knowledge
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {knowledge.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-1 text-xs"
                    >
                      {item.icon}
                      <span className="text-gray-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Education" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-600">
              <FaUserGraduate fontSize={24} />
              Education
            </h2>
            <div className="bg-white rounded-lg p-5 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-gray-600 text-sm">
                Gujarat Technological University <br />
                <span className="text-indigo-500 font-semibold">
                  2020 - 2024
                </span>
              </p>
            </div>
          </div>
        )}

        {activeTab === "Experience" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-600">
              <HiBriefcase fontSize={24} />
              Experience
            </h2>
            <div className="bg-white rounded-lg p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Web Developer
                </h3>
                <p className="text-gray-600 text-sm">
                  ENQCODE Technologies <br />
                  <span className="text-indigo-500 font-semibold">
                    Jan 2025 - Present
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  React.js Intern
                </h3>
                <p className="text-gray-600 text-sm">
                  Right Info Services <br />
                  <span className="text-indigo-500 font-semibold">
                    Jan 2024 - Apr 2024
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaCss3Alt, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiRedux,
//   SiTailwindcss,
//   SiTypescript,
//   SiNextdotjs,
//   SiExpress,
// } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io5";
// import { GiBullseye } from "react-icons/gi";
// import { FaUserGraduate } from "react-icons/fa6";
// import { HiBriefcase } from "react-icons/hi2";

// const tabs = ["Skills", "Education", "Experience"];

// export default function ProfileTabs() {
//   const [activeTab, setActiveTab] = useState("Skills");

//   return (
//     <div className="w-full max-w-96 mx-auto mt-10">
//       {/* Tabs */}
//       <div className="relative flex items-center justify-center w-full mx-auto space-x-2 bg-gray-100 rounded-lg p-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`relative z-10 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
//               activeTab === tab ? "text-white" : "text-gray-600"
//             }`}
//           >
//             {activeTab === tab && (
//               <motion.div
//                 layoutId="underline"
//                 className="absolute inset-0 bg-indigo-500 rounded-md"
//                 transition={{ type: "spring", stiffness: 500, damping: 30 }}
//               />
//             )}
//             <span className="relative">{tab}</span>
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="mt-6 p-4 bg-indigo-50 rounded-lg shadow-sm h-64">
//         {activeTab === "Skills" && (
//           <div className="flex flex-col justify-center h-full">
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-600">
//               <GiBullseye fontSize={24} />
//               Skills
//             </h2>
//             <div className="bg-white rounded-lg p-5 space-y-4 overflow-hidden">
//               <ul className="flex flex-wrap gap-3">
//                 <li className="flex items-center space-x-1 text-xs">
//                   <FaReact className="text-blue-500 text-xs" />
//                   <span className="text-gray-700">React.js</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <FaNodeJs className="text-green-500 text-xs" />
//                   <span className="text-gray-700">Node.js</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <SiExpress className="text-black text-xs" />
//                   <span className="text-gray-700">Express.js</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <SiMongodb className="text-green-600 text-xs" />
//                   <span className="text-gray-700">MongoDB</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <IoLogoJavascript className="text-yellow-400 text-xs" />
//                   <span className="text-gray-700">JavaScript</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <SiTailwindcss className="text-blue-400 text-xs" />
//                   <span className="text-gray-700">Tailwind CSS</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <SiRedux className="text-purple-500 text-xs" />
//                   <span className="text-gray-700">Redux Toolkit</span>
//                 </li>
//                 <li className="flex items-center space-x-1 text-xs">
//                   <FaCss3Alt className="text-blue-600 text-xs" />
//                   <span className="text-gray-700">CSS</span>
//                 </li>
//               </ul>

//               {/* Knowledge */}
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-3">
//                   Knowledge
//                 </h3>
//                 <ul className="flex flex-wrap gap-3">
//                   <li className="flex items-center space-x-1 text-xs">
//                     <SiNextdotjs className="text-black text-xs" />
//                     <span className="text-gray-700">Next.js</span>
//                   </li>
//                   <li className="flex items-center space-x-1 text-xs">
//                     <SiTypescript className="text-blue-700 text-xs" />
//                     <span className="text-gray-700">TypeScript</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Education */}
//         {activeTab === "Education" && (
//           <div className="flex flex-col justify-center h-full">
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-600">
//               <FaUserGraduate fontSize={24} />
//               Education
//             </h2>
//             <div className="bg-white rounded-lg p-5 space-y-2">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Bachelor of Engineering in Computer Engineering
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Gujarat Technological University <br />
//                 <span className="text-indigo-500 font-semibold">
//                   2020 - 2024
//                 </span>
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Experience */}
//         {activeTab === "Experience" && (
//           <div className="flex flex-col justify-center h-full">
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-indigo-600">
//               <HiBriefcase fontSize={24} />
//               Experience
//             </h2>
//             <div className="bg-white rounded-lg p-5 space-y-4">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Web Developer
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   ENQCODE Technologies <br />
//                   <span className="text-indigo-500 font-semibold">
//                     Jan 2025 - Present
//                   </span>
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   React.js Intern
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Right Info Services <br />
//                   <span className="text-indigo-500 font-semibold">
//                     Jan 2024 - Apr 2024
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
