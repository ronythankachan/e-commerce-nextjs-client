import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgInstagram } from "react-icons/cg";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 bg-gray-100 py-10 px-[800px] justify-items-center">
        <div>
          <Link href="/">
            <a>
              <Image src="/logo.png" width={50} height={50} />
            </a>
          </Link>
          <div className="flex gap-x-2 -ml-4">
            <a href="https://www.instagram.com" className="hover:text-gray-500">
              <CgInstagram />
            </a>
            <a href="https://www.twitter.com" className="hover:text-gray-500">
              <FiTwitter />
            </a>
            <a href="https://www.facebook.com" className="hover:text-gray-500">
              <AiOutlineFacebook />
            </a>
            <a href="https://www.github.com" className="hover:text-gray-500">
              <FiGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-sm font-bold text-gray-500">Quick Links</h1>
          <Link href="/products">
            <a className="text-xs font-semibold text-gray-500">Products</a>
          </Link>
          <Link href="/about">
            <a className="text-xs font-semibold text-gray-500">About Us</a>
          </Link>
          <Link href="/contact">
            <a className="text-xs font-semibold text-gray-500">Contact Us</a>
          </Link>
        </div>
        <div>
          <h1 className="text-sm font-bold text-gray-500">Contact Us</h1>
          <small className="text-xs font-semibold text-gray-500">
            Block No.1 , Bangalore, Yelehanka, 57323
          </small>
          <small className="text-xs font-semibold text-gray-500">
            Ph: 836397275
          </small>
        </div>
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
