import React from "react";
import { getCategories } from "@/services/query/getCategories";
import "@/app/globals.css";
import Link from "next/link";
import { Button } from "../ui/button";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

export const Category = async () => {
  const data = await getCategories();

  return (
    <div className="mt-4 fixed">
      <div className="relative container overflow-hidden">
        <div className="flex mx-auto items-center lg:hidden gap-5 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {data?.map((category) => (
            <Link key={category.id} href={`/categoryList/${category.name}`}>
              <div className="w-[80px] h-[81px] sm:w-[120px] sm:h-[120px]">
                <div className="w-14 h-14 sm:w-20 sm:h-20 mb-2 bg-white flex items-center justify-center rounded-full">
                  <img
                    className="w-8 mx-auto h-8 sm:w-16 sm:h-16"
                    src={category.img}
                    alt={category.title}
                  />
                </div>
                <h3 className="text-sm uppercase sm:text-lg font-semibold truncate text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden min-h-screen mt-[70px] bg-white px-10 py-8 lg:block">
        <div className="container">
          <Button className="mb-6 flex items-center gap-3">
            <MdOutlineAddShoppingCart className="w-4 h-auto" />
            Maxsus buyurtma
          </Button>
          <div>
            {data?.map((category) => {
              return (
                <>
                  <div key={category.id}>
                    <Link
                      key={category.id}
                      href={`/categoryList/${category.name}`}
                    >
                      <div className="flex transition-all duration-300 hover:scale-[1.03] border-l-4 border-r-4 px-2 border-transparent rounded-12 hover:border-black items-center justify-between">
                        <h3 className="my-3 uppercase">{category.name}</h3>
                        <FaChevronRight className="w-auto h-3" />
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
