import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsFilePersonFill } from "react-icons/bs";
function socials() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700 bg-gray-800">
          <a
            href="https://www.instagram.com/gsiascenseur"
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Instgram <RiInstagramFill size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700 bg-[#282C58]">
          <a
            href="https://www.facebook.com/GENERALSTANDIMPORT"
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700 bg-[#4078B2]">
          <a
            href="mailto:generalstandimport@gmail.com"
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-700 bg-[#51524e]">
          <a
            href="/contact"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Contact <BsFilePersonFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default socials;
