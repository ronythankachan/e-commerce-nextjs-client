import { StarIcon } from "@heroicons/react/solid";
import Review from "./Review";

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  likes: number;
  date: string;
}
const reviews: Review[] = [
  {
    id: "1",
    name: "Rony Thankachan",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, officia minima omnis eos illo sequi eveniet ullam ratione quisquam voluptate.",
    likes: 16,
    date: "14-sept-2021",
  },
  {
    id: "2",
    name: "Aju Thomas",
    rating: 3,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    likes: 4,
    date: "14-oct-2021",
  },
  {
    id: "3",
    name: "Anshana",
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum.",
    likes: 2,
    date: "1-nov-2021",
  },
  {
    id: "1",
    name: "Soniya",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, officia minima omnis eos illo sequi eveniet ullam ratione quisquam voluptate.",
    likes: 0,
    date: "8-dec-2021",
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 w-full p-5 md:p-10 space-y-8 h-screen">
      <h1 className="text-4xl font-bold justify-start flex gap-x-2">
        Reviews{" "}
        <span className="flex items-center gap-x-1">
          (4.5 <StarIcon className="w-8 h-8" />)
        </span>
      </h1>
      <div>
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
