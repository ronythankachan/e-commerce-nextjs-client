import Image from "next/image";
interface Brand {
  id: string;
  name: string;
  img: string;
}

const brands: Brand[] = [
  {
    id: "1",
    name: "addidas",
    img: "https://pbs.twimg.com/profile_images/1387727047468929028/iptHUHoJ_400x400.jpg",
  },
  {
    id: "2",
    name: "addidas",
    img: "https://pbs.twimg.com/profile_images/1387727047468929028/iptHUHoJ_400x400.jpg",
  },
  {
    id: "3",
    name: "addidas",
    img: "https://pbs.twimg.com/profile_images/1387727047468929028/iptHUHoJ_400x400.jpg",
  },
];

const Brands = () => {
  return (
    <div className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
      <h1 className="text-4xl font-bold justify-start">Brands</h1>
      <div>
        <Image
          width={50}
          height={50}
          src="https://pbs.twimg.com/profile_images/1387727047468929028/iptHUHoJ_400x400.jpg"
        />
        <p>Addidas</p>
      </div>
    </div>
  );
};

export default Brands;
