import React from "react";
import Link from "next/link";
import { Menu, Mountain, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full md:h-[90px] h-[70px] border-b-[1px] border-gray-200">
      <div className="flex justify-between items-center h-full px-4 md:px-12">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Mountain className="text-ocean-green-500" />
          <h1 className="text-lg mt-1 font-bold ">Landour Explorer</h1>
        </Link>

        <div className="md:flex hidden items-center justify-normal gap-8">
          <Link href="/" className="font-semibold text-[17px]">
            Home
          </Link>
          <Link href="/" className="font-semibold text-[17px]">
            Treks
          </Link>
          <Link href="/" className="font-semibold text-[17px]">
            Blogs
          </Link>
          <Link href="/" className="font-semibold text-[17px]">
            About
          </Link>
          <Link href="/" className="font-semibold text-[17px]">
            Contact
          </Link>
          <Search className="cursor-pointer" />
        </div>
        <div className="md:hidden flex items-center justify-normal gap-4">
          <Search className="cursor-pointer" />
          <Sheet>
            <SheetTrigger>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-center mt-12 justify-normal gap-8">
                <Link href="/" className="font-semibold text-[17px]">
                  Home
                </Link>
                <Link href="/" className="font-semibold text-[17px]">
                  Treks
                </Link>
                <Link href="/" className="font-semibold text-[17px]">
                  Blogs
                </Link>
                <Link href="/" className="font-semibold text-[17px]">
                  About
                </Link>
                <Link href="/" className="font-semibold text-[17px]">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
