"use server";

import { productTypes } from "../types/productTypes";

export const getBanners = async (): Promise<productTypes[]> => {
  const url = process.env.APP_URL;

  try {
    const res = await fetch(`${url}/banners`);
    const data = await res.json();

    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
