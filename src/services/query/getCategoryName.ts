"use server";

import { productTypes } from "../types/productTypes";

export const getCategoriesName = async (name: string): Promise<productTypes[]> => {
  const url = process.env.APP_URL;

  try {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();

    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
