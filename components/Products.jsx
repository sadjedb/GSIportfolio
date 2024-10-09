import Image from "next/image";
import React from "react";

import passengerelevator from "../assets/passengerelevator.jpg";
import cargoelevator from "../assets/cargoelevator.jpg";
import PanoramicElevator from "../assets/PanoramicElevator.png";
import hospitalelevator from "../assets/hospitalelevator.png";
import Maintenance from "../assets/Maintenance.jpg";
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
  const productData = [
    { title: "Passenger Elevator", image: passengerelevator },
    { title: "Cargo Elevator", image: cargoelevator },
    { title: "Panoramic Elevator", image: PanoramicElevator },
    { title: "Hospital Elevator", image: hospitalelevator },
    { title: "Maintenance", image: Maintenance },
  ];

  return (
    <div className="flex w-full h-auto flex-col pt-12">
      <div className="text-center px-6 md:px-44 text-[#10183C]">
        <h1 className="text-3xl font-bold py-4">
          Elevator Design, Installation, and Maintenance Specialists
        </h1>
        <h3 className="font-semibold">
          G.S.I Ascenseurs is dedicated to providing innovative, reliable, and
          safe elevator solutions. We offer comprehensive services, including
          consultation, design, installation, and maintenance, to ensure your
          vertical transportation needs are met efficiently and
          cost-effectively.
        </h3>
      </div>

      <div className="grid  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 md:px-16 lg:px-60 py-12">
        {productData.map(({ title, image }, index) => (
          <ProductCard key={index} title={title} image={image} />
        ))}
      </div>
    </div>
  );
}

export default Products;
