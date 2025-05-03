import React from "react";
type props = {
  tag?: string;
  title?: string;
  content?: string;
  bgColor?: string;
};
function Header({ tag, title, content, bgColor = "bg-white" }: props) {
  return (
    <>
      {tag && (
        <div
          className={`${bgColor} w-max text-black text-md flex items-center px-4 py-2 rounded-lg mt-6 max-sm:px-2`}
        >
          <span className="p-2 bg-indigo-500 rounded-lg mr-3 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></span>
          <p className="uppercase font-bold">{tag}</p>
          <span className="p-2 bg-indigo-500 rounded-lg ml-3 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></span>
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h2>
      )}
      {content && (
        <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
          {content}
        </p>
      )}
    </>
  );
}

export default Header;
