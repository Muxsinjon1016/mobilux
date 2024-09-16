import { getCategories } from "@/services/query/getCategories";
import { Link } from "lucide-react";

import React from "react";

export const Aside = async () => {
  const data = await getCategories();

  return (
    <>
      <div>
        {data?.map((item) => {
          return (
            <>
              <div key={item.id}>
                <Link href={`/catalog-list/${item.name}`}>{item.name}</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Aside;
