"use client"; // Add this line at the top of the file

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

// Define the type for cart items
interface CartItem {
  id: string;
  img: string; // Ensure img is always stored as a string
  title: string;
  price: string;
  count: number;
}

// Helper function to handle localStorage
const loadState = (key: string): CartItem | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const CartComponent: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems: CartItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key ? loadState(key) : null;
      if (item && item.id) {
        storedCartItems.push(item);
      }
    }
    setCartItems(storedCartItems);
  }, []);

  const incrementCount = (id: string) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newCount = item.count + 1;
        const updatedItem = { ...item, count: newCount };
        localStorage.setItem(id, JSON.stringify(updatedItem));
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const decrementCount = (id: string) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === id) {
          const newCount = item.count > 1 ? item.count - 1 : 0;
          if (newCount > 0) {
            const updatedItem = { ...item, count: newCount };
            localStorage.setItem(id, JSON.stringify(updatedItem));
            return updatedItem;
          } else {
            localStorage.removeItem(id);
            return null;
          }
        }
        return item;
      })
      .filter((item): item is CartItem => item !== null);
    setCartItems(updatedItems);
  };

  const removeItem = (id: string) => {
    localStorage.removeItem(id);
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="container my-[150px] px-4">
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="flex-1">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="py-6 flex flex-col lg:flex-row gap-4 px-6 border-b-2"
              >
                <img
                  className="w-full lg:w-[200px] h-auto lg:h-[200px] object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row mb-4 justify-between">
                    <h2 className="text-xl lg:text-2xl font-medium">
                      {item.title}
                    </h2>
                    <p className="text-lg mt-2 lg:mt-0">Price: {item.price}</p>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div
                      className="flex cursor-pointer items-center gap-3 mb-2 lg:mb-0"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash className="text-gray-300 transition-all duration-300 hover:text-black font-bold" />
                      <p className="text-gray-300 transition-all duration-300 hover:text-black font-bold">
                        Удалить
                      </p>
                    </div>
                    <div className="flex bg-gray-300 rounded-md gap-2 items-center mt-2 lg:mt-0">
                      <button
                        className="rounded-md py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                        onClick={() => decrementCount(item.id)}
                      >
                        -
                      </button>
                      <p className="rounded-md py-1 px-3 bg-gray-100 font-semibold border-2">
                        {item.count}
                      </p>
                      <button
                        className="rounded-md py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                        onClick={() => incrementCount(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No items in the cart.</p>
          )}
        </div>
        <div className="lg:w-[20%] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default CartComponent;
