import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { productTypes } from "@/services/types/productTypes";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from "next/link";

interface CatalogProps {
  params: { name: string };
}

const url = process.env.APP_URL;

const CatalogDetail: NextPage<CatalogProps> = async ({ params }) => {
  const GetItem = async (): Promise<productTypes[]> => {
    try {
      const res = await fetch(`${url}/${params.name}`);
      const data = res.json();
      return data;
    } catch (error) {
      const err = (error as Error).message;
      throw new Error(err);
    }
  };

  const items = await GetItem();

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
                  className="w-[141px] sm:w-[260px]  transition-all duration-300 mb-2 mx-auto hover:scale-[1.02] sm:mb-1"
                  src={item.img}
                  alt="img"
                />
                <h2 className="line-clamp-2 mb-1.5 sm:text-lg">{item.title}</h2>
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

export default CatalogDetail
