"use server";

import { addProduct } from "@/app/prisma-db";
import { redirect } from "next/navigation";

export interface FormError {
  name?: string;
  description?: string;
  price?: string;
}

export interface FormState {
  error: FormError;
}
export async function createProduct(prevState: FormState, formData: FormData) {
  const name = formData.get("name");
  const price = formData.get("price");
  const description = formData.get("description");
  const error: FormError = {};
  if (!name) {
    error.name = "Name is required";
  }
  if (!price) {
    error.price = "Price is required";
  }
  if (!description) {
    error.description = "Description is required";
  }
  if (Object.keys(error).length) {
    return { error };
  }
  await addProduct({
    name: name as string,
    price: Number(price),
    description: description as string,
  });
  redirect("/product-db");
}
