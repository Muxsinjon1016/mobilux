"use client";

import React, { useEffect, useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import Link from "next/link";

export const CartButton = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const length = localStorage.length;
    setNumber(length);
  }, []);

  return (
    <Link href={"/cart"}>
      <div className="bg-black pt-4 pb-3 px-3.5 rounded-l-6">
        <div className="flex items-center gap-1 mb-4">
          <IoBagHandle className="w-4 text-white h-auto" />
          <p className="text-white mx-1 font-semibold">{number}</p>
          <p className="text-white">Mahsulot</p>
        </div>
        <div className="bg-white rounded-6 w-20 h-9 mx-auto">
          <p className="flex items-center justify-center pt-1 font-bold text-lg">
            {number}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CartButton;
