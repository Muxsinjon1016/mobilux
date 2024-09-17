"use server";

import { productTypes } from "../types/productTypes";

const url = process.env.APP_URL;

export const getCategories = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/catalog`);
    const data = await res.json();

    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

export const getItem = async (name: string): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    const err = (error as Error).message;
    throw new Error(err);
  }
};

export const getProductDetail = async (
  params: any
): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/${params.id}`);
    const data = res.json();
    return data;
  } catch (error) {
    const err = (error as Error).message;
    throw new Error(err);
  }
};
