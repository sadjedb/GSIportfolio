"use client";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./Language";
import NavItems from "./NavItems";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/context/translations";

function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className={`flex h-20 w-full shadow-md top-0 left-0 right-0 bg-[#f3f4f6] z-50 text-gray-100 justify-between ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="flex justify-center items-center md:hidden px-4">
        <NavItems />
      </div>
      <div className="flex">
        <Link href="/" className="w-full ">
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={100}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="h-full justify-center items-center w-full gap-4 md:gap-6 lg:gap-8 text-xl font-semibold hidden md:flex ">
        <Link
          href="/"
          className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
        >
          {t.home}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
        </Link>
        <Link
          href="/aboutus"
          className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
        >
          {t.aboutUs}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
        </Link>
        <Link
          href="/contact"
          className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
        >
          {t.contactUs}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
        </Link>
        <Link
          href="/catalog"
          className="group text-gray-700 transition duration-500 hover:text-[#10183C] "
        >
          {t.services}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#10183C]"></span>
        </Link>
      </div>
      <div className="flex justify-center items-center px-4">
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Header;
