import React from "react";
import heroImage from "../assets/hero.png";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <div
        className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <p className="bg-slate-400/50 px-5 py-2 rounded-full mt-20">
          Your luxury stay awaits
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl font-bold mt-4 md:text-extrabold max-w-xl">
          Your ideal retreat is just a click away
        </h1>
        <p className="max-w-130 mt-2 text-sm md:text-base">
          Experience the height of sophistication and relaxation—your journey to
          luxury starts now.
        </p>
        <form className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calenderIcon"
                className="h-4"
              />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destination">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>
          {/* Check-in */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="calender-icon"
                className="h-4"
              />
              <label htmlFor="checkIn">Check In</label>
            </div>
            <input
              type="date"
              id="checkIn"
              className="border rounded border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none "
            />
          </div>
          {/* Check-out */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="clander-icon"
                className="h-4"
              />
              <label htmlFor="checkOut">Check Out</label>
            </div>
            <input
              type="date"
              className="border rounded border-gray-200 px-3 py-1.5 mt-1.5 outline-none"
            />
          </div>
          {/* Guests */}
          <div className=" flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              placeholder="0"
              className="border rounded border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>
          {/* search button */}
          <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer">
            <img src={assets.searchIcon} alt="search-icon" className="" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
