import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const Review = (params: { review: any }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center px-2 space-y-2">
          <small className="flex text-sm items-center p-1 px-2 rounded-md bg-gray-200">{params.review.rating}<StarIcon className="w-5 h-5"/></small>
          <HeartIcon className="w-6 h-6"/>
      </div>
      <div className="w-full border min-h-[100px] rounded-md p-4">
          <p className="text-gray-500 text-sm">{params.review.review}</p>
      </div>
    </div>
  );
};

export default Review;
