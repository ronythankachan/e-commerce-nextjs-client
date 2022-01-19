import { StarIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta magnam! Voluptas, cupiditate ad, hic quibusdam sed, voluptate temporibus sapiente autem pariatur incidunt minima facilis sit saepe! Quibusdam assumenda reprehenderit tempore quidem recusandae molestias deleniti in reiciendis illo natus ratione veniam impedit deserunt, ipsum, facere architecto. Cum, quibusdam maiores, commodi consectetur tempora suscipit minus eius facere ipsum aspernatur veritatis minima laboriosam beatae consequatur voluptate tenetur ut! Enim cum illum provident, fuga rerum distinctio assumenda! Inventore error saepe aperiam necessitatibus nihil, quo beatae labore velit quam ad sit ipsum aspernatur aut eius fuga eveniet officia accusantium ab aliquam est, quaerat neque! Dignissimos, nihil recusandae culpa, quas atque corporis, dolore voluptatum aliquam tempore explicabo neque esse iure animi? Sapiente natus aperiam pariatur itaque consequuntur cum ex consectetur, provident omnis assumenda eveniet saepe necessitatibus doloremque esse odio asperiores dolorum quia fugiat unde obcaecati illum aut incidunt! Beatae, aliquam dicta doloremque nulla mollitia neque laudantium voluptatibus nisi, quae ex repellat explicabo! Eligendi repudiandae alias, blanditiis quaerat necessitatibus, molestiae odit iste, facilis itaque assumenda facere. Dignissimos vel deleniti assumenda autem quia nostrum incidunt culpa amet possimus illum alias, tempora officiis maxime facilis a fugiat distinctio et blanditiis maiores neque repellat. Ea temporibus exercitationem corporis asperiores nisi! Sequi quis repellendus numquam delectus, molestias alias qui, officia quibusdam, dolore quidem amet saepe necessitatibus dignissimos at tempora? Eius consequuntur consequatur temporibus vitae, expedita veritatis laudantium accusantium! Illo impedit eum delectus repudiandae culpa ipsa quibusdam quas incidunt autem ea, tempora animi, deleniti quos eveniet repellat ullam voluptate iusto soluta, error id non. Aliquid pariatur nostrum ipsa rem delectus cumque in quaerat eius enim provident reprehenderit aut perferendis, asperiores sit beatae laborum nisi quisquam explicabo sunt ducimus aliquam libero ex nihil! Unde aliquam mollitia nostrum quaerat laborum minus hic sapiente, accusantium, architecto recusandae cumque quibusdam fuga autem, molestiae earum soluta officia neque eligendi ullam expedita rerum dolore repudiandae. Incidunt perferendis quo veniam fugiat doloremque? Excepturi nisi, tempora saepe quia dignissimos, error soluta numquam vitae odio placeat, voluptatem ipsa ut quo nostrum consequuntur consectetur necessitatibus voluptas accusamus id distinctio! Iste, dignissimos temporibus. At aperiam iusto voluptatem corporis expedita exercitationem quam praesentium deleniti, aut laudantium, maxime perferendis excepturi dolores soluta porro accusantium ab suscipit possimus magni nihil dicta. Expedita repellat harum ratione maxime vitae exercitationem mollitia similique tenetur laboriosam sit iusto, dolorem iure, minus totam inventore, architecto voluptate nobis! Nulla molestiae ipsa ab optio temporibus laboriosam ipsum dolorem omnis obcaecati. Eveniet, aliquid?",
    likes: 0,
    date: "8-dec-2021",
  },
];

const Reviews = (params: { id: string }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(reviews);
  }, []);
  return (
    <section className="bg-gray-50 w-full p-5 md:p-10 space-y-8 h-screen">
      <h1 className="text-4xl font-bold justify-start flex gap-x-2">
        Reviews
        <span className="flex items-center gap-x-1">
          (4.5 <StarIcon className="w-8 h-8" />)
        </span>
      </h1>
      <div className="space-y-8">
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
