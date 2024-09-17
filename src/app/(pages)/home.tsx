import React from "react";
import Banner from "@/components/sections/banner";
import Category from "@/components/sections/category";
import Phones from "@/components/sections/phones";
import Laptops from "@/components/sections/laptops";
import Sport from "@/components/sections/sport";

export const MainPage = () => {
  return (
    <>
      <div className="lg:flex items-start justify-between">
        <div className="hidden lg:block">
          <Category />
        </div>
        <div className="mt-[80px] container sm:mt-[120px]">
          <Banner />
          <div className="lg:hidden">
            <Category />
          </div>
          <Phones />
          <Laptops />
          <Sport />
        </div>
      </div>
    </>
  );
};

export default MainPage;
