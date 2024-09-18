import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { getProductDetail } from "@/services/query/getCategories";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import CartButton from "@/components/sections/cartButton";
import CartComponent from "@/components/sections/cart";

interface CatalogProps {
  params: { id: any; brand: string };
}

const productDetails: NextPage<CatalogProps> = async ({ params }) => {
  const items = await getProductDetail(params);

  return (
    <>
      <div className="fixed right-0 top-72 z-50">
        <CartButton />
      </div>
      <div className="bg-white rounded-3xl mt-[100px] lg:mt-[120px]">
        <div className="my-[100px]">
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="p-2 py-10 rounded-10 lg:flex gap-10 flex-wrap justify-between container overflow-hidden"
              >
                <div className="max-w-[580px]">
                  <img
                    className="max-w-[480px] lg:w-[480px] mx-auto mb-3"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="flex items-center flex-wrap mb-4 justify-center">
                    <img
                      className="w-16 h-auto lg:w-20"
                      src={item.img}
                      alt={item.name}
                    />
                    <img
                      className="w-16 h-auto lg:w-20"
                      src={item.img}
                      alt={item.name}
                    />
                    <img
                      className="w-16 h-auto lg:w-20"
                      src={item.img}
                      alt={item.name}
                    />
                    <img
                      className="w-16 h-auto lg:w-20"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="max-w-[720px]">
                  <h3 className="text-2xl lg:text-4xl lg:mb-5 font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-3xl lg:text-5xl font-extrabold mb-5">
                    {item.price}
                  </p>
                  <CartComponent
                    productId={String(item.id)}
                    imageUrls={item.img ? [item.img] : []}
                  />
                  <div>
                    <p className="text-xl block lg:hidden font-bold mb-2">
                      Colors
                    </p>
                    <ul className="flex mb-4 items-center gap-2 lg:justify-between flex-wrap justify-evenly">
                      <p className="text-xl hidden lg:block font-bold mb-2">
                        Colors
                      </p>
                      <li className="py-2 px-4 hover:border-2 border-2 border-transparent hover:border-[#1fba4a] transition-all duration-300 rounded-12 cursor-pointer">
                        <div className="p-5 bg-gray-800 rounded-full max-w-3"></div>
                        <p>Gray</p>
                      </li>
                      <li className="py-2 px-4 hover:border-2 border-2 border-transparent hover:border-[#1fba4a] transition-all duration-300 rounded-12 cursor-pointer">
                        <div className="p-5 bg-amber-300 rounded-full max-w-3"></div>
                        <p>silver</p>
                      </li>
                      <li className="py-2 px-4 hover:border-2 border-2 border-transparent hover:border-[#1fba4a] transition-all duration-300 rounded-12 cursor-pointer">
                        <div className="p-5 bg-blue-900 rounded-full max-w-3"></div>
                        <p>Blue</p>
                      </li>
                      <li className="py-2 px-4 hover:border-2 border-2 border-transparent hover:border-[#1fba4a] transition-all duration-300 rounded-12 cursor-pointer">
                        <div className="p-5 bg-black rounded-full max-w-3"></div>
                        <p>Black</p>
                      </li>
                    </ul>
                    <div className="bg-[#e1f5e9] py-2 px-2 rounded-12 justify-evenly flex items-center gap-4">
                      <div className="flex gap-5 items-center justify-evenly">
                        <div className="p-2 bg-white rounded-full">
                          <Image
                            width={20}
                            height={15}
                            src="/fleg.svg"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-bold">
                            O’zbekiston bo’ylab yetkazib berish:
                          </h3>
                          <p>7 ish kuni</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 mt-5">
                      <h3 className="text-lg lg:text-xl font-bold mb-4">
                        Описание
                      </h3>
                      <p>
                        Смартфон Apple iPhone 13 Pro Max 512 GB Graphite Apple
                        iPhone 13 Pro Max оснащен передовыми технологиями,
                        значительно расширяющими функциональные возможности
                        девайса. На тыльной стороне девайса расположен
                        инновационный
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-5 lg:py-8 px-4 lg:px-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">
          Основные характеристики
        </h2>
        <div>
          <ul>
            {items?.map((item) => {
              console.log(item);

              return (
                <>
                  <li key={item.id}>
                    {item.brand && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Brand</p>
                        <p className="truncate">{item.brand}</p>
                      </div>
                    )}
                    {item.title && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Title</p>
                        <p className="truncate">{item.title}</p>
                      </div>
                    )}
                    {item.rame && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Rame</p>
                        <p className="truncate">{item.rame}</p>
                      </div>
                    )}
                    {item.color && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Color</p>
                        <p className="truncate">{item.color}</p>
                      </div>
                    )}
                    {item.ram && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Ram</p>
                        <p className="truncate">{item.ram}</p>
                      </div>
                    )}
                    {item.geForce && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">GeForce</p>
                        <p className="truncate">{item.geForce}</p>
                      </div>
                    )}
                    {item.core && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Core</p>
                        <p className="truncate">{item.core}</p>
                      </div>
                    )}
                    {item.display && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Display</p>
                        <p className="truncate">{item.display}</p>
                      </div>
                    )}
                    {item.memory && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Memory</p>
                        <p className="truncate">{item.memory}</p>
                      </div>
                    )}
                    {item.weight && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Weight</p>
                        <p className="truncate">{item.weight}</p>
                      </div>
                    )}
                    {item.details?.display && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Display</p>
                        <p className="truncate">{item.details?.display}</p>
                      </div>
                    )}
                    {item.details?.frequency && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Frequency</p>
                        <p className="truncate">{item.details?.frequency}</p>
                      </div>
                    )}
                    {item.details?.weight && (
                      <div className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Weight</p>
                        <p className="truncate">{item.details?.weight}</p>
                      </div>
                    )}
                    {item.details?.security && (
                      <li className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Security</p>
                        <p className="truncate">{item.details?.security}</p>
                      </li>
                    )}
                    {item.details?.diagonal && (
                      <li className="flex items-center justify-between my-1 py-2 border-b-4 border-dotted border-black gap-10">
                        <p className="text-sm lg:text-xl">Diagonal</p>
                        <p className="truncate">{item.details?.diagonal}</p>
                      </li>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default productDetails;
