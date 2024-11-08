import React from "react";
import { getPhones } from "@/services/query/getPhones";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";
import CartComponent from "./cart";

export const Phones = async () => {
  const data = await getPhones();

  return (
    <>
      <div className="max-w-[1100px] my-10 ml-auto">
        <div className="flex items-center gap-5 mb-7">
          <IoPhonePortraitOutline className="text-[#1FBA4A] w-8 h-auto" />
          <p className="text-2xl sm:text-4xl font-bold">Phones</p>
        </div>
        <div>
          <div className="relative container overflow-hidden">
            <div className="flex mx-auto items-center gap-5 overflow-x-auto whitespace-nowrap custom-scrollbar">
              {data?.map((item) => (
                <Link href={"/"}>
                  <div
                    key={item.id}
                    className="bg-white w-[147px] sm:w-[264px] p-2 rounded-10 overflow-hidden"
                  >
                    <Link href={`/productDetail/${item.id}`}>
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
                    </Link>

                    <CartComponent
                      productId={String(item.id)}
                      imageUrls={item.img ? [item.img] : []}
                    />
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

export default Phones;
