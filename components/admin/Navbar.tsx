import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <ul className="flex justify-between items-center px-5 py-3 bg-white shadow-sm h-16 fixed top-0 w-full z-20">
      <li className="hover:cursor-pointer">
        <Link href="/admin/controlpanel">
          <a>
            <Image src="/vercel.svg" width={100} height={100} />
          </a>
        </Link>
      </li>
      <li className="nav-btn border">
        <UserIcon className="h-5 w-5" />
      </li>
    </ul>
  );
};

export default Navbar;
