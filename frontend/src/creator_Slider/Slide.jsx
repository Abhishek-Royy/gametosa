// components/Slide.js
import React from "react";

const Slide = ({ heading, info, image }) => {
  return (
    <div className="sm:flex  p-4  rounded-lg shadow-md justify-center sm:items-center">
      <div className="sm:w-1/2   sm:pl-4">
        <h2 className="sm:text-5xl text-4xl font-semibold mb-2">{heading}</h2>
        <p className="sm:text-2xl">{info}</p>
      </div>
      <div className="sm:w-1/3 h-auto pt-10 flex items-center justify-center">
        <div className=" sm:h-[40vw] h-[50vh] sm:w-[40vw] rounded-lg">
          <img
            className="w-full h-full object-contain object-center"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
