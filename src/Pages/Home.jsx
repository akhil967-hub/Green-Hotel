import React from "react";
import image1 from "../photos/image1.jpg";
import image2 from "../photos/image2.jpg";
import image3 from "../photos/image3.jpg";
import image4 from "../photos/image4.jpg";
import image5 from "../photos/image5.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex items-start">
        <div className="mt-7 overflow-hidden relative">
          <img
            className="ml-4  w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
            src={image1}
            alt="Image 1"
          />
        </div>
        <div className="flex flex-col ">
          <div className="mt-5 overflow-hidden">
            <img
              className="ml-5 mt-5 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
              src={image2}
              alt="Image 2"
            />
            <img
              className="ml-3 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
              src={image5}
              alt="Image 5"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" mt-5 overflow-hidden">
            <img
              className="ml-3 mt-5 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
              src={image4}
              alt="Image 4"
            />
            <div className="relative mt-4">
        <img
          className="ml-3 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
          src={image3}
          alt="Image 3"
        />
        <a
          href="/photos"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-white text-lg font-bold bg-opacity-50 p-2 rounded hover:scale-110">
            View Gallery
          </span>
        </a>
      </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-1xl md:text-2xl lg:text-6xl font-bold ml-4 mt-2 font-serif">
          Green Table
        </h1>
        <h3 className="ml-5">
          Italian, Asian, Continental, Pizza, Fast Food, Healthy Food, Desserts,
          Beverages<br></br> RK Salai (Cathedral Road), Chennai
        </h3>
      </div>
    </div>
  );
}
