"use server";

import { productTypes } from "../types/productTypes";

export const getCategories = async (): Promise<productTypes[]> => {
  const url = process.env.APP_URL;

  try {
    const res = await fetch(`${url}/catalog`);
    const data = await res.json();

    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
