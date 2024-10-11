"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="z-50 relative"
      >
        <Menu size={24} color="#000000" />
      </button>
      {open && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-3xl z-40">
          <Link
            href="/"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C]"
            onClick={() => setOpen(false)}
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
          </Link>
          <Link
            href="/aboutus"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C]"
            onClick={() => setOpen(false)}
          >
            About Us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
          </Link>
          <Link
            href="/contact"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C]"
            onClick={() => setOpen(false)}
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
          </Link>
          <Link
            href="/catalog"
            className="group text-gray-700 transition duration-500 hover:text-[#10183C]"
            onClick={() => setOpen(false)}
          >
            Catalog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavItems;
