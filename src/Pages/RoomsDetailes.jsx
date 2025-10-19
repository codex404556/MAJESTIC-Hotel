import React, { useEffect, useState } from "react";
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

const RoomsDetailes = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-30 px-4 md:py-35 md:px-16 lg:px-24 lg:py-40 xl:px-32">
        {/* Room Details Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="text-sm rounded-full px-3 py-1.4">
              {room.roomType}
            </span>
          </h1>
          <p className="text-xs font-inter text-white bg-orange-500 px-3 py-1.5 rounded-full">
            15% OFF
          </p>
        </div>
        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-1">
          <StarRating />
          <p className="ml-2">+50 reviews</p>
        </div>
        {/* Room Adress section */}
        <div className="flex items-center gap-1 mt-1 text-gray-600">
          <img src={assets.locationIcon} alt="location-icon" />
          <p>{room.hotel.address}</p>
        </div>
        {/* Room Images Section */}
        <div className="flex flex-col md:flex-row mt-6 gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-xl shadow-lg object-cover"
              src={mainImage}
              alt="room-image"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 0 &&
              room.images.map((img, index) => (
                <img
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === img &&
                    "shadow-lg border border-gray-300 translate-y-[-2px] transition-all duration-200"
                  }`}
                  onClick={() => setMainImage(img)}
                  key={index}
                  src={img}
                  alt="room-image"
                />
              ))}
          </div>
        </div>
        {/* Room Description Section */}
        <div className="flx flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {room.amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2">
                  <img
                    className="w-5 h-5"
                    src={facilityIcons[item]}
                    alt="facility-icon"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-2xl font-medium bg-orange-400 text-white rounded-full w-40 px-4">
            ${room.pricePerNight}/night
          </p>
        </div>
        {/* Check Availability Section */}
        <form className="flex flex-col md:flex-row justify-between bg-white shadow hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mt-16 max-w-6xl max-auto">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10 items-start md:items-center text-gray-600">
            <div className="flex flex-col">
              <label htmlFor="">Check In</label>
              <input
                className="px-4 outline-none w-full border border-gray-300 rounded "
                type="date"
                id="checkInDate"
                placeholder="Check-In"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/60 max-md:hidden"></div>

            <div className="flex flex-col">
              <label htmlFor="">Check Out</label>
              <input
                className="px-4 outline-none w-full border border-gray-300 rounded "
                type="date"
                id="checkOutDate"
                placeholder="Check-out"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/60 max-md:hidden"></div>
            <div className="flex flex-col">
              <label htmlFor="guests">Guests</label>
              <input
                className="border rounded max-w-20 px-4 py-2 border-gray-300 outline-none"
                type="number"
                id="guests"
                placeholder="1"
                required
                max={4}
                min={1}
              />
            </div>
          </div>
          <button
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
            type="submit"
          >
            Book Now
          </button>
        </form>
        {/* Common specification Section */}
        <div className="mt-25 space-y-6">
          {roomCommonData.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <img className="w-7" src={item.icon} alt={`${item.title}-icon`} />
              <div className="">
                <p className="text-base">{item.title}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Description section */}
        <div className="max-w-4xl mt-16 border-t border-gray-200 pt-6">
          <p className="text-gray-500">
            Guests will be accommodated on the ground floor based on
            availability. You’ll enjoy a comfortable two-bedroom apartment that
            offers a true city-living experience. The quoted price covers two
            guests. To receive accurate pricing for larger groups, please select
            the correct number of guests in the booking section.
          </p>
        </div>
        {/* Hosted by Section */}
        <div className="">
          <div className="flex">
            <img src={assets.logo} alt="logo" className="invert h-40" />
            <div className="pt-10">
              
                <p className="text-xl">
                  Hosted By
                  <span>
                    <p className="font-playfair">{room.hotel.name}</p>
                  </span>
                </p>
              <div className="flex items-center mt-2 ">
                <StarRating />
                <p clasName="text-sm text-gray-300">+100 reviews</p>
              </div>
            </div>
          </div>
          <button className="text-white bg-gray-800 px-3 py-2 cursor-pointer rounded-xl hover:bg-gray-600 transition-all duration-200 text-sm">Contact Now</button>
        </div>
      </div>
    )
  );
};

export default RoomsDetailes;
