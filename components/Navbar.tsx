import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <ul className="flex justify-between items-center px-5 py-3 bg-white shadow-md h-16 fixed top-0 w-full z-20">
      <li className="hover:cursor-pointer">
        <Link href="/">
          <a>
            <Image src="/vercel.svg" width={100} height={100} />
          </a>
        </Link>
      </li>
      <li className="nav-btn">
        <UserIcon className="h-5 w-5" />
        <p className="text-sm">Account</p>
      </li>
    </ul>
  );
};

export default Navbar;
