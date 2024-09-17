"use server";

import { productTypes } from "../types/productTypes";

export const getSearch = async (
  searchTerm: string
): Promise<productTypes[]> => {
  const url = process.env.NEXT_PUBLIC_APP_URL;

  try {
    const res = await fetch(
      `https://market-backend-zeta.vercel.app/all?title_like=${searchTerm}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
