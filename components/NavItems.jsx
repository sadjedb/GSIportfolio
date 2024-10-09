"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="" onClick={() => setOpen((prev) => !prev)}>
      <Menu size={24} color="#000000" />
      {open && (
        <div className="absolute bg-white text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-3xl  z-10">
          <Link
            href="/"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>{" "}
          </Link>
          <Link
            href="/aboutus"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
          >
            About Us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
          </Link>
          <Link
            href="/contact"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>{" "}
          </Link>
          <Link
            href="/catalog"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
          >
            Catalog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavItems;
