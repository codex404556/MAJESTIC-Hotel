import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Cards = ({room, index}) => {
  return (
    <Link
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] hover:shadow-[0px_6px_6px_rgba(0,0,0,0.1)] transition-all"
      to={"/rooms/" + room._id}
      onClick={() =>  scrollTo(0, 0)}
      key={room._id}
    >
      
        <img
          src={room.images[3]}
          alt="room-image"
          className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_raba(0,0,0,0.05)]"
        />
      
      {index % 2 === 1 && (
        <p className="px-3 py-1 rounded-full bg-white text-xs text-gray-800 font-medium absolute top-3 left-3">
          best seler
        </p>
      )}
      <div className="p-4 pt-5">
        <div className="flex item-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="">
            <img src={assets.starIconFilled} alt="star-icon" />
            4.5
          </div>
        </div>
        <div className="flex item-center gap-1 text-sm">
          <img
            src={assets.locationFilledIcon}
            alt="location-icon"
            className="h-4"
          />
          <span>{room.hotel.address}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">{room.pricePerNight}$</span>
            /Night
          </p>
          <button className="border border-gray-300 rounded px-4 py-2 text-sm font-medium hover:bg-gray-30 transiton-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Cards
