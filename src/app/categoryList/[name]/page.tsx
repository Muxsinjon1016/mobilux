import { NextPage } from "next";
import { getItem } from "@/services/query/getCategories";
import Link from "next/link";
import SkeletonCard from "@/components/sections/skeleton";
import CartComponent from "@/components/sections/cart";

interface CatalogProps {
  params: { name: string; brand: string };
}

const CatalogDetail: NextPage<CatalogProps> = async ({ params }) => {
  const items = await getItem(params.name);

  return (
    <div className="lg:flex lg:items-center container lg:justify-end">
      <div className="flex flex-wrap justify-evenly lg:max-w-[1086px] gap-2 my-[120px]">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[147px] sm:w-[264px] p-2 rounded-10 overflow-hidden"
            >
              <Link href={`/productDetail/${item.id}`}>
                <img
                  className="w-[141px] sm:w-[260px] h-[151px] sm:h-[270px] transition-all duration-300 mb-2 mx-auto hover:scale-[1.02] sm:mb-1"
                  src={item.img}
                  alt="img"
                />
                <h2 className="truncate mb-1.5 sm:text-lg">{item.title}</h2>
                <p className="font-bold text-lg truncate mb-1.5 sm:text-xl">
                  {item.price} so'm
                </p>
              </Link>
              <CartComponent productId={String(item.id)} />
            </div>
          ))
        ) : (
          <SkeletonCard />
        )}
      </div>
    </div>
  );
};

export default CatalogDetail;
