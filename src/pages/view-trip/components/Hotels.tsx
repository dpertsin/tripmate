import React from "react";
import { Link } from "react-router-dom";

interface Hotel {
  hotelName: string;
  hotelAddress: string;
  price: string;
  rating: number;
  hotelImageURL: string;
  description: string;
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
}

interface HotelsSectionProps {
  tripData: {
    tripDataJson: {
      hotels: Hotel[];
    };
  };
}

function HotelsSection({ tripData }: HotelsSectionProps) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 my-5 md:grid-cols-3 xl:grid-cols-3 gap-5">
        {tripData?.tripDataJson?.hotels?.map((hotel, index) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}+${hotel?.hotelAddress}`}
            target="_blank"
            key={index}
          >
            <div className="hover:scale-105 transition-all cursor-pointer">
              <img
                src={hotel?.hotelImageURL}
                alt={hotel?.hotelName}
                className="rounded-xl h-[180px] w-full object-cover"
              />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{hotel?.hotelName}</h2>
                <h2 className="text-xs text-gray-500">
                  📍 {hotel?.hotelAddress}
                </h2>
                <h2 className="text-sm">💰 {hotel?.price} per night</h2>
                <h2 className="text-sm">⭐ {hotel?.rating} stars</h2>
                <p className="text-xs text-gray-500">{hotel?.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HotelsSection;
