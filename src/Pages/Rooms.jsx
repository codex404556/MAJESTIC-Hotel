import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const CheckBox = ({ label, select = false, onChange }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm hover:text-gray-800">
    <input
      type="checkbox"
      checked={select}
      onChange={(e) => onChange(e.target.checked, label)}
    />
    <span>{label}</span>
  </label>
);

const RadioButton = ({ label, select = false, onChange }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm hover:text-gray-800">
    <input type="radio" checked={select} onChange={() => onChange(label)} />
    <span>{label}</span>
  </label>
);

const Rooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const roomType = [
    "single room",
    "double room",
    "suite room",
    "family room",
    "deluxe room",
    "presidential suite",
    "executive room",
  ];
  const priceRange = [
    "under $100",
    "$100 - $200",
    "$200 - $300",
    "$300 - $400",
    "$400 - $500",
    "above $500",
  ];
  const sortOptions = [
    "price low to high",
    "price high to low",
    "rating high to low",
    "most popular",
    "newest first",
  ];
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Don't miss out on special offers and personalized packages that make
            your stay even more memorable.
          </p>
        </div>
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-7 border-b border-gray-200 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              title="view Room Details"
              src={room.images[3]}
              alt="room-image"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                className="text-gray-700 text-3xl font-playfair cursor-poiner"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-600 mt-2 ext-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              <div className="flex flex-wrap items-center mt-3 mb-2 gap-4">
                {room.amenities.map((item) => (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100">
                    <img
                      className="w-5 h-5"
                      src={facilityIcons[item]}
                      alt="facility-icon"
                    />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              {/* price section */}
              <p className="text-gray-600 font-medium ">
                ${room.pricePerNight}{" "}
                <span className="font-playfair text-xl">/ Night</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Filter Section */}
      <div className="bg-white shadow-lg rounded-xl w-80 max-lg:mb-8 min-lg:mt-15 text-gray-600">
        <div className={`flex items-center justify-between px-5 py-3 shadow-md rounded-b-xl ${openFilter &&  "border-b border-gray-100"}`}>
          <p className="text-base font-medium text-gray-800">FILTER</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilter(!openFilter)}
              className="lg:hidden"
            >
              {openFilter ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>
        <div className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-600`}>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800">Popular Filters</p>
            {roomType.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800">Price Range</p>
            {priceRange.map((priceRange, index) => (
              <CheckBox key={index} label={priceRange} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-10">
            <p className="font-medium text-gray-800">Sort Option</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
