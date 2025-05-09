"use client";
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
import { useSearch } from "@/hooks/use-search";

const Navbar = () => {
  const { onOpen } = useSearch();
  return (
    <div className="w-full md:h-[90px] h-[70px]">
      <div className="flex justify-between items-center h-full px-4 md:px-12">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Mountain className="text-ocean-green-500" />
          <h1 className="text-lg mt-1 font-bold ">Landour Explorer</h1>
        </Link>
        <div className="md:flex hidden items-center justify-normal gap-8">
          <Link href="/" className="font-semibold text-[17px]">
            Home
          </Link>
          <Link href="/treks" className="font-semibold text-[17px]">
            Treks
          </Link>
          <Link href="/blogs" className="font-semibold text-[17px]">
            Blogs
          </Link>
          <Link href="/about" className="font-semibold text-[17px]">
            About
          </Link>
          <Link href="/contact-us" className="font-semibold text-[17px]">
            Contact
          </Link>
          <Search className="cursor-pointer" onClick={onOpen} />
        </div>
        <div className="md:hidden flex items-center justify-normal gap-4">
          <Search className="cursor-pointer" onClick={onOpen} />
          <Sheet>
            <SheetTrigger>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-center mt-12 justify-normal gap-8">
                <Link href="/" className="font-semibold text-[17px]">
                  Home
                </Link>
                <Link href="/treks" className="font-semibold text-[17px]">
                  Treks
                </Link>
                <Link href="/blogs" className="font-semibold text-[17px]">
                  Blogs
                </Link>
                <Link href="/about" className="font-semibold text-[17px]">
                  About
                </Link>
                <Link href="/contact-us" className="font-semibold text-[17px]">
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
