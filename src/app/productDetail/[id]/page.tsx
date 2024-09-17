import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { getProductDetail } from "@/services/query/getCategories";

interface CatalogProps {
  params: { id: any };
}

const productDetails: NextPage<CatalogProps> = async ({ params }) => {
  const items = await getProductDetail(params);
  console.log(items);
  

  return (
    <>
      <div className="lg:flex lg:items-center container lg:justify-end">
        productDetails page here
        {/* <div className="flex flex-wrap justify-evenly lg:max-w-[1086px] gap-2 my-[120px]">
          {items.map((item) => (
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
          ))}
        </div> */}
      </div>
    </>
  );
};

export default productDetails;
