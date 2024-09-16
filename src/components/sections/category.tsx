import React from "react";
import { getCategories } from "@/services/query/getCategories";
import "@/app/globals.css";

export const Category = async () => {
  const data = await getCategories();

  return (
    <div className="container mt-4">
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {data?.map((category) => (
            <div
              className="w-[80px] h-[81px] sm:w-[120px] sm:h-[120px]"
              key={category.id}
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 mb-2 bg-white flex items-center justify-center rounded-full">
                <img
                  className="w-8 mx-auto h-8 sm:w-16 sm:h-16"
                  src={category.img}
                  alt={category.title}
                />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold truncate text-center">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
