import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    Router.push("/login");
  };

  return (
    <ul className="flex justify-between items-center px-5 py-3 bg-white shadow-sm h-16 fixed top-0 w-full z-20">
      <li className="hover:cursor-pointer">
        <Link href="/admin">
          <a>
            <Image src="/vercel.svg" width={100} height={100} />
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
