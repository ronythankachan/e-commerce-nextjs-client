import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 bg-gray-100 p-5 justify-items-center">
        <div>
          <Link href="/">
            <a>
              <Image src="/logo.png" width={50} height={50} />
            </a>
          </Link>
          <div></div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-sm font-bold text-gray-500">QUICK LINKS</h1>
          <Link href="/products">
            <a className="text-xs uppercase font-semibold text-gray-500">
              Products
            </a>
          </Link>
          <Link href="/about">
            <a className="text-xs uppercase font-semibold text-gray-500">
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-xs uppercase font-semibold text-gray-500">
              Contact Us
            </a>
          </Link>
        </div>
        <div>Third section</div>
      </div>
      <div className="bg-gray-200 text-center p-2 ">
        <small className="text-xs text-gray-500">
          This site is developed and managed by Rony Thankachan{" "}
        </small>
      </div>
    </section>
  );
};

export default Footer;
