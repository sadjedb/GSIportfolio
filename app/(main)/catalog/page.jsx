"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "./../../../assets/1.png";
import image2 from "./../../../assets/2.png";
function Page() {
  const [pdfUrl, setPdfUrl] = useState(
    "https://drive.google.com/uc?id=16iUoxTuoYB7jFbsrzRxlJkXa17GIV4_Y"
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center py-10">
      <div className="flex gap-6 pb-11 flex-col lg:flex-row">
        <Image src={image1} alt="" width={600} height={100} />
        <Image src={image2} alt="" width={600} height={100} />
      </div>
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <div>
        <button
          onClick={handleDownload}
          className="mt-5 px-6 py-3 bg-[#10183C] text-white rounded-lg hover:bg-[#282B58] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default Page;
