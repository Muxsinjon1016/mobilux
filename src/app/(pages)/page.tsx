import React from "react";
import Banner from "@/components/sections/banner";
import Category from "@/components/sections/category";

export const MainPage = () => {
  return (
    <>
      <div>
        <Banner />
        <div className="lg:hidden">
          <Category />
        </div>
      </div>
    </>
  );
};

export default MainPage;