"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "./../../../assets/fich.jpg";
import image2 from "./../../../assets/katalog.png";
import { translations } from "@/app/context/translations";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Page() {
  const [pdfUrl, setPdfUrl] = useState(
    "https://drive.google.com/uc?id=16iUoxTuoYB7jFbsrzRxlJkXa17GIV4_Y"
  );
  const [pdfUrl2, setPdfUrl2] = useState(
    "https://drive.google.com/uc?id=1TeCCMJlyCpPXCJYUKFLaki8kpoLzpByo"
  );

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <div className="flex flex-col md:flex-row justify-center items-center w-full py-10 gap-8 md:gap-16 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 text-center">{t.services}</h1>
          <button
            onClick={() => handleDownload(pdfUrl)}
            className="mt-5 px-6 py-3 bg-[#10183C] text-white rounded-lg hover:bg-[#282B58] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
          >
            <span>{t.download}</span> PDF
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={image2}
            alt=""
            width={600}
            height={100}
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full py-10 gap-8 md:gap-16 lg:px-[280px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 text-center px-4">
            {t.completSheet}
          </h1>
          <button
            onClick={() => handleDownload(pdfUrl2)}
            className="mt-5 px-6 py-3 bg-[#10183C] text-white rounded-lg hover:bg-[#282B58] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
          >
            <span>{t.downloadfile}</span>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={image1}
            alt=""
            width={400}
            height={100}
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
