"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "./../../../assets/fich.jpg";
import image2 from "./../../../assets/katalog.png";
function Page() {
  const [pdfUrl, setPdfUrl] = useState(
    "https://drive.google.com/uc?id=16iUoxTuoYB7jFbsrzRxlJkXa17GIV4_Y"
  );
  const [pdfUrl2, setPdfUrl2] = useState(
    "https://drive.google.com/uc?id=1TeCCMJlyCpPXCJYUKFLaki8kpoLzpByo"
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadFich = () => {
    const link = document.createElement("a");
    link.href = pdfUrl2;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex h-1/2 w-full flex-row justify-center items-center py-10 gap-64">
        <div className="h-full items-center justify-center flex flex-col">
          <h1 className="text-2xl font-bold mb-4 text-center">Catalogue</h1>
          <button
            onClick={handleDownload}
            className="mt-5 px-6 py-3 bg-[#10183C] text-white rounded-lg hover:bg-[#282B58] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
          >
            Download PDF
          </button>
        </div>
        <div className="flex gap-6 pb-11 flex-col lg:flex-row">
          <Image src={image2} alt="" width={600} height={100} />
        </div>
      </div>

      <div className="flex h-1/2 w-full flex-row justify-between items-center py-10 pl-44 pr-96">
        <div className="h-full items-center justify-center flex flex-col">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Veuillez remplir la fiche technique et nous l&apos;envoyer par
            email.
          </h1>
          <button
            onClick={handleDownloadFich}
            className="mt-5 px-6 py-3 bg-[#10183C] text-white rounded-lg hover:bg-[#282B58] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
          >
            Download PDF
          </button>
        </div>
        <div className="flex gap-6 pb-11 flex-col lg:flex-row">
          <Image src={image1} alt="" width={400} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Page;
