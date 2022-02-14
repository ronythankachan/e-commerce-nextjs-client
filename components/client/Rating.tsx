import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as WhiteStarIcon } from "@heroicons/react/outline";

import React from "react";

const Rating = ({ rating }: { rating: number }) => {
  const generateRating = (rating: number) => {
    let temp = [];
    console.log(rating);
    for (let i = 0; i < rating; i++) {
      console.log("inside first ");
      temp.push(<StarIcon className="w-4 h-4 text-black" />);
    }
    for (let i = rating; i < 5; i++) {
      console.log("Inside second");
      temp.push(<WhiteStarIcon className="w-3 h-3 text-red-white" />);
    }
    return temp;
  };

  return (
    <div className="flex items-center">
      {generateRating(Math.floor(rating))}
    </div>
  );
};

export default Rating;
