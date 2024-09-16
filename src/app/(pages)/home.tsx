import React from "react";
import Banner from "@/components/sections/banner";
import Category from "@/components/sections/category";

export const MainPage = () => {
  return (
    <>
      <div className="lg:flex items-start justify-between">
        <div className="hidden lg:block">
          <Category />
        </div>
        <div className="mt-[80px] container sm:mt-[120px]">
          <Banner />
        </div>
        <div className="lg:hidden">
          <Category />
        </div>
      </div>
    </>
  );
};

export default MainPage;
