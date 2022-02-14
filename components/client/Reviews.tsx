import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { RatingType, ReviewType } from "../../types";

const Reviews = ({
  rating,
  reviews,
  reviewRef,
}: {
  rating: RatingType;
  reviews: ReviewType[];
  reviewRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={reviewRef}>
      <header className="flex items-center gap-x-4">
        <h1 className="page-title">Reviews</h1>
        <span className="text-sm bg-teal-600 w-fit h-fit mt-2 py-1 px-2 rounded-md text-white gap-1 flex items-center">
          <p>{rating.rating}</p>
          <StarIcon className="w-4 h-4" />
        </span>
      </header>
      <div>
        
      </div>
    </section>
  );
};

export default Reviews;
