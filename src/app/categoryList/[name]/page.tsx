import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { productTypes } from "@/services/types/productTypes";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { getItem } from "@/services/query/getCategories";
import Link from "next/link";

interface CatalogProps {
  params: { name: string };
}



const CatalogDetail: NextPage<CatalogProps> = async ({ params }) => {
  const items = await getItem(params.name);
  console.log(items);
  

  return (
    <>
      <div className="lg:flex lg:items-center container lg:justify-end">
        <div className="flex flex-wrap justify-evenly lg:max-w-[1086px] gap-2 my-[120px]">
          {items.map((item) => (
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
                <h2 className="truncate mb-1.5 sm:text-lg">{item.title}</h2>
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
    </>
  );
};

export default CatalogDetail;
