import React from "react";
import image1 from "../photos/image1.jpg";
import image2 from "../photos/image2.jpg";
import image3 from "../photos/image3.jpg";
import image4 from "../photos/image4.jpg";
import image5 from "../photos/image5.jpg";

export default function Home() {
  return (
    <div className="mb-5" id="home">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

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
              className="ml-4 mt-5 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
              src={image2}
              alt="Image 2"
            />
            <img
              className="ml-4 mt-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
              src={image5}
              alt="Image 5"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" mt-5 overflow-hidden">
            <img
              className="ml-4 mt-5 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
              src={image4}
              alt="Image 4"
            />
            <div className="relative mt-4">
              <img
                className="ml-4 w-56 h-48 transform transition duration-300 ease-in-out hover:scale-110"
                src={image3}
                alt="Image 3"
              />
              <a
                href="#photos"
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
        <h3 className="ml-4">
          Italian, Asian, Continental, Pizza, Fast Food, Healthy Food, Desserts,
          Beverages<br></br> RK Salai (Cathedral Road), Chennai
        </h3>
      </div>
      <div className="mt-5 ">
        <ul>
          <li className="text-black ml-4 border border-black bg-opacity-50 p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            <span className="border border-black  mr-1 rounded">
              <i className="fas fa-arrow-right"></i>
            </span>
            Direction
          </li>

          <li className="text-black ml-4 border border-black bg-opacity-50 p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            <i className="fas fa-bookmark mr-1"></i>
            Bookmark
          </li>

          <li className="text-black ml-4 border border-black bg-opacity-50 p-1 rounded-lg inline-flex items-center cursor-pointer hover:scale-105">
            <i className="fas fa-share-alt text-gray-700 mr-1"></i>
            Share
          </li>
        </ul>
      </div>
      <div className="mt-6 ml-4  text-1xl md:text-2xl lg:text-3xl">
        <h2>About this place</h2>
      </div>
      <div className="mt-5">
        <span className="text-black ml-4 border border-black bg-opacity-50 font-bold p-2 rounded-lg inline-block">
          WELL SANITIZED KITCHEN
        </span>
        <span className="text-black ml-4 border border-black bg-opacity-50 font-bold p-2 rounded-lg inline-block">
          RIDER HAND WASH
        </span>
        <span className="text-black ml-4 border border-black bg-opacity-50 font-bold p-2 rounded-lg inline-block">
          DAILY TEMPERATURE CHECKS
        </span>
      </div>
      <div>
        <h2 className="mt-6 ml-4  text-1xl md:text-2xl lg:text-3xl">
          Cuisines
        </h2>
      </div>
      <div className="mt-5 ">
        <ul>
          <li className="text-green-900 ml-6 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Italian
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Asian
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Continental
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Pizza
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Fast Food
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Healthy Food
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Beverages
          </li>
          <li className="text-green-900 ml-4 border border-black bg-opacity-50  p-2 rounded-lg inline-block cursor-pointer hover:scale-105">
            Desserts
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="ml-4 text-1xl md:text-2xl lg:text-3xl">
          Popular Dishes
        </h1>
        <p className="ml-4 mt-3 lg:text-1xl ">
          Panko Chicken, Sizzler Brownie, Kit Kat Shake, Dim Sums, Pina Colada,
          Thai Red Curry
        </p>
      </div>
      <div className="mt-6">
        <h1 className="ml-4 text-1xl md:text-2xl lg:text-3xl">
          People Say This Place Is Known For
        </h1>
        <p className="ml-4 mt-3 lg:text-1xl ">
          Quantity and Quality of Food, Bookshelf, Good Food and Good Service,
          Quaint Little Place, <br /> Lovely Ambience, Packed on Weekends.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="ml-4 text-1xl md:text-2xl lg:text-3xl">More Info</h1>
        <div className="ml-4 mt-4 flex">
          <ul className="w-full md:w-1/2 list-none p-0 m-0 text-green-900  ">
            <li className=" relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Breakfast
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Takeaway Available
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Family Friendly
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Table booking recommended
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              All Day Breakfast
            </li>
          </ul>
          <ul className="w-full md:w-1/2 list-none p-0 m-0 text-green-900">
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Home Delivery
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Indoor Seating
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Live Sports Screening
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Desserts and Bakes
            </li>
            <li className="relative pl-6 mb-1 before:content-['✓'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-green-500">
              Valet Parking Available
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
