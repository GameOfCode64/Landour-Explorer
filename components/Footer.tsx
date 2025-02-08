import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="mt-32 w-full bg-ocean-green-500 flex flex-col">
      <div className="flex items-start lg:flex-row flex-col lg:px-20 md:px-8 px-4 py-16 gap-4">
        <div className="basis-1/3 text-wrap">
          <h1 className="text-white font-bold text-lg flex items-center justify-normal ">
            <Mountain className="mr-3" />
            Landour Explorer
          </h1>
          <p className="text-white mt-8 pr-2 text-[14px]">
            Discover the hidden charm of Landour, one trail at a time.Where
            every journey leads to peace and wonder.
          </p>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-col lg:ml-8 font-bold text-white">
            <h1 className="mb-4">Contact Us</h1>

            <p className="flex items-center font-medium justify-normal gap-2">
              <Phone size={17} />
              +91 7827103453
            </p>
            <p className="flex mt-4 font-medium items-center justify-normal gap-2">
              <Mail size={17} />
              info@landourexplorer.in
            </p>
            <p className="flex mt-4 font-medium items-center justify-normal gap-2">
              <MapPin size={17} />
              Dehradun, India
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-col lg:ml-8 mt-4 lg:mt-0 text-white">
            <h1 className="text-lg font-semibold mb-4">Quick Link</h1>
            <ul>
              <li>
                <Link href="/" className=" font-semibold tex-[16px] mt-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treks" className=" font-semibold tex-[16px] mt-2">
                  Treks
                </Link>
              </li>
              <li>
                <Link href="/blogs" className=" font-semibold tex-[16px] mt-2">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about" className=" font-semibold tex-[16px] mt-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/studio" className=" font-semibold tex-[16px] mt-2">
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/contect-us"
                  className=" font-semibold tex-[16px] mt-2"
                >
                  Contect Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/3 lg:mt-0 mt-4">
          <h1 className="text-lg font-bold text-white">Follow Us</h1>
          <div className="flex items-center justify-normal gap-4 lg:mt-12 mt-4">
            <Link
              href="https://www.instagram.com/#"
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Instagram className="text-teal-700" />
            </Link>
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Twitter className="text-teal-700" />
            </Link>
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Facebook className="text-teal-700" />
            </Link>
            <Link
              href="https://www.youtube.com/#"
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Youtube className="text-teal-700" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full border-dotted bg-white lg:my-12 my-6" />
      <div className="mb-4 flex items-center lg:flex-row md:flex-row flex-col gap-3 justify-between px-4 text-white">
        <div />
        <Link href="" className="text-wrap text-center">
          ©2024 landourexplorer.in All rights reserved
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
