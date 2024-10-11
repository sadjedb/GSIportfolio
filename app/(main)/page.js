import Products from "@/components/Products";
import Slider from "@/components/Slider";
import React from "react";

const MainPage = () => {
  return (
    <div
      className="space-y-2 flex flex-col min-h-screen"
      style={{
        backgroundColor: "#f3f4f6 ",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-2">
        <Slider />
      </div>

      <Products />
    </div>
  );
};

export default MainPage;
