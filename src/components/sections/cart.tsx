"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RootState } from "@/providers/reduxProvider";
import { saveState, loadState } from "@/redux/storage";
import { AppDispatch } from "@/providers/reduxProvider";
import { add, decrement, setCount, clearCount } from "@/redux/cartSlice";

interface CartItem {
  id: string;
  count: number;
  imageUrls: string[];
}

interface CartComponentProps {
  productId: string;
  imageUrls: string[];
}

export const CartComponent: React.FC<CartComponentProps> = ({
  productId,
  imageUrls,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector(
    (state: RootState) => state.counter[productId]?.count || 0
  );
  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const savedItem = loadState(productId);
    if (savedItem && (savedItem as CartItem).id === productId) {
      setIsInCart(true);
      dispatch(
        setCount({ id: productId, count: (savedItem as CartItem).count })
      );
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    setIsInCart(true);
    incrementCount();
  };

  const incrementCount = () => {
    const newCount = count + 1;
    dispatch(add({ id: productId }));
    saveState(productId, { id: productId, count: newCount, imageUrls });
  };

  const decrementCount = () => {
    const newCount = count > 1 ? count - 1 : 0;
    if (newCount > 0) {
      dispatch(decrement({ id: productId }));
      saveState(productId, { id: productId, count: newCount, imageUrls });
    } else {
      localStorage.removeItem(productId);
      dispatch(clearCount({ id: productId }));
      setIsInCart(false);
    }
  };

  return (
    <>
      {!isInCart ? (
        <Button
          className="mx-auto sm:text-lg flex items-center gap-2 text-center w-full my-2"
          variant={"ghost"}
          onClick={handleAddToCart}
        >
          <MdOutlineAddShoppingCart />
          Savatcha
        </Button>
      ) : (
        <div className="z-30">
          <div className="flex justify-evenly items-center gap-5">
            <Button
              className="rounded-full font-bold text-xl"
              variant={"secondary"}
              onClick={decrementCount}
            >
              -
            </Button>
            <p className="text-xl font-semibold">{count}</p>
            <Button
              className="rounded-full font-bold text-xl"
              variant={"default"}
              onClick={incrementCount}
            >
              +
            </Button>
          </div>
        </div>
      )}
    </>
  )
};

export default CartComponent;
