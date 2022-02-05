import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const router = Router;
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  const logOut = () => {
    removeCookie("user", { path: "/" });
    router.push("/login");
  };

  return (
    <ul className="flex justify-between items-center px-5 py-3 bg-white shadow-sm h-16 fixed top-0 w-full z-20">
      <li className="hover:cursor-pointer">
        <Link href="/admin/dashboard">
          <a>
            <Image src="/logo.png" width={50} height={50} />
          </a>
        </Link>
      </li>
      <li className="nav-btn border">
        <button onClick={logOut}>Log out</button>
      </li>
    </ul>
  );
};

export default Navbar;
