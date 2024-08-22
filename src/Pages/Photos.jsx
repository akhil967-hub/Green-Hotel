import React from "react";
import image1 from "../photos/Gallery/image1.jpg";
import image2 from "../photos/Gallery/image2.jpg";
import image3 from "../photos/Gallery/image3.jpg";
import image4 from "../photos/Gallery/image4.jpg";
import image5 from "../photos/Gallery/image5.jpg";
import image6 from "../photos/Gallery/image6.jpg";
import image7 from "../photos/Gallery/image7.jpg";
import image8 from "../photos/Gallery/image8.jpg";
import image9 from "../photos/Gallery/image9.jpg";
import image10 from "../photos/Gallery/image10.jpg";
import image11 from "../photos/Gallery/image11.jpg";
import image12 from "../photos/Gallery/image12.jpg";
import image13 from "../photos/Gallery/image13.jpg";
import image14 from "../photos/Gallery/image14.jpg";
import image15 from "../photos/Gallery/image15.jpg";

export default function Photos() {
  return (
    <div className="mb-5" id="photos">
      <div className="mt-5 font-bold justify-center items-center">
        <h1 className="text-center text-1xl md:text-2xl lg:text-3xl underline">
          Gallery
        </h1>
      </div>

      <div className="flex flex-wrap ">
        <div className="flex flex-wrap w-full overflow-hidden">
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image1}
            alt="Image 1"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image2}
            alt="Image 2"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image3}
            alt="Image 3"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image4}
            alt="Image 4"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image5}
            alt="Image 5"
          />
        </div>
        <div className="flex flex-wrap w-full  overflow-hidden">
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image6}
            alt="Image 6"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image7}
            alt="Image 7"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image8}
            alt="Image 8"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image9}
            alt="Image 9"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image10}
            alt="Image 10"
          />
        </div>
        <div className="flex flex-wrap w-full">
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image11}
            alt="Image 11"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image12}
            alt="Image 12"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image13}
            alt="Image 13"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image14}
            alt="Image 14"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={image15}
            alt="Image 15"
          />
        </div>
      </div>
    </div>
  );
}
