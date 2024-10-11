"use client";
import Image from "next/image";
import React from "react";
import passengerelevator from "../assets/passengerelevator.jpg";
import cargoelevator from "../assets/cargoelevator.jpg";
import PanoramicElevator from "../assets/PanoramicElevator.png";
import hospitalelevator from "../assets/hospitalelevator.png";
import Maintenance from "../assets/Maintenance.jpg";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/context/translations";

function ProductCard({ title, image }) {
  return (
    <div className="flex justify-center items-center flex-col border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Image src={image} alt={title} width={400} height={200} className="" />
      <h1 className="text-center text-xl pt-6 text-[#10183C] text-opacity-80">
        {title}
      </h1>
    </div>
  );
}

function Products() {
  const { language } = useLanguage();
  const t = translations[language];

  const productData = [
    { title: t.passengerElevator, image: passengerelevator },
    { title: t.cargoElevator, image: cargoelevator },
    { title: t.panoramicElevator, image: PanoramicElevator },
    { title: t.hospitalElevator, image: hospitalelevator },
    { title: t.maintenance, image: Maintenance },
  ];

  return (
    <div className="flex w-full h-auto flex-col pt-12">
      <div className="text-center px-6 md:px-44 text-[#10183C]">
        <h1 className="text-3xl font-bold py-4">{t.homeTitle}</h1>
        <h3 className="font-semibold">{t.homeDiscreption}</h3>
      </div>

      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 md:px-16 lg:px-60 py-12">
        {productData.map(({ title, image }, index) => (
          <ProductCard key={index} title={title} image={image} />
        ))}
      </div>
    </div>
  );
}

export default Products;
