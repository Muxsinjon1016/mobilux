import React from "react";

// buni import qilib ko'r

interface productTypes {
  img: string;
  title: string;
  brand: string;
  price: string;
  color: string;
  ram: string;
  rame: string;
  geForce?: string | null;
  core?: string;
  display?: string;
  memory?: string | null;
  weight?: string;
  text: string;
  name: string;
  id: number;
}

export const ProductCard: React.FC<productTypes> = ({
  img,
  title,
  brand,
  price,
  color,
  ram,
  rame,
  geForce,
  core,
  display,
  memory,
  weight,
  text,
  name,
  id,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm ">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 ">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="text-md text-gray-700">Brand: {brand}</p>
        <p className="text-md text-gray-700">Price: ${price}</p>
        <p className="text-md text-gray-700">Color: {color}</p>
        <p className="text-md text-gray-700">RAM: {ram}</p>
        <p className="text-md text-gray-700">RAM (extended): {rame}</p>
        {geForce && <p className="text-md text-gray-700">GeForce: {geForce}</p>}
        {core && <p className="text-md text-gray-700">Core: {core}</p>}
        {display && <p className="text-md text-gray-700">Display: {display}</p>}
        {memory && <p className="text-md text-gray-700">Memory: {memory}</p>}
        {weight && <p className="text-md text-gray-700">Weight: {weight}</p>}
        <p className="text-md text-gray-700">{text}</p>
      </div>
    </div>
  );
};
