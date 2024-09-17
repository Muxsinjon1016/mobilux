import React from "react";
import { getLaptops } from "@/services/query/getLaptops";
import Link from "next/link";
import { FaLaptop } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export const Laptops = async () => {
  const data = await getLaptops();

  return (
    <>
      <div className="max-w-[1100px] my-10 ml-auto">
        <div className="flex items-center gap-5 mb-7">
          <FaLaptop className="text-[#1FBA4A] w-8 h-auto" />
          <p className="text-2xl sm:text-4xl font-bold">Laptops and computers</p>
        </div>
        <div>
          <div className="relative container overflow-hidden">
            <div className="flex mx-auto items-center gap-5 overflow-x-auto whitespace-nowrap custom-scrollbar">
              {data?.map((item) => (
                <Link key={item.id} href={`/productDetail/${item.id}`}>
                  <div
                    key={item.id}
                    className="bg-white w-[147px] sm:w-[264px] p-2 rounded-10 overflow-hidden"
                  >
                    <img
                      className="w-[141px] sm:w-[260px] h-[151px] sm:h-[270px]  transition-all duration-300 mb-2 mx-auto hover:scale-[1.02] sm:mb-1"
                      src={item.img}
                      alt="img"
                    />
                    <h2 className="line-clamp-2 mb-1.5 sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="font-bold text-lg truncate mb-1.5 sm:text-xl">
                      {item.price} so'm
                    </p>
                    <Button
                      className="mx-auto sm:text-lg flex items-center gap-2 text-center w-full my-2np"
                      variant={"ghost"}
                    >
                      <MdOutlineAddShoppingCart />
                      Savatcha
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laptops;
