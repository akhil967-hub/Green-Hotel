import React from "react";
import menu1 from "../photos/Menu/menu1.jpg";
import menu2 from "../photos/Menu/menu2.jpg";
import menu3 from "../photos/Menu/menu3.jpg";
import menu4 from "../photos/Menu/menu4.jpg";
import menu5 from "../photos/Menu/menu5.jpg";
import menu6 from "../photos/Menu/menu6.jpg";
import menu7 from "../photos/Menu/menu7.jpg";
import menu8 from "../photos/Menu/menu8.jpg";
import menu9 from "../photos/Menu/menu9.jpg";
import menu10 from "../photos/Menu/menu10.jpg";
import menu21 from "../photos/Menu/menu21.jpg";
import menu22 from "../photos/Menu/menu22.jpg";
import menu23 from "../photos/Menu/menu23.jpg";

export default function () {
  return (
    <div className="mb-5" id="menu">
      <div className="mt-5 font-bold justify-center items-center ">
        <h1 className="text-center text-1xl md:text-2xl lg:text-3xl underline">
          Menu
        </h1>
      </div>
      <div className="ml-14 mt-5 font-bold justify-start items-start">
        <h1 className="text-start text-1xl md:text-2xl lg:text-3xl underline">
          Food Menu
        </h1>
      </div>
      <div className="flex flex-wrap ">
        <div className="flex flex-wrap w-full overflow-hidden cursor-pointer">
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu1}
            alt="menu 1"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu2}
            alt="menu 2"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu3}
            alt="menu 3"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu4}
            alt="menu 4"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu5}
            alt="menu 5"
          />
        </div>
        <div className="flex flex-wrap w-full mt-3 overflow-hidden cursor-pointer">
          <img
            className="ml-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu6}
            alt="menu 6"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu7}
            alt="menu 7"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu8}
            alt="menu 8"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu9}
            alt="menu 9"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu10}
            alt="menu 10"
          />
        </div>
      </div>
      <div className="ml-14 mt-5 font-bold justify-start items-start">
        <h1 className="text-start text-1xl md:text-2xl lg:text-3xl underline">
          Beverages
        </h1>
      </div>
      <div className="flex flex-wrap mt-5">
        <div className="flex flex-wrap w-full overflow-hidden cursor-pointer">
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu21}
            alt="menu 21"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu22}
            alt="menu 22"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu23}
            alt="menu 23"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu21}
            alt="menu 21"
          />
          <img
            className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
            src={menu22}
            alt="menu 23"
          />
        </div>
      </div>
    </div>
  );
}
